import React from "react";
import { Container, Button, Form, Checkbox } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column, Row } from "simple-flexbox";
import "./notes-form.css";


class NotesForm extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="form-container" fluid>
          <h2 className="form-title">Notes</h2>
          {/* <Form.Text className="text-muted">Starred Fields Are Required</Form.Text> */}

            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><strong>Manufacturing Notes</strong></Form.Label>
                    <Form.Control as="textarea" rows="5" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><strong>Fitting Notes</strong></Form.Label>
                    <Form.Control as="textarea" rows="5" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><strong>Extras Notes</strong></Form.Label>
                    <Form.Control as="textarea" rows="5" />
                </Form.Group>
                
                <hr></hr>
                <h2 className="form-title">Image Upload</h2>
                <div className="mb-3">
                    <Form.File id="formcheck-api-custom" custom>
                    {/* <Form.File.Input isValid /> */}
                    <Form.File.Label data-browse="Browse">
                        {/* Upload image here */}
                    </Form.File.Label>
                    {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                    </Form.File>
                </div>
                
            </Form>
        </Container>
        </div>
  
      );
    }
  }


export default NotesForm;