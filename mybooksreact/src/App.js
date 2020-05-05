import React from 'react';
import './App.css';
import Bookshelf from './components/Bookshelf';
import Header from './components/Header';
import AddBook from './components/AddBook';

class App extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     genres: ['Fiction', 'History', 'Music']
   };
 }

  render () {
    return (
      <div className="App">
        <Header />
        <AddBook />
        {this.state.genres.map(g => (
           <Bookshelf genre={g}/>
        ))}
      </div>
    );

  }
}

export default App;
