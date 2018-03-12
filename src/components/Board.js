import React, { Component } from 'react';

import BoardContainer, { Block } from './Board_styles';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
      columns: 50,
      rows: 30,
    };
  }

  componentDidMount() {
    const { columns, rows } = this.state;
    this.createBlocksBoard(columns, rows);
  }

  handleChangeBlockLife(block) {
    this.setState(prevState => {
      prevState.blocks[block].isAlive = !prevState.blocks[block].isAlive;
      return {
        blocks: prevState.blocks
      }
    })
  }

  createBlocksBoard(columns, rows) {
    const blocks = [];
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++){
        let isAlive = Math.random() >= 0.8 ? true : false;
        blocks.push({isAlive: isAlive, row: i, column: j});
      }
    }
    return this.setState({ blocks });
  }

  render() {
    const { rows, columns } = this.state;
    return (
      <BoardContainer gridcolumns={columns} gridrows={rows}>
        {this.state.blocks.map((block, index) => {
          const blocklife = block.isAlive;
          return (
            <Block
              isAlive={blocklife}
              onClick={() => this.handleChangeBlockLife(index)}
              key={index}
              id={index}
            />
          );
        })}
      </BoardContainer>
    );
  }
}
