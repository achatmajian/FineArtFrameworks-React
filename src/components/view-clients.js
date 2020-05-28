import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewClients extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="table-container" fluid>
          <h2 className="page-title">View Clients</h2>
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
                <th>Address</th>
                <th>Apartment</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>Arek</td>
                  <td>Chatmajian</td>
                  <td>arek.chatmajian@gmail.com</td>
                  <td>201-397-4499</td>
                  <td>148 Frost St</td>
                  <td>3L</td>
                  <td>Brooklyn</td>
                  <td>NY</td>
                  <td>11211</td>
                  <td><Button variant="primary" size="sm">Edit</Button>{' '}</td>
                </tr>
                <tr>
                <td>2</td>
                  <td>Arek</td>
                  <td>Chatmajian</td>
                  <td>arek.chatmajian@gmail.com</td>
                  <td>201-397-4499</td>
                  <td>148 Frost St</td>
                  <td>3L</td>
                  <td>Brooklyn</td>
                  <td>NY</td>
                  <td>11211</td>
                  <td><Button variant="primary" size="sm">Edit</Button>{' '}</td>
                </tr>
                <tr>
                <td>3</td>
                  <td>Arek</td>
                  <td>Chatmajian</td>
                  <td>arek.chatmajian@gmail.com</td>
                  <td>201-397-4499</td>
                  <td>148 Frost St</td>
                  <td>3L</td>
                  <td>Brooklyn</td>
                  <td>NY</td>
                  <td>11211</td>
                  <td><Button variant="primary" size="sm">Edit</Button>{' '}</td>
                </tr>
            </tbody>
            
            </Table>
        </Row>
</Container>
</div>
  
      );
    }
  }


export default ViewClients;