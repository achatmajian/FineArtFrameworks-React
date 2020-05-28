import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewOrders extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="table-container" fluid>
          <h2 className="page-title">View Orders</h2>
          <Row>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Orders"
              aria-label="Search Orders"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
            <Table className="table" responsive>
            <thead>
                <tr>
                <th>Order ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Frame Quantity</th>
                <th>Date Received</th>
                <th>Date Due</th>
                <th>Order Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>001</td>
                  <td>Robert</td>
                  <td>DeNiro</td>
                  <td>5</td>
                  <td>4/18/2020</td>
                  <td>6/18/2020</td>
                  <td><Button variant="primary" size="sm">View Order Details</Button>{' '}</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Al</td>
                  <td>Pacino</td>
                  <td>7</td>
                  <td>3/20/2020</td>
                  <td>5/20/2020</td>
                  <td><Button variant="primary" size="sm">View Order Details</Button>{' '}</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Harvey</td>
                  <td>Keitel</td>
                  <td>3</td>
                  <td>2/11/2020</td>
                  <td>3/11/2020</td>
                  <td><Button variant="primary" size="sm">View Order Details</Button>{' '}</td>
                </tr>
            </tbody>
            
            </Table>
        </Row>
</Container>
</div>
  
      );
    }
  }


export default ViewOrders;