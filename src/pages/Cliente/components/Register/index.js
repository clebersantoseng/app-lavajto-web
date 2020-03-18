import React, { useState, Component } from "react";
import { Button, Modal, Form, ProgressBar, InputGroup } from "react-bootstrap";
//import { Link } from "react-router-dom";
//import api from "../../../../services/api";

import "./style.css";

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleSignUp = (event) => {
    event.preventDefault();
    let name = this.state.name;
  }

  myTesteHandle = (event) => {
    this.setState({name: event.target.value});
  }

   const [show, setShow] = useState(false);

  const handleClose = (event) => setShow(false);
  const handleShow = () => setShow(true); 

  render() {
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Cadastrar
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-desktop">
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Cliente</Modal.Title>
          <h1>{this.state.name}</h1>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form className="modal-form" onSubmit={this.handleSignUp}>            
          <Form.Group>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-user-plus"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Nome Completo"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={this.myTesteHandle}
                  
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

          <ProgressBar animated now={7} variant="success" />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <i className="fas fa-minus-circle"> Cancelar</i>
          </Button>
          <Button variant="success" type="submit">
            <i className="fas fa-save"> Salvar</i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }
}

export default Register; 