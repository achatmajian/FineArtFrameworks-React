import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Row } from "simple-flexbox";
import "./new-client-form.css";


class NewClientForm extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="form-container" fluid>
          <h2 className="form-title">Add New Client</h2>
          <Form.Text className="text-muted">Starred Fields Are Required</Form.Text>

            <Form>
                <Form.Group controlId="new-client-name">
                    <Form.Label><strong>Client Name*</strong></Form.Label>
                    <Row horizontal="space-between">
                        <Form.Control className="input-field" type="text" placeholder="First Name" style={{width: 220}}/>
                        <Form.Control type="text" placeholder="Last Name" style={{width: 220}}/>
                    </Row>
                </Form.Group>

                <Form.Group controlId="new-client-email">
                    <Form.Label><strong>Email*</strong></Form.Label>
                    <Form.Control type="email" placeholder="client@gmail.com" />
                </Form.Group>

                <Form.Group controlId="new-client-phone">
                    <Form.Label><strong>Phone Number*</strong></Form.Label>
                    <Form.Control type="text" placeholder="212-555-5555" />
                </Form.Group>

                <Form.Group controlId="new-client-address">
                    <Form.Label><strong>Address*</strong></Form.Label>
                        <Row horizontal="space-between">
                            <Form.Control className="input-field" type="text" placeholder="Street Address" style={{width: 220}}/>
                            <Form.Control className="input-field" type="text" placeholder="Apt #" style={{width: 220}}/>
                        </Row>

                        <Row horizontal="space-between">
                            <Form.Control className="input-field" type="text" placeholder="City" style={{width: 150}}/>
                            <Form.Control className="input-field" as="select" placeholder="State" style={{width: 130}}>
                                <option>State</option>
                            </Form.Control>
                            <Form.Control type="text" placeholder="Zip" style={{width: 150}} />
                        </Row>



                </Form.Group>

                <Form.Group controlId="new-client-type">
                    <Form.Label><strong>Client Type*</strong></Form.Label>
                    <Form.Control as="select">
                    <option>Wholesale</option>
                    <option>Retail</option>
                    </Form.Control>
                </Form.Group>

                <hr></hr>

                <Row horizontal="space-evenly" className="new-client-buttons">

                    <Button variant="primary">Submit New Client</Button>{' '}
                    <Button variant="secondary">Use Existing Client</Button>{' '}           

                </Row>
                
            </Form>
        </Container>
        </div>
  
      );
    }
  }


export default NewClientForm;