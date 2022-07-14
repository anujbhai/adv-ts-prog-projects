import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './App.css';
import PersonalDetails from './PersonalDetails';
import { IPersonState } from './State';

class App extends Component {
  private defaultPerson: IPersonState = {
    FirstName: "",
    LastName: "",
    Address1: "",
    Address2: null,
    Town: "",
    Country: "",
    PhoneNumber: "",
    Postcode: "",
    DateOfBirth: null,
    PersonId: "",
  };

  public render() {
    return (
      <Container>
        <PersonalDetails DefaultState={this.defaultPerson} />
      </Container>
    );
  }
}

export default App;
