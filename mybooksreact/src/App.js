import React from 'react';
import './App.css';
import Bookshelf from './components/Bookshelf';
import Header from './components/Header';
import AddBook from './components/AddBook';

import { v4 as uuidv4 } from 'uuid';


class App extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     genres: ['Fiction', 'History', 'Music'],
     books: [
      {
          id: uuidv4(),
          title: 'Harry Potter and the Order of the Phoenix',
          author: 'J.K Rowling',
          year: '2004',
          genre: 'Fiction'
      },
      {
          id: uuidv4(),
          title: 'Doomed to Succeed',
          author: 'Dennis Ross',
          year: '2012',
          genre: 'History'
      },
      {
          id: uuidv4(),
          title: 'Room Full of Mirrors',
          author: 'Charles Cross',
          year: '2008',
          genre: 'Music'
      }, 
      {
          id: uuidv4(),
          title: 'Redwall',
          author: 'Brian Jaques',
          year: '1999',
          genre: 'Fiction'
      },
      {
          id: uuidv4(),
          title: 'Heavier than Heaven',
          author: 'Charles Cross',
          year: '2011',
          genre: 'Music'
      },
      {
          id: uuidv4(),
          title: 'Fire and Fury',
          author: 'Michael Wolff',
          year: '2017',
          genre: 'History'
      }
      
  ]
   };
 }

 addBook = e => {
   e.preventDefault();
   const testBook = {
    id: uuidv4(),
    title: 'Eloquent JS',
    author: 'Genius',
    year: '2015',
    genre: 'History'
   }
   this.setState({ books: [...this.state.books, testBook] });
 }

  render () {
    return (
      <div className="App">
        <Header />
        <AddBook addBook={this.addBook}/>
        {this.state.genres.map((g, i) => (
           <Bookshelf key={i} genre={g} books={this.state.books.filter(b => b.genre === g)}/>
        ))}
      </div>
    );

  }
}

export default App;
