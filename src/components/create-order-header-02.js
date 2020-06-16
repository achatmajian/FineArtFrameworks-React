import React from "react";
import { Container, Button, Form, Card, ProgressBar, Jumbotron } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column, Row } from "simple-flexbox";
import "./create-order-header-02.css";



class CreateOrderHeader02 extends React.Component {
    render() {
      return (
        <div className="wrapper">
            <Column horizontal="center">
                <Jumbotron className="jumbotron">
                <h1 className="jumbotron-content">Create Order</h1>
                <h4 className="jumbotron-content">2. Order Information</h4>
                <ProgressBar now={40} label={`${40}%`} className="progress"></ProgressBar>
                </Jumbotron>
            </Column>
        </div>
  
      );
    }
  }


export default CreateOrderHeader02;