import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewLumber extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="table-container" fluid>
          <h2 className="page-title">View Lumber</h2>
          <Row>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Lumber"
              aria-label="Search Lumber"
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
                <th>Finish</th>
                <th>Finish Type</th>
                <th>Face Width</th>
                <th>Frame Depth</th>
                <th>Cost Per Foot</th>
                <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Maple</td>
                  <td>Natural</td>
                  <td>Natural Flat</td>
                  <td>3/8"</td>
                  <td>1 1/2"</td>
                  <td>$25.00</td>
                  <td><Button variant="primary" size="sm">Edit</Button>{' '}</td>
                </tr>
                <tr>
                  <td>Maple</td>
                  <td>Natural</td>
                  <td>Natural Flat</td>
                  <td>3/8"</td>
                  <td>1 1/2"</td>
                  <td>$25.00</td>
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


export default ViewLumber;