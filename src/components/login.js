import React from "react";
import { Container, Row, Button, InputGroup, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./login.css";


class LogIn extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="form-container" fluid>
          <h2 className="page-title">Log In</h2>
          <Row>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="user@fineartframeworks.com"
                aria-label="user@fineartframeworks.com"
                aria-describedby="basic-addon1"
            />
            </InputGroup>

            <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="******"
                aria-label="******"
                aria-describedby="basic-addon1"
            />
            </InputGroup>

            <Button id="login-button" as="input" type="submit" value="Log In" />{' '}

        
        </Row>
</Container>
</div>
  
      );
    }
  }


export default LogIn;