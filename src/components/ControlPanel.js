import React from 'react';
import ControlPanelContainer from './ControlPanel_styles';

const ControlPanel = (props) => {
  return(
    <ControlPanelContainer>
      <button onClick={() => props.handleRun()}>Run</button>
      <button onClick={() => props.handlePause()}>Pause</button>
      <button onClick={() => props.handleClear()}>Clear</button>
    </ControlPanelContainer>
  )
}

export default ControlPanel;