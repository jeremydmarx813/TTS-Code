import React from 'react';
import './App.css';
import Bookshelf from './components/Bookshelf.js';
import Book from './components/Book.js';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Bookshelf />
      </div>
    );

  }
}

export default App;
