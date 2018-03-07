import React from 'react';

import { styles } from './Board_styles';

//create correct number of blocks for game size
function createBlocks() {
  const blocks = [];
  for (let i = 0; i < 1500; i++) {
   blocks.push(<div key={i}></div>)
  }
  return blocks.map(block => block)
}

const Board = () => {
  return (
    <div className={styles} >
      {createBlocks()}
    </div>
  )
}

export default Board;