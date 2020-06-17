import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column, Row } from "simple-flexbox";
import "./manufacturing-form.css";


class ManufacturingForm extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="form-container" fluid>
          <h2 className="form-title">Manufacturing</h2>
          {/* <Form.Text className="text-muted">Starred Fields Are Required</Form.Text> */}

            <Form>
                <Form.Group controlId="material">
                    <Form.Label><strong>Material*</strong></Form.Label>
                    <Form.Control as="select" className="input-margin">
                    <option default>Maple</option>
                    <option>Walnut</option>
                    <option>Ash</option>
                    <option>Cherry</option>
                    <option>White Oak</option>
                    <option>Aluminum/Wood Cut-Join</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="finish">
                    <Form.Label><strong>Finish*</strong></Form.Label>
                    <Form.Control as="select" className="input-margin">
                    <option>Painted</option>
                    <option>Stained</option>
                    <option>Natural</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="finish-option">
                    <Form.Label><strong>Finish Option*</strong></Form.Label>
                    <Row horizontal="space-between">
                    <Form.Control as="select" className="input-margin" style={{width: 150}}>
                        <option disabled selected>Paint Options</option>
                    </Form.Control>
                    <Form.Control as="select" className="input-margin" style={{width: 150}}>
                    <option disabled selected>Stain Options</option>
                    </Form.Control>
                    <Form.Control as="select" className="input-margin"style={{width: 150}}>
                    <option disabled selected>Natural Options</option>
                    </Form.Control>
                    </Row>
                </Form.Group>

                <Form.Group controlId="width-depth">
                    {/* <Form.Label><strong>Image Dimensions (Inches)*</strong></Form.Label> */}
                    <Row horizontal="space-between">
                        <Column horizontal="space-between">
                            <Form.Label><strong>Strainer*</strong></Form.Label>
                            <Form.Control as="select" className="input-margin"style={{width: 220}}>
                                <option>3/8"</option>
                                <option>1/2"</option>
                                <option>5/8"</option>
                                <option>3/4"</option>
                                <option>No Strainer</option>
                            </Form.Control>
                        </Column>

                        <Column horizontal="space-between">
                        <Form.Label><strong>Painted Strainer*</strong></Form.Label>
                            <Form.Control as="select" className="input-margin"style={{width: 220}}>
                                <option>No</option>
                                <option>Yes</option>
                            </Form.Control>
                        </Column>
                    </Row>
                </Form.Group>
                
            </Form>
        </Container>
        </div>
  
      );
    }
  }


export default ManufacturingForm;