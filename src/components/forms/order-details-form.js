import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Row } from "simple-flexbox";
import "./order-details-form.css";


class OrderDetailsForm extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="form-container" fluid>
          <h2 className="form-title">Add Order Details</h2>
          <Form.Text className="text-muted">Starred Fields Are Required</Form.Text>

            <Form>
                <Form.Group controlId="order-frame-quantity">
                    <Form.Label><strong>Frame Quantity*</strong></Form.Label>
                    <Form.Control type="number" placeholder="1" />
                </Form.Group>

                <Form.Group controlId="order-date-due">
                    <Form.Label><strong>Date Due*</strong></Form.Label>
                    <Form.Control type="date" />
                </Form.Group>

                <Form.Group controlId="order-rush-job">
                    <Form.Label><strong>Rush Job*</strong></Form.Label>
                    <Form.Control as="select" className="input-margin">
                    <option default>No</option>
                    <option>1 Week</option>
                    <option>2 Weeks</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="order-sales-tax">
                    <Form.Label><strong>Sales Tax*</strong></Form.Label>
                    <Form.Control as="select" className="input-margin">
                    <option default>Tax Exempt</option>
                    <option>State Sales Tax</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="order-discount">
                    <Form.Label><strong>Discount*</strong></Form.Label>
                    <Form.Control as="select" className="input-margin">
                    <option default>None</option>
                    <option>10%</option>
                    <option>15%</option>
                    <option>20%</option>
                    <option>25%</option>
                    <option>30%</option>
                    <option>35%</option>
                    <option>40%</option>
                    <option>45%</option>
                    <option>50%</option>
                    </Form.Control>
                </Form.Group>

                <hr></hr>

                <Row horizontal="space-evenly" className="new-client-buttons">

                    <Button variant="primary" style={{width: 250}}>Submit Order Details</Button>{' '}
                    <Button variant="outline-primary" style={{width: 120}}>Back</Button>{' '}           

                </Row>
                
            </Form>
        </Container>
        </div>
  
      );
    }
  }


export default OrderDetailsForm;