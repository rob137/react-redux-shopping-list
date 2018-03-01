import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingListApp from './components/shopping-list-app';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ShoppingListApp/>
  </Provider>,
  document.getElementById('root')
);