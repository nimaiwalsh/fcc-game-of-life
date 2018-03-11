import React, { Component } from 'react';

import Board from './Board';
import ControlPanel from './ControlPanel';
import { Container } from './StyledComponents';

export default class GameBoard extends Component {
  render() {
    return(
      <Container>
        <div>
          <ControlPanel />
          <Board />
        </div>
      </Container>
    )
  }
}

