import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewSpacers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spacers: [] };
  }
  componentDidMount() {
    this.fetchSpacers();
  }

  fetchSpacers = () => {
    fetch("http://18.222.181.253:3001/api/spacers")
      .then(response => response.json())
      .then(response => this.handleSuccessResponse(response))
      .catch(error => this.handleErrorResponse(error));
  };

  handleSuccessResponse = response => {
    this.setState({ spacers: response }, () => {
      console.log(this.state.spacers, "spacers");
    });
  }

  handleErrorResponse = error => {
    console.log("Error while fetching spacer: ", error);
  }

  renderTableData() {
    return this.state.spacers.map((spacers, index) => {
      const { id, name, cost, cost_type } = spacers
      return (
        <tr key={name}>
          <td style={{ textTransform: 'capitalize' }}>{name}</td>
          <td style={{ textTransform: 'capitalize' }}>${cost} {cost_type}</td>
          <td><Button variant="primary" size="sm" data-id={id}>Edit</Button>{' '}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Container className="table-container" fluid>
          <h2 className="page-title">View Spacers</h2>
          <Row>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search Spacers"
                aria-label="Search Spacers"
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
               {this.renderTableData()} 
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ViewSpacers;