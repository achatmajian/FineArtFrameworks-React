import React from "react";
import { Table, Container, Row, Button, InputGroup, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./view-table.css";


class ViewLumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mats: [] };
  }
  componentDidMount() {
    fetch("http://18.222.181.253:3001/api/materials")
    .then(response => response.json())
    .then(response => {
      this.setState({ mats: response }, () => {
        console.log(this.state.mats, "materials");
      });
    })
  }

  renderTableData() {
    return this.state.mats.map((mat, index) => {
      const { face_width, frame_depth, material, finish, detail, cost } = mat;
      return (
        <tr key={material}>
          <td>{material}</td>
          <td>{finish}</td>
          <td>{detail}</td>
          <td>{face_width}</td>
          <td>{frame_depth}</td>
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
          <h2 className="page-title">View Lumber</h2>
          <Row>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Lumber"
              aria-label="Search Lumber"
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
                <th>Finish</th>
                <th>Finish Type</th>
                <th>Face Width</th>
                <th>Frame Depth</th>
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


export default ViewLumber;