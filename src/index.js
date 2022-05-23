import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
import 'antd/dist/antd.css'
import {BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
    <App />
  </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);

