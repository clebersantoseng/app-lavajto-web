import React, { Component, Fragment } from "react";

import Menu from "../Cliente/components/Menu";
import api from "../../services/api";
import Graphics from "./components/Graphics";

class App extends Component {

  state = {
    cliente: {}
  }

  async componentDidMount() {
    const data = await api.get('/clientes');
    console.log(data.data.length)

    this.setState({ cliente: data.data.length });
  }


  render() {
    const  { cliente }  = this.state;
    console.log(cliente);
    
    return (
    
    <Fragment>
      <Menu/>
      <h1>DASHBOARD</h1>
      <Graphics />
    </Fragment>
    );
  }
}

export default App;