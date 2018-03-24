import React, { Component } from 'react';
import styles from './BoardSizeControls_styles';

export default class BoardSizeControls extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 'small' };
  }

  HandleBoardSize(size) {
    this.props.onHandleBoardSize(size)
    this.setState({ active: size })
  }
  
  render() {
    const size = ['small', 'medium', 'large'];
    return (
      <div className={styles}>
        {size.map((size, index) => (
          <div 
            className={this.state.active === size ? 'active' : ''}
            key={size}
            onClick={() => this.HandleBoardSize(size)}
          >
            {size}
          </div>
        ))}
      </div>
    );
  }
};