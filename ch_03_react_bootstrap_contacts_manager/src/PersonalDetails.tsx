import React, { Component } from 'react';
import {
  Button,
  Col,
  Row
} from 'reactstrap';

export default class PersonalDetails extends Component {
  public render() {
    return (
      <>
        <Row>
          <Col lg="8">
            <Row>
              <Col>
                <h4 className="mb-3">Personal Details</h4>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Col lg="6">
                <Button size="lg" color="success">Load</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    )
  }
}
