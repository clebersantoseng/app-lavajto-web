import React from "react";
import { Form, InputGroup } from "react-bootstrap";

import "./style.css";

function Search() {    
    return(
        <Form.Group className="container-search">
            <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-search"></i></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
                type="text"
                placeholder="Pesquisar"
                aria-describedby="inputGroupPrepend"
                required
                
            />
            </InputGroup>
        </Form.Group>    
    );

}
export default Search;
