import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

import api from  "../../../../services/api";

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
        setTimeout(() => { this.props.history.push("/cliente");}, 3000);
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao cadastrar seus dados." });
      }
    }
  };

  render() {
    return(

      <Form>            
        <Form.Group>
        {this.state.error && <p>{this.state.error}</p>}

            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-user-plus"></i></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Nome Completo"
                aria-describedby="inputGroupPrepend"
                required
                onChange={e => this.setState({ name: e.target.value })}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend"><i className="far fa-id-card"></i></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Cpf"
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-phone"></i></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Telefone"
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-paper-plane"></i></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Whatsapp"
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-map-marked-alt"></i></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Endereço"
                aria-describedby="inputGroupPrepend"
                required
                
              />
            </InputGroup>
          </Form.Group>

        </Form>
    );
  }
    
}

export default Cadastrar;