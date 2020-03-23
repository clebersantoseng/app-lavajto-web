import React, { Component } from "react";

import MenuDropdown from "../Menu";
import { Container, ListGroup } from "react-bootstrap";

import api from "../../../../services/api";
import { Link } from "react-router-dom";

import "./style.css";

class viewCliente extends Component {

    state = {
        id: "",
        name: "",
        cpf: "",
        tel: "",
        whatsapp: "",
        address: ""
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/clientes/${id}`);
        console.log(response)

        this.setState({ response });
    }

    render(){   
        //const  cliente  = this.state;

        return (
            
            
            <div className="body-view">
            <MenuDropdown/>
            <Container>
                <div className="topo">
                <Link to="/cliente"><i className="fas fa-arrow-left" alt="Voltar"></i></Link>
                </div>
                
                <hr></hr>
                
                {/* {cliente.name}
                {cliente.id}
                 {cliente.cpf}
                {cliente.tel}
                {cliente.whatsapp}
                {cliente.address} */}

                <ListGroup>
                    <ListGroup.Item variant="info">Dados Cliente</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fas fa-user" /> Nome: Cleber Santos Fernandes</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fas fa-hashtag" /> ID: 20200301</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fas fa-id-card"></i> CPF: 045.637.051-01</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fas fa-phone"></i> Telefone: 62 99612-1210</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fas fa-paper-plane"></i> Whatsapp: 62 99612-1210</ListGroup.Item>
                    <ListGroup.Item variant="secondary"><i className="fas fa-map-pin"></i> Endereço: Rua Antônio Miguel de Castro, N183 - Bairro Michelle</ListGroup.Item>
                </ListGroup>
            </Container>
            </div>

        ); 
    }

}

export default viewCliente;