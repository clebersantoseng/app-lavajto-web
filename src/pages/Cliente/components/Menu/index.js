import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, /* Form, FormControl, Button */ } from "react-bootstrap";
import "./style.css";

class MenuDropdown extends Component {
    render() {
        return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home"><i className="fas fa-car" > LavaJato Senna</i></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

              <Nav.Link href="/app"><i className="fas fa-home"> Home</i></Nav.Link>
              <Nav.Link href="/cliente"><i className="fas fa-users"> Cliente</i></Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-success">Buscar</Button>
          </Form> */}
          </Navbar.Collapse>
        </Navbar>
        );
    }
};

export default MenuDropdown;