import styled from 'react-emotion';

export const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '20px',
})

export const InstructionsButton = styled('div')({
  width: '100px',
  padding: '16px',
  backgroundColor: '#9FCFD1',
  transform: 'rotate(-90deg)',
  position: 'absolute',
  top: '300px',
  left: '-42px',
  borderRadius: '0 0 10px 10px'
})