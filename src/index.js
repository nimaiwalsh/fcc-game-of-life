import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'react-emotion';

injectGlobal`
  html, body {
    font-family: Arial;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #524763;
  }

  #root {
    height: 100%;
  }
`


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
