import styled from 'react-emotion';

const BoardContainer = styled('div')(props => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${props.gridcolumns}, 15px)`,
  gridTemplateRows: `repeat(${props.gridrows}, 15px)`,
  gridGap: '1px',
  padding: '2px',
  backgroundColor: '#F98B9E',
  boxShadow: '-10px 10px 100px black',
}));

export const Block = styled('div')(props => ({
  backgroundColor: props.isAlive ? '#BB39F8' : '#333333',
}));

export default BoardContainer