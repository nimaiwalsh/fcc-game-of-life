import React from 'react';
import { ControlPanelContainer, ControlPanelButtons, InfoDisplay } from './ControlPanel_styles';
import { Play, Pause, Slowdown, Speedup } from '../assets/icons.js';

const ControlPanel = (props) => {
  const { speed, generationCount } = props;
  return(
    <ControlPanelContainer>
      <InfoDisplay>
        <div>Speed <span>{speed}x</span></div>
      </InfoDisplay>
      <ControlPanelButtons>
        <div onClick={() => props.handleSlow()}><Slowdown/></div>  
        <div onClick={() => props.handleRun()}><Play /></div>  
        <div onClick={() => props.handlePause()}><Pause /></div>  
        <div onClick={() => props.handleClear()}>Clear</div>
        <div onClick={() => props.handleSpeedup()}><Speedup /></div>    
      </ControlPanelButtons>
      <InfoDisplay>
        <div>Generation <span>{generationCount}</span></div>
      </InfoDisplay>
    </ControlPanelContainer>
  )
}

export default ControlPanel;