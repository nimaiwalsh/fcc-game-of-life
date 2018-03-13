import React, { Component } from 'react';

import BoardContainer, { Block } from './Board_styles';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardOfBlocks: [],
      columns: 50,
      rows: 30,
      generation: 0
    };

    this.createInitialGenerationOfBlocks = this.createInitialGenerationOfBlocks.bind(this);
  }

  componentDidMount() {
    this.createInitialGenerationOfBlocks();
    // this.interval = setInterval(() => this.nextGenerationOfBlocks(), 1000);
  }

  handleChangeBlockLife(row, col) {
    this.setState(prevState => {
      const blockRef = prevState.boardOfBlocks[row][col];
      blockRef.isAlive = !blockRef.isAlive;
      return {
        blocks: prevState.boardOfBlocks
      };
    });
  }

  createInitialGenerationOfBlocks() {
    //Create x rows of y blocks and set the board
    const { columns, rows } = this.state;
    const boardOfBlocks = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        //randomly change the life of each block
        let isAlive = Math.random() >= 0.8 ? true : false;
        row.push({ isAlive: isAlive, row: i, column: j });
      }
      boardOfBlocks.push(row);
    }
    return this.setState({ boardOfBlocks });
  }

  nextGenerationOfBlocks() {
    // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    // Any live cell with two or three live neighbours lives on to the next generation.
    // Any live cell with more than three live neighbours dies, as if by overpopulation.
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

    // The initial pattern constitutes the seed of the system. The first generation is created by applying
    // the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and
    // the discrete moment at which this happens is sometimes called a tick (in other words, each generation
    // is a pure function of the preceding one). The rules continue to be applied repeatedly to
    // create further generations.
    const { boardOfBlocks } = this.state;
    const newGenerationBlocks = [];

    return console.log(boardOfBlocks);

    //map the board for each block
    //Count the number of alive neighbours for the current block
    //Change the life of the current block based on the above rules
    //Push the current block life back into newGenerationBlocks
  }

  render() {
    const { rows, columns, boardOfBlocks } = this.state;
    return (
      <BoardContainer gridcolumns={columns} gridrows={rows}>
        {boardOfBlocks.map(row => {
          return row.map(block => {
            const key = `${block.row}${block.column}`;
            return (
              <Block
                isAlive={block.isAlive}
                onClick={() => this.handleChangeBlockLife(block.row, block.column)}
                key={key}
              />
            );
          });
        })}
      </BoardContainer>
    );
  }
}
