import React, { Component }from "react";
import { Container } from "react-bootstrap";

import MenuDropdown from "./components/Menu";
import Cliente from "./components/View";
import Register from "./components/Register";
import Search from "./components/Search";
import "./style.css";


class Clientes extends Component {

  
  render() {
    return (
      <div > 
        <MenuDropdown />
          <Container id="barra">
              <Register />
              <Search />
          <hr></hr>
          <Cliente  />
          <hr></hr>
          </Container>
        </div>
    );    
  }
}
 
export default Clientes;

