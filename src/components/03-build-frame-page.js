import React from "react";
import { Container, Button, Form, Checkbox, Jumbotron, ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column, Row } from "simple-flexbox";
import "./03-build-frame-page.css";


class BuildFramePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image_height: '',
            image_width: '',
            floater_frame_bool: 0,
            face_width: '',
            frame_depth: '',
            material_name: '',
            material_finish: '',
            finish_option: '',
            strainer_size: '',
            painted_strainer_bool: 0,
            mat_bool: 0,
            mat_name: '',
            mat_detail: '',
            mat_border: '',
            island_float_bool: 0,
            island_float_name: '',
            island_float_detail: '',
            island_float_border: '',
            no_dm_float_bool: 0,
            no_dm_float_name: '',
            no_dm_float_detail: '',
            no_dm_float_border: '',
            flush_bool: '',
            spacers_bool: 0,
            spacer_name: '',
            spacer_detail: '',
            mounting_bool: 0,
            mounting_in_press: '',
            mounting_other: '',
            mounting_other_size: '',
            glazing_bool: 0,
            glazing_plexi: '',
            glazing_glass: '',
            extras_bool: 0,
            stretch_canvas_bool: 0,
            raise_mount_bool: 0,
            defit_bool: 0,
            refinish_bool: 0,
            manufacturing_notes: '',
            fitting_notes: '',
            extras_notes: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    showingOff(stuff, yeet) {
        console.log("Something is working");
        console.log(stuff);
        console.log(yeet);
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        this.showingOff(name, value);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("working")
        let data = {
            image_height: this.state.image_height,
            image_width: this.state.image_width,
            floater_frame_bool: this.state.floater_frame_bool,
            face_width: this.state.face_width,
            frame_depth: this.state.frame_depth,
            material_name: this.state.material_name,
            material_finish: this.state.material_finish,
            finish_option: this.state.finish_option,
            strainer_size: this.state.strainer_size,
            painted_strainer_bool: this.state.painted_strainer_bool,
            mat_bool: this.state.mat_bool,
            mat_name: this.state.mat_name,
            mat_detail: this.state.mat_detail,
            mat_border: this.state.mat_border,
            island_float_bool: this.state.island_float_bool,
            island_float_name: this.state.island_float_name,
            island_float_detail: this.state.island_float_detail,
            island_float_border: this.state.island_float_border,
            no_dm_float_bool: this.state.no_dm_float_bool,
            no_dm_float_name: this.state.no_dm_float_name,
            no_dm_float_detail: this.state.no_dm_float_detail,
            no_dm_float_border: this.state.no_dm_float_border,
            flush_bool: this.state.flush_bool,
            spacers_bool: this.state.spacers_bool,
            spacer_name: this.state.spacer_name,
            spacer_detail: this.state.spacer_detail,
            mounting_bool: this.state.mounting_bool,
            mounting_in_press: this.state.mounting_in_press,
            mounting_other: this.state.mounting_other,
            mounting_other_size: this.state.mounting_other_size,
            glazing_bool: this.state.glazing_bool,
            glazing_plexi: this.state.glazing_plexi,
            glazing_glass: this.state.glazing_glass,
            extras_bool: this.state.extras_bool,
            stretch_canvas_bool: this.state.stretch_canvas_bool,
            raise_mount_bool: this.state.raise_mount_bool,
            defit_bool: this.state.defit_bool,
            refinish_bool: this.state.refinish_bool,
            manufacturing_notes: this.state.manufacturing_notes,
            fitting_notes: this.state.fitting_notes,
            extras_notes: this.state.extras_notes
        }
        fetch("http://18.222.181.253:3001/api/orders", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(this.showingOff(data, this.state))

    }
    render() {
        return (
            <div className="wrapper">

                <Column horizontal="center">
                    <Jumbotron className="jumbotron">
                        <h1 className="jumbotron-content">Create Order</h1>
                        <h4 className="jumbotron-content">3. Build Frames</h4>
                        <ProgressBar now={60} label={`${60}%`} className="progress"></ProgressBar>
                    </Jumbotron>
                </Column>


                <Container className="form-container" fluid>
                    <h2 className="form-title">Build Frame</h2>
                    <Form.Text className="text-muted">Starred Fields Are Required</Form.Text>
                    <Column horizontal="center" className="frame-container-buttons">
                        <Button variant="primary" id="top-header-button" style={{ width: 200 }}>Save Frame</Button>{' '}
                        <Button variant="outline-primary" style={{ width: 150 }}>Duplicate Frame</Button>{' '}
                    </Column>


                    {/* =========Sizing Container========= */}
                    <Container className="sizing-container" fluid>
                        <h2 className="sizing-title">Sizing</h2>

                        <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                            <Column horizontal="center" className="header-buttons">
                                <Button variant="primary" id="top-header-button" type="submit" style={{ width: 200 }}>Submit Order</Button>{' '}
                                <Button variant="outline-primary" style={{ width: 150 }}>Go Back</Button>{' '}
                            </Column>
                            <Form.Group controlId="image-dimensions">
                                <Form.Label><strong>Image Dimensions (Inches)*</strong></Form.Label>
                                <Row horizontal="space-between">
                                    <Form.Control type="text" placeholder="Height" name="image_height" value={this.state.image_height} style={{ width: 220 }} />
                                    <Form.Control type="text" placeholder="Width" name="image_width" value={this.state.image_width} style={{ width: 220 }} />
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="floater-frame">
                                <Form.Label><strong>Floater Frame*</strong></Form.Label>
                                {/* this might be coded wrong */}
                                <Form.Control as="select" className="input-margin" name="floater_frame_bool" value={this.state.floater_frame_bool} >
                                    <option value="0" default>No</option>
                                    <option value="1">Yes</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="width-depth">
                                {/* <Form.Label><strong>Image Dimensions (Inches)*</strong></Form.Label> */}
                                <Row horizontal="space-between">
                                    <Column horizontal="space-between">
                                        <Form.Label><strong>Face Width*</strong></Form.Label>
                                        <Form.Control className="input-margin" type="text" name="face_width" value={this.state.face_width} style={{ width: 220 }} />
                                    </Column>

                                    <Column horizontal="space-between">
                                        <Form.Label><strong>Frame Depth*</strong></Form.Label>
                                        <Form.Control className="input-margin" type="text" name="frame_depth" value={this.state.frame_depth} style={{ width: 220 }} />
                                    </Column>
                                </Row>
                            </Form.Group>
                            {/* =========Manufacturing Container========= */}
                            <Container className="manufacturing-container" fluid>
                                <h2 className="manufacturing-title">Manufacturing</h2>
                                <Form.Group controlId="material">
                                    <Form.Label><strong>Material*</strong></Form.Label>
                                    <Form.Control as="select" className="input-margin" name="material_name" value={this.state.material_name}>
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
                                    <Form.Control as="select" className="input-margin" name="material_finish" value={this.state.material_finish}>
                                        <option>Painted</option>
                                        <option>Stained</option>
                                        <option>Natural</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="finish-option">
                                    <Form.Label><strong>Finish Option*</strong></Form.Label>
                                    <Row horizontal="space-between">
                                        <Form.Control as="select" className="input-margin" name="finish_option" value={this.state.finish_option} style={{ width: 150 }}>
                                            <option disabled selected>Paint Options</option>
                                        </Form.Control>
                                        <Form.Control as="select" className="input-margin" style={{ width: 150 }}>
                                            <option disabled selected>Stain Options</option>
                                        </Form.Control>
                                        <Form.Control as="select" className="input-margin" style={{ width: 150 }}>
                                            <option disabled selected>Natural Options</option>
                                        </Form.Control>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="width-depth">
                                    {/* <Form.Label><strong>Image Dimensions (Inches)*</strong></Form.Label> */}
                                    <Row horizontal="space-between">
                                        <Column horizontal="space-between">
                                            <Form.Label><strong>Strainer*</strong></Form.Label>
                                            <Form.Control as="select" className="input-margin" name="strainer_size" value={this.state.strainer_size} style={{ width: 220 }}>
                                                <option>3/8"</option>
                                                <option>1/2"</option>
                                                <option>5/8"</option>
                                                <option>3/4"</option>
                                                <option>No Strainer</option>
                                            </Form.Control>
                                        </Column>

                                        <Column horizontal="space-between">
                                            <Form.Label><strong>Painted Strainer*</strong></Form.Label>
                                            <Form.Control as="select" className="input-margin" name="painted_strainer_bool" value={this.state.painted_strainer_bool} style={{ width: 220 }}>
                                                <option value="0">No</option>
                                                <option value="1">Yes</option>
                                            </Form.Control>
                                        </Column>
                                    </Row>
                                </Form.Group>
                            </Container>

                            {/* =========Fitting Container========= */}
                            <Container className="fitting-container" fluid>
                                <h2 className="fitting-title">Fitting</h2>

                                <Form.Group controlId="mat">
                                    <Form.Label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="mat_bool" value={this.state.mat_bool} />
                                        <label class="custom-control-label" for="defaultUnchecked"><strong>Mat</strong></label>
                                    </Form.Label>
                                    {/* <Form.Label><strong>Mat*</strong></Form.Label> */}
                                    <Row horizontal="space-between">
                                        <Form.Control as="select" name="mat_name" value={this.state.mat_name} style={{ width: 150 }}>
                                            <option disabled selected>Material</option>
                                            <option>4 Ply</option>
                                            <option>8 Ply</option>
                                            <option>12 Ply</option>
                                            <option>Fabric</option>
                                        </Form.Control>
                                        <Form.Control as="select" name="mat_detail" value={this.state.mat_detail} style={{ width: 150 }}>
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
                                        {/* there was no spot for border size in the model so I created one  */}
                                        <Form.Control as="select" name="mat_border" value={this.state.mat_border} style={{ width: 150 }}>
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
                                        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="island_float_bool" value={this.state.island_float_bool} />
                                        <label class="custom-control-label" for="defaultUnchecked"><strong>Island Float</strong></label>
                                    </Form.Label>
                                    {/* <Form.Label><strong>Mat*</strong></Form.Label> */}
                                    <Row horizontal="space-between">
                                        <Form.Control as="select" name="island_float_name" value={this.state.island_float_name} style={{ width: 150 }}>
                                            <option disabled selected>Material</option>
                                            <option>Rag</option>
                                            <option>Linen</option>
                                            <option>Silk</option>
                                        </Form.Control>
                                        <Form.Control as="select" name="island_float_detail" value={this.state.island_float_detail} style={{ width: 150 }}>
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
                                        <Form.Control as="select" name="island_float_border" value={this.state.island_float_border} style={{ width: 150 }}>
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
                                        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="no_dm_float_bool" value={this.state.no_dm_float_bool} />
                                        <label class="custom-control-label" for="defaultUnchecked"><strong>Float</strong> (No Dry Mount)</label>
                                    </Form.Label>
                                    {/* <Form.Label><strong>Mat*</strong></Form.Label> */}
                                    <Row horizontal="space-between">
                                        {/* this may not work because of the variable names being the same as the names from the previous form Group */}
                                        <Form.Control as="select" name="no_dm_float_name" value={this.state.no_dm_float_name} style={{ width: 150 }}>
                                            <option disabled selected>Material</option>
                                            <option>Rag</option>
                                            <option>Linen</option>
                                            <option>Silk</option>
                                        </Form.Control>
                                        <Form.Control as="select" name="no_dm_float_detail" value={this.state.no_dm_float_detail} style={{ width: 150 }}>
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
                                        <Form.Control as="select" name="no_dm_float_border" value={this.state.no_dm_float_border} style={{ width: 150 }}>
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
                                        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="flush_bool" value={this.state.flush_bool} />
                                        <label class="custom-control-label" for="defaultUnchecked"><strong>Flush</strong></label>
                                    </Form.Label>
                                </Form.Group>

                                <hr></hr>

                                <Form.Group controlId="spacers">
                                    <Form.Label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="spacers_bool" value={this.state.spacers_bool} />
                                        <label class="custom-control-label" for="defaultUnchecked"><strong>Spacers</strong></label>
                                    </Form.Label>
                                    <Row horizontal="space-between">
                                        <Form.Control as="select" name="spacer_name" value={this.state.spacer_name} style={{ width: 220 }}>
                                            <option disabled selected>Material</option>
                                            <option>Rag</option>
                                            <option>Wood</option>
                                            <option>Silk</option>
                                            <option>Plastic</option>
                                        </Form.Control>
                                        <Form.Control as="select" name="spacer_detail" value={this.state.spacer_detail} style={{ width: 220 }}>
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
                                        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="mounting_bool" value={this.state.mounting_bool} />
                                        <label class="custom-control-label" for="defaultUnchecked"><strong>Mounting</strong></label>
                                    </Form.Label>
                                    <Form.Control as="select" className="input-margin" name="mounting_in_press" value={this.state.mounting_in_press}>
                                        <option disabled selected>Mounting In Press</option>
                                        <option>Regular Foam</option>
                                        <option>Acid Free Foam</option>
                                        <option>Rag</option>
                                    </Form.Control>
                                    <Row horizontal="space-between">
                                        <Form.Control as="select" name="mounting_other" value={this.state.mounting_other} style={{ width: 220 }}>
                                            <option disabled selected>Other Mounting</option>
                                            <option>Plexi 1/8" Clear</option>
                                            <option>Plexi 1/4" Clear</option>
                                            <option>Sintra 1/8"</option>
                                            <option>Sintra 1/4"</option>
                                            <option>Dibond</option>
                                            <option>Aluminum</option>
                                        </Form.Control>
                                        <Form.Control as="select" name="mounting_other_size" value={this.state.mounting_other_size} style={{ width: 220 }}>
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
                                        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="glazing_bool" value={this.state.glazing_bool} />
                                        <label class="custom-control-label" for="defaultUnchecked"><strong>Glazing</strong></label>
                                    </Form.Label>
                                    <Row horizontal="space-between">
                                        <Form.Control as="select" name="glazing_plexi" value={this.state.glazing_plexi} style={{ width: 220 }}>
                                            <option disabled selected>Plexiglass</option>
                                            <option>Regular Plexi</option>
                                            <option>UV Plexi</option>
                                            <option>Museum Plexi (Up to 40" x 60")</option>
                                            <option>Museum Plexi (Up to 48" x 96")</option>
                                            <option>Museum Plexi (Up to 72" x 96")</option>
                                            <option>Museum Plexi (Up to 72" x 120")</option>
                                        </Form.Control>
                                        <Form.Control as="select" name="glazing_glass" value={this.state.glazing_glass} style={{ width: 220 }}>
                                            <option disabled selected>Glass</option>
                                            <option>Regular Glass (Max 40" x 60")</option>
                                            <option>Museum Glass (Max 48" x 64")</option>
                                        </Form.Control>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="extras">
                                    <Form.Label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="extras_bool" value={this.state.extras_bool} />
                                        <label class="custom-control-label" for="defaultUnchecked"><strong>Extras</strong></label>
                                    </Form.Label>
                                    <Row horizontal="space-between">
                                        <Form.Label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="stretch_canvas_bool" value={this.state.stretch_canvas_bool} />
                                            <label class="custom-control-label" for="defaultUnchecked">Stretch Canvas</label>
                                        </Form.Label>
                                        <Form.Label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="raise_mount_bool" value={this.state.raise_mount_bool} />
                                            <label class="custom-control-label" for="defaultUnchecked">Raise Mount</label>
                                        </Form.Label>
                                        <Form.Label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="defit_bool" value={this.state.defit_bool} />
                                            <label class="custom-control-label" for="defaultUnchecked">De-fit/Re-fit</label>
                                        </Form.Label>
                                        <Form.Label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" name="refinish_bool" value={this.state.refinish_bool} />
                                            <label class="custom-control-label" for="defaultUnchecked">Re-finish</label>
                                        </Form.Label>
                                    </Row>
                                </Form.Group>
                            </Container>

                            {/* =========Notes Container========= */}
                            <Container className="notes-container" fluid>
                                <h2 className="notes-title">Notes</h2>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label><strong>Manufacturing Notes</strong></Form.Label>
                                    <Form.Control as="textarea" name="manufacturing_notes" value={this.state.manufacturing_notes} rows="5" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label><strong>Fitting Notes</strong></Form.Label>
                                    <Form.Control as="textarea" name="fitting_notes" value={this.state.fitting_notes} rows="5" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label><strong>Extras Notes</strong></Form.Label>
                                    <Form.Control as="textarea" name="extras_notes" value={this.state.extras_notes} rows="5" />
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
                            </Container>
                        </Form>
                    </Container>
                </Container>
            </div>


            /* <Form.Text className="text-muted">Starred Fields Are Required</Form.Text> */



            /* <Form.Text className="text-muted">Starred Fields Are Required</Form.Text> */

            /* <Form.Group controlId="mat">
            <Form.Label><strong>Mat*</strong></Form.Label>
            <Form.Control as="select" className="input-margin">
            <option>4 Ply</option>
            <option>8 Ply</option>
            <option>12 Ply</option>
            <option>Fabric</option>

            </Form.Control>
        </Form.Group> */




            /* <Form.Text className="text-muted">Starred Fields Are Required</Form.Text> */


            /* <Row horizontal="space-evenly" className="frame-container-buttons">
  <Button variant="primary" style={{width: 230}}>Save Frame</Button>{' '}
  <Button variant="outline-primary" style={{width: 230}}>Duplicate Frame</Button>{' '}           
</Row> */
        );
    }
}


export default BuildFramePage;