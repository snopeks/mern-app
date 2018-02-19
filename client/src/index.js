import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import './index.css';
import routes from './routes.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
   document.getElementById('root')
 );
registerServiceWorker();
