import React, { Component } from 'react';

import Board from './Board';
import ControlPanel from './ControlPanel';
import { Container } from './StyledComponents';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardOfBlocks: [],
      columns: 50,
      rows: 30,
      generationCount: 0,
      speed: 1,
    };

    this.createGenerationOfBlocks = this.createGenerationOfBlocks.bind(this);
    this.nextGenerationOfBlocks = this.nextGenerationOfBlocks.bind(this);
    this.handleChangeBlockLife = this.handleChangeBlockLife.bind(this);
    this.handleSpeedup = this.handleSpeedup.bind(this);
    this.handleSlow = this.handleSlow.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleRun = this.handleRun.bind(this);
  }

  componentDidMount() {
    this.createGenerationOfBlocks(false);
    this.generationSpeed();
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

  handleSlow() {
    //Slow gamespeed to 1x and not below
    if (this.state.speed > 1) {
      clearInterval(this.interval);
      this.setState(prevState => {
        return { speed: prevState.speed - 1 };
      }, this.generationSpeed);
    }
  }

  handleSpeedup() {
    //Increase generation gamespeed to 4x and not higher
    if (this.state.speed < 4) {
      clearInterval(this.interval);
      this.setState(prevState => {
        return { speed: prevState.speed + 1 };
      }, this.generationSpeed);
    }
  }

  handleClear() {
    //kill every block on the board
    this.createGenerationOfBlocks(true);
    this.setState({ speed: 1, generationCount: 0 });
    clearInterval(this.interval);
  }

  handlePause() {
    clearInterval(this.interval);
  }

  handleRun() {
    clearInterval(this.interval);
    this.generationSpeed();
  }

  generationSpeed() {
    const { speed } = this.state
    const speedInMicroseconds = {1:500, 2:300, 3:100, 4:50}
    this.interval = setInterval(this.nextGenerationOfBlocks, speedInMicroseconds[speed]);
  }

  createGenerationOfBlocks(clear) {
    //Create x rows of y blocks and set the board
    const { columns, rows } = this.state;
    const boardOfBlocks = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        //kill all block lives or create random block lives
        let isAlive;
        (clear) ? isAlive = false : isAlive = Math.random() >= 0.8 ? true : false;
        // randomly change the life of each block
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
    boardOfBlocks.forEach((row, rowIndex) => {
      let newGenerationRow = [];
      //Count how many alive neighbours it has
      row.forEach((block, blockIndex) => {
        let aliveNeighbours = 0;
        this.isNeighbourAlive(boardOfBlocks, rowIndex - 1, blockIndex - 1) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, rowIndex - 1, blockIndex) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, rowIndex - 1, blockIndex + 1) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, rowIndex, blockIndex - 1) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, rowIndex, blockIndex + 1) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, rowIndex + 1, blockIndex - 1) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, rowIndex + 1, blockIndex) && (aliveNeighbours += 1);
        this.isNeighbourAlive(boardOfBlocks, rowIndex + 1, blockIndex + 1) && (aliveNeighbours += 1);
        //Assign the current generation block to to the newGenerationBlocks
        //Change its life state depending on live neighbours
        newGenerationRow.push(boardOfBlocks[rowIndex][blockIndex])
        if(aliveNeighbours < 2) {
          newGenerationRow[blockIndex] = {isAlive: false, row: rowIndex, column: blockIndex};
        }
        if(aliveNeighbours > 3) {
          newGenerationRow[blockIndex] = {isAlive: false, row: rowIndex, column: blockIndex};
        }
        if(aliveNeighbours === 3 ) {
          newGenerationRow[blockIndex] = {isAlive: true, row: rowIndex, column: blockIndex};
        }
      });
       newGenerationBlocks.push(newGenerationRow)
    });
    this.setState(prevState => {
      return {
        boardOfBlocks: newGenerationBlocks,
        generationCount: prevState.generationCount + 1,
      }
    });
  }

  render() {
    const { rows, columns, boardOfBlocks, speed, generationCount } = this.state;
    return(
      <Container>
        <div>
          <ControlPanel 
            handleSlow={this.handleSlow}
            handleRun={this.handleRun}
            handlePause={this.handlePause}
            handleClear={this.handleClear}
            handleSpeedup={this.handleSpeedup}
            speed={speed}
            generationCount={generationCount}
          />
          <Board 
            rows={rows} 
            columns={columns} 
            boardOfBlocks={boardOfBlocks} 
            handleClick={(col, row) => this.handleChangeBlockLife(col, row)}
          />
        </div>
      </Container>
    )
  }
}

