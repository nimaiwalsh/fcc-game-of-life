import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index_styles';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
