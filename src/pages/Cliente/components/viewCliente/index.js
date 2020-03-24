import React, { Component } from "react";

import MenuDropdown from "../Menu";
import { Container, ListGroup } from "react-bootstrap";

import api from "../../../../services/api";
import { Link } from "react-router-dom";

import "./style.css";

class viewCliente extends Component {

    state = {
        cliente: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/clientes/${id}`);
        console.log(response)

        this.setState({ cliente: response.data });
    }

    render(){   
        const  { cliente }  = this.state;

        return (
            
            
            <div className="body-view">
            <MenuDropdown/>
            <Container>
                <div className="topo">
                <Link to="/cliente"><i className="fas fa-arrow-left" alt="Voltar"></i></Link>
                </div>
                
                <hr></hr>
             
                <ListGroup>
                    <ListGroup.Item variant="info">Dados Cliente</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fas fa-user" /> <b>Nome:</b> {cliente.name}</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fas fa-id-badge" /> <b>ID:</b> {cliente.id}</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fas fa-id-card"></i> <b>CPF:</b> {cliente.cpf}</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fas fa-phone"></i> <b>Telefone:</b> {cliente.tel}</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fab fa-whatsapp"></i> <b>Whatsapp:</b> {cliente.whatsapp}</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fas fa-map-pin"></i> <b>Endereço:</b> {cliente.address}</ListGroup.Item>
                </ListGroup>
            </Container>
            </div>

        ); 
    }

}

export default viewCliente;