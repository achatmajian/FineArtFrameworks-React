import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl, Jumbotron, ProgressBar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column } from "simple-flexbox";
import "./01.1-existing-client-page.css";


class ExistingClientPage extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Column horizontal="center">
            <Jumbotron className="jumbotron">
            <h1 className="jumbotron-content">Create Order</h1>
            <h4 className="jumbotron-content">1. Client Information</h4>
            <ProgressBar now={20} label={`${20}%`} className="progress"></ProgressBar>
            <Column horizontal="center" className="header-buttons">
              <Button variant="primary" id="top-header-button" style={{width: 200}}>Use Existing Client</Button>{' '}
              <Button variant="outline-primary" style={{width: 170}}>Submit New Client</Button>{' '}           
            </Column>
            </Jumbotron>
        </Column>

        <Container className="table-container" fluid>
          <h2 className="page-title">Search Existing Clients</h2>
          <Row>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Clients"
              aria-label="Search Clients"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
            <Table className="table" responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Select</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>Arek</td>
                  <td>Chatmajian</td>
                  <td>arek.chatmajian@gmail.com</td>
                  <td>201-397-4499</td>
                  <td><Button variant="primary" size="sm">Select</Button>{' '}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Arek</td>
                  <td>Chatmajian</td>
                  <td>arek.chatmajian@gmail.com</td>
                  <td>201-397-4499</td>
                  <td><Button variant="primary" size="sm">Select</Button>{' '}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Arek</td>
                  <td>Chatmajian</td>
                  <td>arek.chatmajian@gmail.com</td>
                  <td>201-397-4499</td>
                  <td><Button variant="primary" size="sm">Select</Button>{' '}</td>
                </tr>
            </tbody>
            
            </Table>
        </Row>
</Container>
</div>
  
      );
    }
  }


export default ExistingClientPage;