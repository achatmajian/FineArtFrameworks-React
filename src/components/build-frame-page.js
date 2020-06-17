import React from "react";
import { Container, Button, Form, Checkbox } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Column, Row } from "simple-flexbox";
import "./build-frame-page.css";

import { SizingForm2 } from './sizing-form-2';
import { ManufacturingForm } from './manufacturing-form.js';
import { FittingForm } from '.fitting-form';
import { NotesForm } from './notes-form';


class BuildFramePage extends React.Component {
    render() {
      return (
        <div className="wrapper">
        <Container className="form-container" fluid>
          <h2 className="form-title">Build Frame</h2>
          {/* <Form.Text className="text-muted">Starred Fields Are Required</Form.Text> */}

          <SizingForm2 />
          <ManufacturingForm />
          <FittingForm />
          <NotesForm />

        </Container>
        </div>
  
      );
    }
  }


export default BuildFramePage;