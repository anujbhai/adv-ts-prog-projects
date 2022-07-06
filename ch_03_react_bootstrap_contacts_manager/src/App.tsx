import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './App.css';
import PersonalDetails from './PersonalDetails';

class App extends Component {
  public render() {
    return (
      <Container>
        <PersonalDetails />
      </Container>
    );
  }
}

export default App;
