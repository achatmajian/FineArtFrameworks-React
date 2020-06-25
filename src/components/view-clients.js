import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewClients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clients: [] };
  }
  componentDidMount() {
    this.fetchClients();
  }

  fetchClients = () => {
    fetch("http://18.222.181.253:3001/api/clients")
      .then(response => response.json())
      .then(response => this.handleSuccessResponse(response))
      .catch(error => this.handleErrorResponse(error));
  };

  handleSuccessResponse = response => {
    this.setState({ clients: response }, () => {
      console.log(this.state.clients, "clients");
    });
  }

  handleErrorResponse = error => {
    console.log("Error while fetching clients: ", error);
  }

  renderTableData() {
    return this.state.clients.map((client, index) => {
      const { id, first_name, last_name, email, address_one, address_two, city, state, zip_code } = client
      return (
        <tr key={email}>
          <td style={{textTransform: 'capitalize'}}>{first_name}</td>
          <td style={{textTransform: 'capitalize'}}>{last_name}</td>
          <td>{email}</td>
          <td style={{textTransform: 'capitalize'}}>{address_one}</td>
          <td style={{textTransform: 'capitalize'}}>{address_two}</td>
          <td style={{textTransform: 'capitalize'}}>{city}</td>
          <td style={{textTransform: 'capitalize'}}>{state}</td>
          <td>{zip_code}</td>
          <td><Button variant="primary" size="sm" data-id={id}>Edit</Button>{' '}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      // <div>
      //   <h1 id="title">Some Bullshit</h1>
      //   <table id="clients">
      //     <tbody>
      //       {this.renderTableData()}
      //     </tbody>
      //   </table>
      // </div>
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
                {this.renderTableData()}
              </tbody>

            </Table>
          </Row>
        </Container>
      </div>

    );
  }
}


export default ViewClients;