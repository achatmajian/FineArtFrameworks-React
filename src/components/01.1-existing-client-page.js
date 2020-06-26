import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl, Jumbotron, ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column } from "simple-flexbox";
import "./01.1-existing-client-page.css";


class ExistingClientPage extends React.Component {
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
      const { id, first_name, last_name, email, phone } = client
      return (
        <tr key={email}>
          <td style={{ textTransform: 'capitalize' }}>{first_name}</td>
          <td style={{ textTransform: 'capitalize' }}>{last_name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td><Button variant="primary" size="sm" data-id={id}>Select</Button>{' '}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Column horizontal="center">
          <Jumbotron className="jumbotron">
            <h1 className="jumbotron-content">Create Order</h1>
            <h4 className="jumbotron-content">1. Client Information</h4>
            <ProgressBar now={20} label={`${20}%`} className="progress"></ProgressBar>
            <Column horizontal="center" className="header-buttons">
              <Button variant="primary" id="top-header-button" style={{ width: 200 }}>Use Existing Client</Button>{' '}
              <Button variant="outline-primary" style={{ width: 170 }}>Submit New Client</Button>{' '}
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
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Select</th>
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


export default ExistingClientPage;