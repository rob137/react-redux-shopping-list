import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingListApp from './components/shopping-list-app';
import {Provider} from 'react-redux';
import './index.css';

ReactDOM.render(
  <Provider>
    <ShoppingListApp/>
  </Provider>,
  document.getElementById('root')
);