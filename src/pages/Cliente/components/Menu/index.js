import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { logout } from "../../../../services/auth";
import "./style.css";
import { ButtonContainer } from '../../../App/styles';

class MenuDropdown extends Component {

    handleLogout = e => {
      logout();
      this.props.history.push("/login");
    };

    handleMoveUp = e => {
        window.scrollTo(0, 0);
     
    }

    renderActions() {
      return (
        <ButtonContainer>
          <Button onClick={this.handleMoveUp} variant="dark" id="move-up">
            <i className="fas fa-chevron-circle-up"></i> 
          </Button>
        </ButtonContainer>
      );
    }

    render() {
        return (

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
              <Navbar.Brand href="#home"><i className="fas fa-car" > LavaJato Senna</i></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

          <Nav.Link href="/app"><i className="fas fa-home"> Home</i></Nav.Link>
          <Nav.Link href="/cliente"><i className="fas fa-users"> Cliente</i></Nav.Link>
          <Nav.Link href="#servicos"><i className="fas fa-business-time"> Serviços</i></Nav.Link>
          <Nav.Link href="#funcionario"><i className="fas fa-user-tie"> Funcionário</i></Nav.Link>
          <Nav.Link href="#relatorio"><i className="fas fa-chart-line"> Relatório</i></Nav.Link>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>             
              
          </Nav>
          <Nav>
              <hr id="separator-menu"></hr>
              <Nav.Link onClick={this.handleLogout}><i className="fas fa-sign-in-alt" id="logout" alt="Sair"> Sair</i></Nav.Link>
          </Nav>
          
          </Navbar.Collapse>  
          {this.renderActions()}        
        </Navbar>    
        
        );
    }
};

export default withRouter(MenuDropdown);