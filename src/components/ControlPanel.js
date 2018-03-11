import React from 'react';
import ControlPanelContainer from './ControlPanel_styles';

const ControlPanel = () => {
  return(
    <ControlPanelContainer>
      <button>Run</button>
      <button>Pause</button>
      <button>Clear</button>
    </ControlPanelContainer>
  )
}

export default ControlPanel;