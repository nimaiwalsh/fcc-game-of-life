import React, { Component } from 'react';

import { Container } from './components/StyledComponents';
import GameBoard from './components/GameBoard';

class App extends Component {
  render() {
    return (
      <Container>
        <GameBoard />
      </Container>
    );
  }
}

export default App;
