import React, { Component } from 'react';

import BoardContainer, { Block } from './Board_styles';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: []
    };
  }

  componentDidMount() {
    this.createBlocks(1500);
  }

  changeBlockLife(block) {
    let { blocks } = this.state
    let newBlockLife = '';
    blocks[block][1] === 'alive' ? (newBlockLife = 'dead') : (newBlockLife = 'alive');
    blocks.splice(block, 1, [block, newBlockLife]);
    this.setState({ blocks });
  }

  createBlocks(number) {
    const blocks = [];
    for (let block = 0; block < number; block++) {
      let blockLife = Math.random() >= 0.8 ? 'alive' : 'dead';
      blocks.push([block, blockLife]);
    }
    return this.setState({ blocks });
  }

  render() {
    return (
      <BoardContainer gridcolumns={50} gridrows={30}>
        {this.state.blocks.map(block => {
          const blocknumber = block[0];
          const blocklife = block[1];
          return (
            <Block
              blockLife={blocklife}
              onClick={() => this.changeBlockLife(blocknumber)}
              key={blocknumber}
            />
          );
        })}
      </BoardContainer>
    );
  }
}
