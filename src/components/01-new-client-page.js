import React from "react";
import { Container, Button, Form, Checkbox, Jumbotron, ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column, Row } from "simple-flexbox";
import "./01-new-client-page.css";


class NewClientPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address_one: '',
            address_two: '',
            city: '',
            state: '',
            zip_code: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    showingOff(stuff, action) {
        console.log("the value of whatever is: " + stuff);
        console.log("the action that you took was " + action);

    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("working")
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone: this.state.phone,
            address_one: this.state.address_one,
            address_two: this.state.address_two,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code
        }
        fetch("http://18.222.181.253:3001/api/clients", {
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
                        <h4 className="jumbotron-content">1. Client Information</h4>
                        <ProgressBar now={20} label={`${20}%`} className="progress"></ProgressBar>
                        
                    </Jumbotron>
                </Column>

                <Form onSubmit={this.handleSubmit}>
                    <Column horizontal="center" className="header-buttons">
                            <Button variant="primary" id="top-header-button" type="submit" style={{ width: 200 }}>Submit New Client</Button>{' '}
                            <Button variant="outline-primary" style={{ width: 170 }}>Use Existing Client</Button>{' '}
                        </Column>
                    <Container className="form-container" fluid>
                        <h2 className="form-title">Add New Client</h2>
                        <Form.Text className="text-muted">Starred Fields Are Required</Form.Text>


                        <Form.Group controlId="new-client-name">
                            <Form.Label><strong>Client Name*</strong></Form.Label>
                            <Row horizontal="space-between">
                                <input type="text" name="first_name" value={this.state.first_name} placeholder="First Name" onChange={this.handleChange} style={{ width: 220 }} />
                                <input type="text" name="last_name" value={this.state.last_name} placeholder="Last Name" onChange={this.handleChange} style={{ width: 220 }} />
                            </Row>
                        </Form.Group>

                        <Form.Group controlId="new-client-email">
                            <Form.Label><strong>Email*</strong></Form.Label>
                            <input type="email" name="email" value={this.state.email} placeholder="client@gmail.com" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="new-client-phone">
                            <Form.Label><strong>Phone Number*</strong></Form.Label>
                            <input type="text" name="phone" value={this.state.phone} placeholder="212-555-5555" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="new-client-address">
                            <Form.Label><strong>Address*</strong></Form.Label>
                            <Row horizontal="space-between">
                                <input className="input-margin" name="address_one" value={this.state.address_one} type="text" placeholder="Street Address" onChange={this.handleChange} style={{ width: 220 }} />
                                <input className="input-margin" name="address_two" value={this.state.address_two} type="text" placeholder="Apt #" onChange={this.handleChange} style={{ width: 220 }} />
                            </Row>

                            <Row horizontal="space-between">
                                <input type="text" name="city" value={this.state.city} placeholder="City" onChange={this.handleChange} style={{ width: 150 }} />
                                <Form.Control as="select" name="state" value={this.state.state} placeholder="State" onChange={this.handleChange} style={{ width: 130 }} />
                                <option>State</option>
                                <Form.Control type="text" name="zip_code" value={this.state.zip_code} placeholder="Zip" onChange={this.handleChange} style={{ width: 150 }} />
                            </Row>

                        </Form.Group>

                        <Form.Group controlId="new-client-type">
                            <Form.Label><strong>Client Type*</strong></Form.Label>
                            <Form.Control as="select" className="input-margin">
                                <option>Wholesale</option>
                                <option>Retail</option>
                            </Form.Control>
                        </Form.Group>
                        {/* 
                <hr></hr>

                <Row horizontal="space-evenly" className="new-client-buttons">

                    <Button variant="primary" style={{width: 250}}>Submit New Client</Button>{' '}
                    <Button variant="outline-primary">Use Existing Client</Button>{' '}           

                </Row> */}


                    </Container>

                </Form>

            </div>

        );
    }
}


export default NewClientPage;