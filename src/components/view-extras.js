import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewExtras extends React.Component {
  constructor(props) {
    super(props);
    this.state = { extras: [] };
  }
  componentDidMount() {
    fetch("http://18.222.181.253:3001/api/extras")
    .then(response => response.json())
    .then(response => {
      this.setState({ extras: response }, () => {
        console.log(this.state.extras, "extras");
      });
    }
    )
  }

  renderTableData() {
    return this.state.extras.map((extra, index) => {
      const { name, cost_type, cost } = extra;
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{cost_type}</td>
          <td>{cost}</td>
          <td><Button variant="primary" size="sm">Edit</Button>{' '}</td>
        </tr>
      )
    })
  }
    render() {
      return (
        <div className="wrapper">
        <Container className="table-container" fluid>
          <h2 className="page-title">View Extras</h2>
          <Row>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Extras"
              aria-label="Search Extras"
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


export default ViewExtras;