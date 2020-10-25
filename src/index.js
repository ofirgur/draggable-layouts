import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

import './index.css';

ReactDOM.render(
  <Provider store={configureStore({})}>
    <BrowserRouter>
      <App />   
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

