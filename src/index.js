import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Datacenter from './Datacenter';
import { Provider } from 'react-redux';
import store from './data/store';

ReactDOM.render(
  <Provider store={store}>
    <Datacenter />
  </Provider>,
  document.getElementById('root'),
);
