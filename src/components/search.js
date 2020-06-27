import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./search.css";

class Search extends React.Component {
    handleSearch(event) {
        this.props.searchTable(event.target.value)
      }

    render() {
      return (
        <InputGroup className="mb-3">
              <FormControl
                onKeyUp={this.handleSearch.bind(this)}
                placeholder="Search Clients"
                aria-label="Search Clients"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
      )
    }
  }
  
  export default Search;