import React from "react";
import { Form, InputGroup, Pagination } from "react-bootstrap";

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


function Pages() {
    return(
        <Container className="pages">
        <Pagination >
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            
            
            <Pagination.Item active>{12}</Pagination.Item>
            

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
        </Container>
        
        );
}
export default Pages;