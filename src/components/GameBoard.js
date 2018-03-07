import React, { Component } from 'react';

import Board from './Board';
import { Container } from './StyledComponents';

export default class GameBoard extends Component {
  render() {
    return(
      <Container>
        <Board />
      </Container>
    )
  }
}

