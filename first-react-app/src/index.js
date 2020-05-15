import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {connect} from 'react-redux';
import noteReducer from '../src/reducers/NoteReducer';
import Board from './components/Board';
import Header from './components/Header';
import './css/Board.css';
import * as registerServiceWorker from './registerServiceWorker';

const store = createStore(noteReducer)
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
