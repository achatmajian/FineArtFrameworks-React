import React from "react";
import { Container, Button, Form, Checkbox } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column, Row } from "simple-flexbox";
import "./fitting-form.css";


class FittingForm extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="form-container" fluid>
          <h2 className="form-title">Fitting</h2>
          {/* <Form.Text className="text-muted">Starred Fields Are Required</Form.Text> */}

            <Form>
                {/* <Form.Group controlId="mat">
                    <Form.Label><strong>Mat*</strong></Form.Label>
                    <Form.Control as="select" className="input-margin">
                    <option>4 Ply</option>
                    <option>8 Ply</option>
                    <option>12 Ply</option>
                    <option>Fabric</option>

                    </Form.Control>
                </Form.Group> */}

                <Form.Group controlId="mat">
                <Form.Label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                    <label class="custom-control-label" for="defaultUnchecked"><strong>Mat</strong></label>
                </Form.Label>
                    {/* <Form.Label><strong>Mat*</strong></Form.Label> */}
                    <Row horizontal="space-between">
                    <Form.Control as="select" style={{width: 150}}>
                        <option disabled selected>Material</option>
                        <option>4 Ply</option>
                        <option>8 Ply</option>
                        <option>12 Ply</option>
                        <option>Fabric</option>
                    </Form.Control>
                    <Form.Control as="select" style={{width: 150}}>
                    <option disabled selected>Color</option>
                        <option>Polar White</option>
                        <option>White</option>
                        <option>Warm White</option>
                        <option>Antique</option>
                        <option>Cream</option>
                        <option>Natural</option>
                        <option>Black</option>
                        <option>Other</option>
                    </Form.Control>
                    <Form.Control as="select" style={{width: 150}}>
                    <option disabled selected>Border Size</option>
                        <option>3/8"</option>
                        <option>1/2"</option>
                        <option>3/4"</option>
                        <option>1"</option>
                        <option>1 1/2"</option>
                        <option>2"</option>
                        <option>2 1/2"</option>
                        <option>3"</option>
                    </Form.Control>
                    </Row>
                </Form.Group>

                <Form.Group controlId="island-float">
                <Form.Label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                    <label class="custom-control-label" for="defaultUnchecked"><strong>Island Float</strong></label>
                </Form.Label>
                    {/* <Form.Label><strong>Mat*</strong></Form.Label> */}
                    <Row horizontal="space-between">
                    <Form.Control as="select" style={{width: 150}}>
                        <option disabled selected>Material</option>
                        <option>Rag</option>
                        <option>Linen</option>
                        <option>Silk</option>
                    </Form.Control>
                    <Form.Control as="select" style={{width: 150}}>
                    <option disabled selected>Color</option>
                        <option>Polar White</option>
                        <option>White</option>
                        <option>Warm White</option>
                        <option>Antique</option>
                        <option>Cream</option>
                        <option>Natural</option>
                        <option>Black</option>
                        <option>Other</option>
                    </Form.Control>
                    <Form.Control as="select" style={{width: 150}}>
                    <option disabled selected>Border Size</option>
                        <option>3/8"</option>
                        <option>1/2"</option>
                        <option>3/4"</option>
                        <option>1"</option>
                        <option>1 1/2"</option>
                        <option>2"</option>
                        <option>2 1/2"</option>
                        <option>3"</option>
                    </Form.Control>
                    </Row>
                </Form.Group>

                <Form.Group controlId="float">
                <Form.Label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                    <label class="custom-control-label" for="defaultUnchecked"><strong>Float</strong> (No Dry Mount)</label>
                </Form.Label>
                    {/* <Form.Label><strong>Mat*</strong></Form.Label> */}
                    <Row horizontal="space-between">
                    <Form.Control as="select" style={{width: 150}}>
                        <option disabled selected>Material</option>
                        <option>Rag</option>
                        <option>Linen</option>
                        <option>Silk</option>
                    </Form.Control>
                    <Form.Control as="select" style={{width: 150}}>
                    <option disabled selected>Color</option>
                        <option>Polar White</option>
                        <option>White</option>
                        <option>Warm White</option>
                        <option>Antique</option>
                        <option>Cream</option>
                        <option>Natural</option>
                        <option>Black</option>
                        <option>Other</option>
                    </Form.Control>
                    <Form.Control as="select" style={{width: 150}}>
                    <option disabled selected>Border Size</option>
                        <option>3/8"</option>
                        <option>1/2"</option>
                        <option>3/4"</option>
                        <option>1"</option>
                        <option>1 1/2"</option>
                        <option>2"</option>
                        <option>2 1/2"</option>
                        <option>3"</option>
                    </Form.Control>
                    </Row>
                </Form.Group>

                <Form.Group controlId="flush">
                <Form.Label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                    <label class="custom-control-label" for="defaultUnchecked"><strong>Flush</strong></label>
                </Form.Label>
                </Form.Group>

                <hr></hr>

                <Form.Group controlId="spacers">
                <Form.Label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                    <label class="custom-control-label" for="defaultUnchecked"><strong>Spacers</strong></label>
                </Form.Label>
                    <Row horizontal="space-between">
                    <Form.Control as="select" style={{width: 220}}>
                        <option disabled selected>Material</option>
                        <option>Rag</option>
                        <option>Wood</option>
                        <option>Silk</option>
                        <option>Plastic</option>
                    </Form.Control>
                    <Form.Control as="select" style={{width: 220}}>
                        <option disabled selected>Depth</option>
                        <option>3/8"</option>
                        <option>1/2"</option>
                        <option>3/4"</option>
                        <option>1"</option>
                    </Form.Control>
                    </Row>
                </Form.Group>

                <Form.Group controlId="mounting">
                <Form.Label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                    <label class="custom-control-label" for="defaultUnchecked"><strong>Mounting</strong></label>
                </Form.Label>
                    <Form.Control as="select" className="input-margin">
                        <option disabled selected>Mounting In Press</option>
                        <option>Regular Foam</option>
                        <option>Acid Free Foam</option>
                        <option>Rag</option>
                    </Form.Control>
                    <Row horizontal="space-between">
                    <Form.Control as="select" style={{width: 220}}>
                        <option disabled selected>Other Mounting</option>
                        <option>Plexi 1/8" Clear</option>
                        <option>Plexi 1/4" Clear</option>
                        <option>Sintra 1/8"</option>
                        <option>Sintra 1/4"</option>
                        <option>Dibond</option>
                        <option>Aluminum</option>
                    </Form.Control>
                    <Form.Control as="select" style={{width: 220}}>
                        <option disabled selected>Other Mounting Size</option>
                        <option>16" x 20"</option>
                        <option>20" x 30"</option>
                        <option>30" x 40"</option>
                        <option>40" x 40"</option>
                        <option>40" x 60"</option>
                        <option>40" x 72"</option>
                        <option>48" x 50"</option>
                        <option>48" x 60"</option>
                        <option>48" x 72"</option>
                        <option>Call For Price</option>
                    </Form.Control>
                    </Row>
                </Form.Group>

                <Form.Group controlId="glazing">
                <Form.Label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                    <label class="custom-control-label" for="defaultUnchecked"><strong>Glazing</strong></label>
                </Form.Label>
                    <Row horizontal="space-between">
                    <Form.Control as="select" style={{width: 220}}>
                        <option disabled selected>Plexiglass</option>
                        <option>Regular Plexi</option>
                        <option>UV Plexi</option>
                        <option>Museum Plexi (Up to 40" x 60")</option>
                        <option>Museum Plexi (Up to 48" x 96")</option>
                        <option>Museum Plexi (Up to 72" x 96")</option>
                        <option>Museum Plexi (Up to 72" x 120")</option>
                    </Form.Control>
                    <Form.Control as="select" style={{width: 220}}>
                        <option disabled selected>Glass</option>
                        <option>Regular Glass (Max 40" x 60")</option>
                        <option>Museum Glass (Max 48" x 64")</option>
                    </Form.Control>
                    </Row>
                </Form.Group>

                <Form.Group controlId="extras">
                <Form.Label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                    <label class="custom-control-label" for="defaultUnchecked"><strong>Extras</strong></label>
                </Form.Label>
                    <Row horizontal="space-between">
                        <Form.Label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                            <label class="custom-control-label" for="defaultUnchecked">Strech Canvas</label>
                        </Form.Label>
                        <Form.Label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                            <label class="custom-control-label" for="defaultUnchecked">Raise Mount</label>
                    </Form.Label>
                    <Form.Label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                            <label class="custom-control-label" for="defaultUnchecked">De-fit/Re-fit</label>
                    </Form.Label>
                    <Form.Label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                            <label class="custom-control-label" for="defaultUnchecked">Re-finish</label>
                    </Form.Label>
                    </Row>
                </Form.Group>
                
            </Form>
        </Container>
        </div>
  
      );
    }
  }


export default FittingForm;