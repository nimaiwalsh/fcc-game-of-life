    //Map throuh each block to determine its next life
    // boardOfBlocks.map(row => {
    //   row.forEach(block => {
    //     const rowRef = parseInt(block.row, 10);
    //     const colRef = parseInt(block.column, 10);
    //     let aliveNeighbours = 0;
    //     //count alive neighbours
    //     this.isNeighbourAlive(boardOfBlocks, rowRef - 1, colRef - 1) && (aliveNeighbours += 1);
    //     this.isNeighbourAlive(boardOfBlocks, rowRef - 1, colRef) && (aliveNeighbours += 1);
    //     this.isNeighbourAlive(boardOfBlocks, rowRef - 1, colRef + 1) && (aliveNeighbours += 1);
    //     this.isNeighbourAlive(boardOfBlocks, rowRef, colRef - 1) && (aliveNeighbours += 1);
    //     this.isNeighbourAlive(boardOfBlocks, rowRef, colRef + 1) && (aliveNeighbours += 1);
    //     this.isNeighbourAlive(boardOfBlocks, rowRef + 1, colRef - 1) && (aliveNeighbours += 1);
    //     this.isNeighbourAlive(boardOfBlocks, rowRef + 1, colRef) && (aliveNeighbours += 1);
    //     this.isNeighbourAlive(boardOfBlocks, rowRef + 1, colRef + 1) && (aliveNeighbours += 1);
    //     // debugger;
    //     // console.log(rowRef, colRef)
    //     // console.log('count:' + aliveNeighbours + 'rowRef:' + rowRef + 'colRef:' + colRef);
    //     // console.log(boardOfBlocks);
    //     //Change the life of the current block based on the following rules
    //     // Any live cell with fewer than two live neighbours dies
    //     // Any live cell with two or three live neighbours lives
    //     // Any live cell with more than three live neighbours dies
    //     // Any dead cell with exactly three live neighbours becomes a live cell
    //     if(aliveNeighbours < 2 && block.isAlive) {
    //       newGenerationBlocks[rowRef][colRef].isAlive = false;
    //     }
    //     if(aliveNeighbours > 3 && block.isAlive) {
    //       newGenerationBlocks[rowRef][colRef].isAlive = false;
    //     }
    //     if(aliveNeighbours === 3 && !block.isAlive) {
    //       newGenerationBlocks[rowRef][colRef].isAlive = true;
    //     }
    //   });
    // });



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