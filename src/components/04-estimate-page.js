import React, { Fragment } from "react";
import { Container, Button, Form, Checkbox, Jumbotron, ProgressBar, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column, Row } from "simple-flexbox";
import "./04-estimate-page.css";


class EstimatePage extends React.Component {
    render() {
      return (
        <div className="wrapper">

        <Column horizontal="center">
            <Jumbotron className="jumbotron">
            <h1 className="jumbotron-content">Create Order</h1>
            <h4 className="jumbotron-content">4. Order Estimate</h4>
            <ProgressBar now={100} label={`${100}%`} className="progress"></ProgressBar>
            <Column horizontal="center" className="header-buttons">
              <Button variant="primary" id="top-header-button" style={{width: 200}}>Get Invoice PDF</Button>{' '}
              <Button variant="primary" id="top-header-button" style={{width: 200}}>Get Worksheet PDF</Button>{' '}
              <Button variant="outline-primary" style={{width: 150}}>Go Back</Button>{' '}           
            </Column>
            </Jumbotron>
        </Column>

        <Container className="form-container" fluid>
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">Frame 1</ListGroup.Item>
                <ListGroup.Item action href="#link2">Frame 2</ListGroup.Item>
                <ListGroup.Item action href="#link3">Frame 3</ListGroup.Item>
                <ListGroup.Item action href="#link4">Frame 4</ListGroup.Item>
            </ListGroup>
            </Container>


        <Container className="form-container" fluid>
          <h2 className="form-title">Frame 1</h2>
          
          
        <h4>Sizing</h4>
        <ul>
          <li>Art Height (Inches):</li>
          <li>Art Width (Inches):</li>
          <li>Mat Size (Inches):</li>
          <li>Face Width (Inches):</li>
          <li>Frame Depth (Inches):</li>
          <li>Sizing Notes:</li>
        </ul>

        <h4>Manufacturing</h4>
        <ul>
          <li>Frame Material:</li>
          <li>Finish Type:</li>
          <li>Finish Option:</li>
          <li>Strainer:</li>
          <li>Manufacturing Notes:</li>
        </ul>

        <h4>Fitting</h4>
        <ul>
          <li>Mat Style:</li>
          <li>Float Style:</li>
          <li>Spacer Type:</li>
          <li>Dry Mount Type:</li>
          <li>Glazing Type:</li>
          <li>Extras:</li>
          <li>Fitting Notes:</li>
        </ul>

        </Container>
        </div>
  
      );
    }
  }


export default EstimatePage;