import React from "react";
import { Container, Button, ButtonGroup, Form, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./new-client.css";


class NewClientForm extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="form-container" fluid>
          <h2 className="form-title">Add New Client</h2>
          <p className="form-title">Starred Fields Are Required</p>

            <Form>
                <Form.Group controlId="new-client-name">
                    <Form.Label><strong>Client Name*</strong></Form.Label>
                    <Form.Control className="input-field" type="text" placeholder="First Name" />
                    <Form.Control type="text" placeholder="Last Name" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="new-client-email">
                    <Form.Label><strong>Email*</strong></Form.Label>
                    <Form.Control type="email" placeholder="client@gmail.com" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="new-client-phone">
                    <Form.Label><strong>Phone Number*</strong></Form.Label>
                    <Form.Control type="text" placeholder="212-555-5555" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="new-client-address">
                    <Form.Label><strong>Address*</strong></Form.Label>
                    <Form.Control className="input-field" type="text" placeholder="Street Address" />
                    <Form.Control className="input-field" type="text" placeholder="Apt #" />
                    <Form.Control className="input-field" type="text" placeholder="City" />
                    <Form.Control className="input-field" as="select" placeholder="State">
                    <option>State</option>
                    </Form.Control>
                    {/* <Form.Control type="text" placeholder="State" /> */}
                    <Form.Control type="text" placeholder="Zip" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="new-client-type">
                    <Form.Label><strong>Client Type*</strong></Form.Label>
                    <Form.Control as="select">
                    <option>Wholesale</option>
                    <option>Retail</option>
                    </Form.Control>
                </Form.Group>

                <hr></hr>

                <Row horizontal="center">

                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary">Submit New Client</Button>{' '}
                    <Button variant="secondary">Use Existing Client</Button>{' '}
                </ButtonGroup>

                </Row>
                
            </Form>
        </Container>
        </div>
  
      );
    }
  }


export default NewClientForm;