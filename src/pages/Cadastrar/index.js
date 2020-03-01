import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/lava-jato.png";

import { Form, Container } from "./styles";
import api from "../../services/api";

class Cadastrar extends Component {
  state = {
    name: "",
    cpf: "",
    tel: "",
    whatsapp: "",
    address: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, cpf, tel, whatsapp, address } = this.state;
    if (!name || !cpf || !tel || !whatsapp || !address) {
      this.setState({ error: "Preencha todos os campos para se cadastrar" });
    } else {
      try {
        await api.post("/clientes", { name, cpf, tel, whatsapp, address });
        this.setState({ error: "Cadastrado com sucesso!" });
        setTimeout(() => { this.props.history.push("/");}, 3000);
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao cadastrar seus dados." });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="LavaJato Senna logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome Completo"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            placeholder="CPF"
            onChange={e => this.setState({ cpf: e.target.value })}
          />
          <input
            type="text"
            placeholder="Telefone"
            onChange={e => this.setState({ tel: e.target.value })}
          />
          <input
            type="text"
            placeholder="Whatsapp"
            onChange={e => this.setState({ whatsapp: e.target.value })}
          />
          <input
            type="text"
            placeholder="Endereço "
            onChange={e => this.setState({ address: e.target.value })}
          />
          <button type="submit">Cadastrar Cliente</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Cadastrar);