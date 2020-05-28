import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewUsers extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="table-container" fluid>
          <h2 className="page-title">View Users</h2>
          <Row>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Users"
              aria-label="Search Users"
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
                <th>Role</th>
                <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>Arek</td>
                  <td>Chatmajian</td>
                  <td>arek@fineartframeworks.com</td>
                  <td>Developer</td>
                  <td><Button variant="primary" size="sm">Edit</Button>{' '}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Katie</td>
                  <td>Lord</td>
                  <td>katie.lord27@gmail.com</td>
                  <td>Developer</td>
                  <td><Button variant="primary" size="sm">Edit</Button>{' '}</td>
                </tr>
                <tr>
                <td>3</td>
                  <td>Edward</td>
                  <td>Messkian</td>
                  <td>ed@fineartframeworks.com</td>
                  <td>Owner</td>
                  <td><Button variant="primary" size="sm">Edit</Button>{' '}</td>
                </tr>
                <tr>
                <td>4</td>
                  <td>Andy</td>
                  <td>Roz</td>
                  <td>andy@fineartframeworks.com</td>
                  <td>Manager</td>
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


export default ViewUsers;