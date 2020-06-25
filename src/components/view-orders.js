import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";
import * as moment from 'moment';

class ViewOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orders: [] };
  }
  componentDidMount() {
    this.fetchOrders();
  }

  fetchOrders = () => {
    fetch("http://18.222.181.253:3001/api/temp/orders")
      .then(response => response.json())
      .then(response => this.handleSuccessResponse(response))
      .catch(error => this.handleErrorResponse(error));
  };

  handleSuccessResponse = response => {
    this.setState({ orders: response }, () => {
      console.log(this.state.orders, "orders");
    });
  }

  handleErrorResponse = error => {
    console.log("Error while fetching orders: ", error);
  }

  // Need to add an async fetchCustomer w/ a GET by id to get client names associated with orders

  renderTableData() {
    return this.state.orders.map((order, index) => {
      const { id, order_quantity, date_due, created_at } = order
      return (
        <tr key={id}>
          <td style={{ textTransform: 'capitalize' }}>First Name Goes Here</td>
          <td style={{ textTransform: 'capitalize' }}>Last Name Goes Here</td>
          <td>{order_quantity}</td>
          <td>{moment(date_due).format('DD/MM/YYYY')}</td>
          <td>{moment(created_at).format('DD/MM/YYYY')}</td>
          <td><Button variant="primary" size="sm" data-id={id}>Order Details</Button>{' '}</td>
        </tr>
      )
    })
  }

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
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Frame Quantity</th>
                  <th>Date Received</th>
                  <th>Date Due</th>
                  <th>Order Details</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTableData()}
              </tbody>

            </Table>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ViewOrders;