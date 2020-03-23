import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import Cadastrar from "./pages/Cadastrar";
import Login from "./pages/Login";
import App from "./pages/App";
import Cliente from "./pages/Cliente";
import viewCliente from "./pages/Cliente/components/viewCliente";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/cadastrar" component={Cadastrar} />
      <Route path="/cliente" component={Cliente} />
      <Route path="/viewCliente/:id" component={viewCliente} />
      
      <PrivateRoute path="/app" component={App} />
      <Route path="*" component={() => <h1>Erro 404: Página não encontrada !</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;