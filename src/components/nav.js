import React from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "./nav.css";
import 'bootstrap/dist/css/bootstrap.css';


class Navigation extends React.Component {
    render() {
      return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Fine Art Frameworks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavDropdown title="Orders" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Create Order</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">View Orders</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="View" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Clients</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Users</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Materials" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Lumber</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Glazing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Drymount</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Spacers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Extras</NavDropdown.Item>
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