import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column, Row } from "simple-flexbox";
import "./sizing-form.css";


class SizingForm extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="form-container" fluid>
          <h2 className="form-title">Sizing</h2>
          {/* <Form.Text className="text-muted">Starred Fields Are Required</Form.Text> */}

            <Form>
            <Form.Group controlId="image-dimensions">
                    <Form.Label><strong>Image Dimensions (Inches)*</strong></Form.Label>
                        <Row horizontal="space-between">
                            <Form.Control type="text" placeholder="Height" style={{width: 220}}/>
                            <Form.Control type="text" placeholder="Width" style={{width: 220}}/>
                        </Row>
                </Form.Group>

                <Form.Group controlId="floater-frame">
                    <Form.Label><strong>Floater Frame*</strong></Form.Label>
                    <Form.Control as="select" className="input-margin">
                    <option default>No</option>
                    <option>Yes</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="width-depth">
                    {/* <Form.Label><strong>Image Dimensions (Inches)*</strong></Form.Label> */}
                    <Row horizontal="space-between">
                        <Column horizontal="space-between">
                            <Form.Label><strong>Face Width*</strong></Form.Label>
                            <Form.Control className="input-margin" type="text" style={{width: 220}}/>
                        </Column>

                        <Column horizontal="space-between">
                            <Form.Label><strong>Frame Depth*</strong></Form.Label>
                            <Form.Control className="input-margin" type="text" style={{width: 220}}/>
                        </Column>
                    </Row>
                </Form.Group>
                {/* <hr></hr>

                <Row horizontal="space-evenly" className="new-client-buttons">

                    <Button variant="primary" style={{width: 250}}>Submit Order Details</Button>{' '}
                    <Button variant="outline-primary" style={{width: 120}}>Back</Button>{' '}           

                </Row> */}
                
            </Form>
        </Container>
        </div>
  
      );
    }
  }


export default SizingForm;