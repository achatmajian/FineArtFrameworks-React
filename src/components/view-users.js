import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch("http://18.222.181.253:3001/api/users")
      .then(response => response.json())
      .then(response => this.handleSuccessResponse(response))
      .catch(error => this.handleErrorResponse(error));
  };

  handleSuccessResponse = response => {
    this.setState({ users: response }, () => {
      console.log(this.state.users, "users");
    });
  }

  handleErrorResponse = error => {
    console.log("Error while fetching users: ", error);
  }

  renderTableData() {
    return this.state.users.map((user, index) => {
      const { id, first_name, last_name, email, role } = user
      return (
        <tr key={email}>
          <td style={{ textTransform: 'capitalize' }}>{first_name}</td>
          <td style={{ textTransform: 'capitalize' }}>{last_name}</td>
          <td>{email}</td>
          <td style={{ textTransform: 'capitalize' }}>{email}</td>
          <td style={{ textTransform: 'capitalize' }}>{role}</td>
          <td><Button variant="primary" size="sm" data-id={id}>Edit</Button>{' '}</td>
        </tr>
      )
    })
  }

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
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Role</th>
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

export default ViewUsers;