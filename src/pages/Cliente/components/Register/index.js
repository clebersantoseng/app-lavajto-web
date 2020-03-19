import React, { useState } from "react";
import { Button, Modal, ProgressBar } from "react-bootstrap";
//import { Link } from "react-router-dom";
//import api from "../../../../services/api";

import "./style.css";
import Cadastrar from "../Formulario";

function Register() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  const handleSignUp = () => map(Cadastrar.handleSignUp)
  

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Cadastrar
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-desktop">
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          
          <Cadastrar />
          <ProgressBar animated now={7} variant="success" />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <i className="fas fa-minus-circle"> Cancelar</i>
          </Button>
          <Button variant="success" onClick={handleSignUp}>
            <i className="fas fa-save"> Salvar</i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }

export default Register; 