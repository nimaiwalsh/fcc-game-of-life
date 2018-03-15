import React, { Component } from 'react';

import BoardContainer, { Block } from './Board_styles';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardOfBlocks: [],
      columns: 50,
      rows: 30,
      generationCount: 0
    };

    this.createInitialGenerationOfBlocks = this.createInitialGenerationOfBlocks.bind(this);
    this.nextGenerationOfBlocks = this.nextGenerationOfBlocks.bind(this);
  }

  componentDidMount() {
    this.createInitialGenerationOfBlocks();
    this.interval = setInterval(() => this.nextGenerationOfBlocks(), 500);
  }

  handleChangeBlockLife(row, col) {
    this.setState(prevState => {
      const blockRef = prevState.boardOfBlocks[row][col];
      blockRef.isAlive = !blockRef.isAlive;
      return {
        boardOfBlocks: prevState.boardOfBlocks
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
        // randomly change the life of each block
        let isAlive = Math.random() >= 0.8 ? true : false;
        row.push({ isAlive: isAlive, row: i, column: j });
      }
      boardOfBlocks.push(row);
    }
    this.setState({ boardOfBlocks });
  }

  isNeighbourAlive(newGenerationBlocks, row, block) {
    if (newGenerationBlocks[row] && newGenerationBlocks[row][block] && newGenerationBlocks[row][block].isAlive) {
      //alive block
      return true;
    }
    //dead block
    return false;
  }

  nextGenerationOfBlocks() {
    const { boardOfBlocks }= this.state;
    const newGenerationBlocks = [];
    //Check each current block in each row
    for (let row = 0; row < boardOfBlocks.length; row++ ){
      let newGenerationRow = [];
      //Count how many alive neighbours it has
      for(let block = 0; block < boardOfBlocks[row].length; block++) {
        let aliveNeighbours = 0;
        this.isNeighbourAlive(boardOfBlocks, row - 1, block - 1) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, row - 1, block) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, row - 1, block + 1) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, row, block - 1) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, row, block + 1) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, row + 1, block - 1) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, row + 1, block) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, row + 1, block + 1) && (aliveNeighbours += 1);
        //Assign the current generation block to to the newGenerationBlocks
        //Change its life state depending on live neighbours
        newGenerationRow.push(boardOfBlocks[row][block])
        if(aliveNeighbours < 2) {
          newGenerationRow[block] = {isAlive: false, row: row, column: block};
        }
        if(aliveNeighbours > 3) {
          newGenerationRow[block] = {isAlive: false, row: row, column: block};
        }
        if(aliveNeighbours === 3 ) {
          newGenerationRow[block] = {isAlive: true, row: row, column: block};
        }
      }
      newGenerationBlocks.push(newGenerationRow)
    }
    this.setState(prevState => {
      return {
        boardOfBlocks: newGenerationBlocks,
        generationCount: prevState.generationCount + 1,
      }
    });
  }

  render() {
    const { rows, columns, boardOfBlocks } = this.state;
    return (
      <BoardContainer gridcolumns={columns} gridrows={rows}>
        {boardOfBlocks.map(row => {
          return row.map((block, index) => {
            const key = `${block.row}${block.column}`;
            return (
              <Block
                isAlive={block.isAlive}
                onClick={() => this.handleChangeBlockLife(block.row, block.column)}
                key={key}
              ></Block>
            );
          });
        })}
      </BoardContainer>
    );
  }
}
