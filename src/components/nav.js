import React from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "./nav.css";
import 'bootstrap/dist/css/bootstrap.css';


class Navigation extends React.Component {
    render() {
      return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" style={ {fontSize: 30} } className="custom-brand"><img className="logo" src="../noun_Frame_993831 (2).png"></img>Fine Art Frameworks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavDropdown title="Orders" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/build">Create Order</NavDropdown.Item>
                    <NavDropdown.Item href="/orders">View Orders</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="View" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/clients">Clients</NavDropdown.Item>
                    <NavDropdown.Item href="/users">Users</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Materials" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/lumber">Lumber</NavDropdown.Item>
                    <NavDropdown.Item href="/glazing">Glazing</NavDropdown.Item>
                    <NavDropdown.Item href="/mounting">Drymount</NavDropdown.Item>
                    <NavDropdown.Item href="/spacers">Spacers</NavDropdown.Item>
                    <NavDropdown.Item href="/extras">Extras</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form> */}
        </Navbar.Collapse>
    </Navbar>
  
      );
    }
  }


export default Navigation;