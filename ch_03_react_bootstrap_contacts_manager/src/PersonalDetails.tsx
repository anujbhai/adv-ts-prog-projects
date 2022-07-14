import React, { Component } from 'react';
import {
  Button,
  Col,
  Row
} from 'reactstrap';
import { IPersonState } from './State';

interface IProps {
  DefaultState: IPersonState
}

export default class PersonalDetails extends Component<IProps, IPersonState> {
  private defaultState: Readonly<IPersonState>;

  constructor(props: IProps) {
    super(props);

    this.defaultState = props.DefaultState;
    this.state = props.DefaultState
  }

  private updateBinding = (event: any) => {
    switch (event.target.id) {
      case "firstName":
        this.setState({FirstName: event.target.value});
        break;
      case "lastName":
        this.setState({LastName: event.target.value});
        break;
    }
  };

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

            <Row>
              <Col>
                <label htmlFor="firstName">First Name</label>
              </Col>
              <Col>
                <label htmlFor="lastName">Last Name</label>
              </Col>
            </Row>

            <Row>
              <Col>
                <input
                  type="text"
                  value={this.state.FirstName}
                  onChange={this.updateBinding}
                  placeholder="First Name"
                  id="firstName"
                  className="form-control"
                />
              </Col>
              <Col>
                <input
                  type="text"
                  value={this.state.LastName}
                  onChange={this.updateBinding}
                  placeholder="Last Name"
                  id="lastName"
                  className="form-control"
                />
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
