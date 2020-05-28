import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewGlazing extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="table-container" fluid>
          <h2 className="page-title">View Glazing</h2>
          <Row>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Glazing"
              aria-label="Search Glazing"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
            <Table className="table" responsive>
            <thead>
                <tr>
                <th>Glazing Type</th>
                <th>Glazing Option</th>
                <th>Cost</th>
                <th>Cost Type</th>
                <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Glass</td>
                  <td>Regular Glass</td>
                  <td>$8.00</td>
                  <td>Per Foot</td>
                  <td><Button variant="primary" size="sm">Edit</Button>{' '}</td>
                </tr>
                <tr>
                  <td>Glass</td>
                  <td>Tru Vue Ultra View</td>
                  <td>$21.00</td>
                  <td>Per Foot</td>
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


export default ViewGlazing;