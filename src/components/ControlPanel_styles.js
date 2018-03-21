import styled from 'react-emotion';

export const ControlPanelContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const InfoDisplay = styled('div')({
  '& div': {
    display: 'inline-block',
    margin: '0 20px'
  },
  '& div > span': {
    display: 'block',
    fontSize: '2rem',
    textAlign: 'center'
  }
});

export const ControlPanelButtons = styled('div')(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10px',
  '& div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    margin: '5px 2px',
    borderRadius: '50%',
    border: '3px solid',
    padding: '5px',
    transition: 'background-color .5s'
  },
  '& div:hover': {
    backgroundColor: '#857F87',
    cursor: 'pointer'
  },
  '& div:active': {
    transform: 'translateY(2px)'
  },
  '& div:first-child, div:last-child': {
    height: '25px',
    width: '25px',
    borderColor: '#EBEBEB',
    '& svg': {
      fill: '#EBEBEB'
    }
  },
  '& div:nth-child(2)': {
    borderColor: '#92D0D2',
    '& svg': {
      fill: '#92D0D2'
    }
  },
  '& div:nth-child(3)': {
    borderColor: '#F2DF78',
    '& svg': {
      fill: '#F2DF78'
    }
  },
  '& div:nth-child(4)': {
    borderColor: '#EB909F',
    color: '#EB909F',
    textTransform: 'uppercase',
    fontWeight: '400',
    '& svg': {
      fill: '#EB909F'
    }
  },
  '& svg': {
    width: '20px',
    height: '20px'
  }
}));
