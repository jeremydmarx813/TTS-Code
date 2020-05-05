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

 addBook = e => {
   e.preventDefault();
   console.log(e.target);
 }

  render () {
    return (
      <div className="App">
        <Header />
        <AddBook addBook={this.addBook}/>
        {this.state.genres.map((g, i) => (
           <Bookshelf key={i} genre={g}/>
        ))}
      </div>
    );

  }
}

export default App;
