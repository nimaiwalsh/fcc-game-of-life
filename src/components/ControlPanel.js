import React from 'react';
import ControlPanelContainer from './ControlPanel_styles';
import { Play, Pause, Slowdown, Speedup } from '../assets/icons.js';

const ControlPanel = (props) => {
  return(
    <ControlPanelContainer>
      <div onClick={() => props.handleSlow()}><Slowdown/></div>  
      <div onClick={() => props.handleRun()}><Play /></div>  
      <div onClick={() => props.handlePause()}><Pause /></div>  
      <div onClick={() => props.handleClear()}>Clear</div>
      <div onClick={() => props.handleSpeedup()}><Speedup /></div>    
    </ControlPanelContainer>
  )
}

export default ControlPanel;