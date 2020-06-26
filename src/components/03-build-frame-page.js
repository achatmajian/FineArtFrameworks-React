import React from "react";
import { Container, Button, Form, Checkbox, Jumbotron, ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column, Row } from "simple-flexbox";
import "./03-build-frame-page.css";


class BuildFramePage extends React.Component {
//In the process of building this.  Going to get to create new client first.
    // constructor(props) {
    //     super(props);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     const data = new FormData(event.target);

    //     fetch("")
    // }
    render() {
      return (
        <div className="wrapper">

        <Column horizontal="center">
            <Jumbotron className="jumbotron">
            <h1 className="jumbotron-content">Create Order</h1>
            <h4 className="jumbotron-content">3. Build Frames</h4>
            <ProgressBar now={60} label={`${60}%`} className="progress"></ProgressBar>
            <Column horizontal="center" className="header-buttons">
              <Button variant="primary" id="top-header-button" style={{width: 200}}>Submit Order</Button>{' '}
              <Button variant="outline-primary" style={{width: 150}}>Go Back</Button>{' '}           
            </Column>
            </Jumbotron>
        </Column>


        <Container className="form-container" fluid>
          <h2 className="form-title">Build Frame</h2>
          <Form.Text className="text-muted">Starred Fields Are Required</Form.Text>
            <Column horizontal="center" className="frame-container-buttons">
              <Button variant="primary" id="top-header-button" style={{width: 200}}>Save Frame</Button>{' '}
              <Button variant="outline-primary" style={{width: 150}}>Duplicate Frame</Button>{' '}           
            </Column>


          {/* =========Sizing Container========= */}
          <Container className="sizing-container" fluid>
          <h2 className="sizing-title">Sizing</h2>

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
              </Form>              
        </Container>

        {/* =========Manufacturing Container========= */}
        <Container className="manufacturing-container" fluid>
          <h2 className="manufacturing-title">Manufacturing</h2>
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

        {/* =========Fitting Container========= */}
        <Container className="fitting-container" fluid>
          <h2 className="fitting-title">Fitting</h2>
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

        {/* =========Notes Container========= */}
        <Container className="notes-container" fluid>
          <h2 className="notes-title">Notes</h2>
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
                
                <h2 className="notes-title">Image Upload</h2>
                <div className="mb-3">
                    <Form.File id="formcheck-api-custom" custom>
                    {/* <Form.File.Input isValid /> */}
                    <Form.File.Label data-browse="Upload File">
                        {/* Upload image here */}
                    </Form.File.Label>
                    {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                    </Form.File>
                </div>
                
            </Form>
        </Container>

        {/* <Row horizontal="space-evenly" className="frame-container-buttons">
          <Button variant="primary" style={{width: 230}}>Save Frame</Button>{' '}
          <Button variant="outline-primary" style={{width: 230}}>Duplicate Frame</Button>{' '}           
        </Row> */}



        </Container>
        </div>
  
      );
    }
  }


export default BuildFramePage;