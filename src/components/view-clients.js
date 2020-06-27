import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import Search from "./search.js";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewClients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clients: [], allClients: [] };
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
    this.setState({ allClients: this.state.clients });
    });
  }

  handleErrorResponse = error => {
    console.log("Error while fetching clients: ", error);
  }

  searchTable = query => {
    console.log("Looking for query: " + query);
    console.log(this.state.clients);
    let clients = this.state.clients
    let clientSearch = clients.filter((clients) => {
      return JSON.stringify(clients).toLowerCase().includes(query.toLowerCase());
    });
    console.log(clientSearch);
    if (query != "") {
      this.setState({clients: clientSearch});
    } else {
      this.setState({clients: this.state.allClients})
    }
  }

  formatPhoneNumber = phoneNumberString => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '')
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }
    return null
  }

  renderTableData() {
    return this.state.clients.map((client, index) => {
      const { id, first_name, last_name, email, phone, address_one, address_two, city, state, zip_code } = client
      const name = first_name + " " + last_name;
      return (
        <tr key={ name , first_name, last_name, email }>
          <td style={{ textTransform: 'capitalize' }}>{first_name} {last_name}</td>
          <td>{email}</td>
          <td>{this.formatPhoneNumber(phone)}</td>
          <td style={{ textTransform: 'capitalize' }}>{address_one} {address_two} {city}, {state} {zip_code}</td>
          <td><Button variant="primary" size="sm" data-id={id}>Edit</Button>{' '}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Container className="custom-table-container" fluid>
          <h2 className="page-title">View Clients</h2>
          <Row>

            <Search searchTable={this.searchTable.bind(this)}/>
            <Table id="my-table" className="table" responsive>
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Shipping Address</th>
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