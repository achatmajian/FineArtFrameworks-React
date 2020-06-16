import React from "react";
import { Container, Button, Form, Card, ProgressBar, Jumbotron } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column, Row } from "simple-flexbox";
import "./create-order-header-01.css";



class CreateOrderHeader01 extends React.Component {
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
        </div>
  
      );
    }
  }


export default CreateOrderHeader01;