import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewMounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drymounts: [] };
  }
  componentDidMount() {
    this.fetchMounting();
  }

  fetchMounting = () => {
    fetch("http://18.222.181.253:3001/api/drymounts")
      .then(response => response.json())
      .then(response => this.handleSuccessResponse(response))
      .catch(error => this.handleErrorResponse(error));
  };

  handleSuccessResponse = response => {
    this.setState({ drymounts: response }, () => {
      console.log(this.state.drymounts, "drymounts");
    });
  }

  handleErrorResponse = error => {
    console.log("Error while fetching drymount: ", error);
  }

  renderTableData() {
    return this.state.drymounts.map((drymounts, index) => {
      const { id, name, cost_type, cost } = drymounts
      return (
        <tr key={name}>
          <td style={{ textTransform: 'capitalize' }}>{name}</td>
          <td>${cost}</td>
          <td style={{ textTransform: 'capitalize' }}>{cost_type}</td>
          <td><Button variant="primary" size="sm" data-id={id}>Edit</Button>{' '}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Container className="table-container" fluid>
          <h2 className="page-title">View Mounting</h2>
          <Row>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search Mounting"
                aria-label="Search Mounting"
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
                  <th>Cost</th>
                  <th>Cost Type</th>
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


export default ViewMounting;