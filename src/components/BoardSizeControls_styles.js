import { css } from 'react-emotion';

const styles = css({
  display: 'flex',
  justifyContent: 'center',
  '& div': {
    color: '#FFF',
    border: '2px solid white',
    margin: '10px 2px 0 2px',
    padding: '4px',
    borderRadius: '4px',
  },
  '& div:hover': {
    cursor: 'pointer',
    backgroundColor: '#857F87',
  },
  '& div:focus': {
    backgroundColor: '#857F87',
  },
  '& .active': {
    backgroundColor: '#857F87',
  }
})

export default styles;