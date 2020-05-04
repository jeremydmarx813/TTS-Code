import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import Header from './components/Header';
import './css/Board.css';
import * as registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Board />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA 
registerServiceWorker.unregister();
