import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewGlazing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { glazings: [] };
  }
  componentDidMount() {
    this.fetchGlazing();
  }

  fetchGlazing = () => {
    fetch("http://18.222.181.253:3001/api/glazings")
      .then(response => response.json())
      .then(response => this.handleSuccessResponse(response))
      .catch(error => this.handleErrorResponse(error));
  };

  handleSuccessResponse = response => {
    this.setState({ glazings: response }, () => {
      console.log(this.state.glazings, "glazings");
    });
  }

  handleErrorResponse = error => {
    console.log("Error while fetching glazing: ", error);
  }

  renderTableData() {
    return this.state.glazings.map((glazings, index) => {
      const { id, name, glazing_type, cost_type, cost } = glazings
      return (
        <tr key={name}>
          <td style={{textTransform: 'capitalize'}}>{glazing_type}</td>
          <td style={{textTransform: 'capitalize'}}>{name}</td>
          <td>${cost}</td>
          <td style={{textTransform: 'capitalize'}}>{cost_type}</td>
          <td><Button variant="primary" size="sm" data-id={id}>Edit</Button>{' '}</td>
        </tr>
      )
    })
  }

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
                {this.renderTableData()}
              </tbody>

            </Table>
          </Row>
        </Container>
      </div>

    );
  }
}


export default ViewGlazing;