import { css } from 'react-emotion';

export const styles = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(50, 15px)',
  gridTemplateRows: 'repeat(30, 15px)',
  gridGap: '1px',
  padding: '2px',
  backgroundColor: '#F98B9E',
  '& div': {
    backgroundColor: '#333333'
  }
})