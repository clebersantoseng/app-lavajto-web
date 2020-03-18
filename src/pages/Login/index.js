import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";


import "./styles.css";
import Logo from "../../assets/lava-jato.png";
import api from "../../services/api";
import { login } from "../../services/auth";
 

import { Form, Container } from "./styles";

class Login extends Component {
  state = {
    uid: "",
    password: "",
    error: ""
  }

  handleSignIn = async e => {
    e.preventDefault();
    const { uid, password } = this.state;
    if ( !uid || !password) {
      this.setState({ error: "Digite seu Usuário e Senha !"});
    } else {
      try {
        const response = await api.post("/sessions", { uid, password });
        login(response.data.token);
        this.props.history.push("/app")
        } catch (err) {
          this.setState({
            error:
              "Não foi possivel realizar o login !"
          });
        }
    }
  };
  

  render() {
    return (
      
     <Container className="form-section">
          <img src={Logo} alt="Logo LavaJato Senna"/>
          <h1>Login</h1>

        <div className="form-wrapper">
        <Form onSubmit={this.handleSignIn}>
            <h3>
              {this.state.error && <p>{this.state.error}</p>}
            </h3>

            <div className="input-block">
                <input 
                type="text" 
                placeholder="Usuário :"
                className="moveEffect"
                onChange={e => this.setState({ uid: e.target.value })}
              />
            </div>

            <div className="input-block">
                <input 
                type="password" 
                className="moveEffect"
                placeholder="Senha :"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
          
            <button type="submit" id="btn-login" className="btn-login">Acessar</button>          
        </Form>
        <Link to="/cadastrar">Criar conta grátis</Link>
            <hr />
        </div>

        <h2>Copyright©2020, CsCódigos Company. Todos os direitos reservados.</h2>
        
      </Container> 
    );
  }
}

export default withRouter(Login);