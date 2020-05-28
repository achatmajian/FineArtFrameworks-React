import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewExtras extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="table-container" fluid>
          <h2 className="page-title">View Extras</h2>
          <Row>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Extras"
              aria-label="Search Extras"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
            <Table className="table" responsive>
            <thead>
                <tr>
                <th>Material</th>
                <th>Cost Per Foot</th>
                <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Extra Strainer</td>
                  <td>$6.00</td>
                  <td><Button variant="primary" size="sm">Edit</Button>{' '}</td>
                </tr>
                <tr>
                  <td>Painted Strainer</td>
                  <td>$11.00</td>
                  <td><Button variant="primary" size="sm">Edit</Button>{' '}</td>
                </tr>
                <tr>
                  <td>Stretch Canvas</td>
                  <td>$10.00</td>
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


export default ViewExtras;