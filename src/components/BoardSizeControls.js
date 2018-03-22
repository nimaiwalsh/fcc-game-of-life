import React from 'react';

const BoardSizeControls = props => {
  const size = ['small', 'medium', 'large'];

  return (
    <div>
      {size.map(size => (
        <div 
          key={size}
          onClick={() => props.onHandleBoardSize(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
};

export default BoardSizeControls;
