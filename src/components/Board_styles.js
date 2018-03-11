import styled from 'react-emotion';

const BoardContainer = styled('div')(props => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${props.gridcolumns}, 15px)`,
  gridTemplateRows: `repeat(${props.gridrows}, 15px)`,
  gridGap: '1px',
  padding: '2px',
  backgroundColor: '#F98B9E',
}));

export const Block = styled('div')(props => ({
  backgroundColor: props.blockLife === 'dead' ? '#333333' : '#BB39F8',
}));

export default BoardContainer