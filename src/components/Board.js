import React from 'react';

import BoardContainer, { Block } from './Board_styles';

const Board = (props) => {
  const { rows, columns, boardOfBlocks, handleClick } = props;
  return (
    <BoardContainer gridcolumns={columns} gridrows={rows}>
      {boardOfBlocks.map(row => {
        return row.map((block, index) => {
          const key = `${block.row}${block.column}`;
          return (
            <Block
              isAlive={block.isAlive}
              onClick={() => handleClick(block.row, block.column)}
              key={key}
            />
          );
        });
      })}
    </BoardContainer>
  );
};

export default Board;
