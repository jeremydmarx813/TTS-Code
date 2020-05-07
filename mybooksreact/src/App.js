import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Bookshelf from './components/Bookshelf';
import Header from './components/Header';
import AddBook from './components/AddBook';
import EasterBunny from './components/locations/EasterBunny';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


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
          year: '2003',
          genre: 'Fiction',
          isBunny: false
      },
      {
          id: uuidv4(),
          title: 'Doomed to Succeed',
          author: 'Dennis Ross',
          year: '2015',
          genre: 'History',
          isBunny: false
      },
      {
          id: uuidv4(),
          title: 'Room Full of Mirrors',
          author: 'Charles Cross',
          year: '2005',
          genre: 'Music',
          isBunny: false
      }, 
      {
          id: uuidv4(),
          title: 'Redwall',
          author: 'Brian Jaques',
          year: '1986',
          genre: 'Fiction',
          isBunny: false
      },
      {
          id: uuidv4(),
          title: 'Heavier than Heaven',
          author: 'Charles Cross',
          year: '2001',
          genre: 'Music',
          isBunny: false
      },
      {
          id: uuidv4(),
          title: 'Fire and Fury',
          author: 'Michael Wolff',
          year: '2018',
          genre: 'History',
          isBunny: false
      }
      
  ]
   };
 }

 componentDidMount() {
   console.log('%cLOG FROM componentDidMount LIFECYCLE METHOD BLOCK IN APP.JS - LOGGED JSON DATA FROM NYTIMES API', 'color:red;font-size:20px;background-color:blue;border:red dotted 4px;padding:4px;margin:15px')

   const apiKey = 'M08voLv6ftzAuwJWsHIGS7n6gAl0dJZx';
   axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`)
   .then(res => console.log(res.data))
   .catch(err => console.log(err));
   /////////////////////////////////////////////////////////////////////
   const randInd = Math.floor(Math.random() * this.state.books.length);
   this.setState({
     books: [...this.state.books].map((b, i) => {
       if(i === randInd){
         b.isBunny = true;
         return b;
       } else {
         return b;
       }
     })
   })
 }

 addBook = obj => {
    
   const newBook = {
    id: uuidv4(),
    title: obj.title,
    author: obj.author,
    year: obj.year,
    genre: obj.genre,
    isBunny: false
   }
   
   const newBookIsReady = Object.values(newBook).every(val => val.length !== 0);
   
   if(newBookIsReady){

     this.setState({ books: [...this.state.books, newBook] });
   } else {
     console.log('not enough info for book');
   }

 }

  render () {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
           <React.Fragment>
             <AddBook addBook={this.addBook}/>
             {this.state.genres.map((g, i) => (
                <Bookshelf key={i} genre={g} books={this.state.books.filter(b => b.genre === g)}/>
             ))}
           </React.Fragment>
        )}/>
        <Route path="/easter-bunny-puppy" component={EasterBunny} />
      </div>
      </Router>
    );

  }
}

export default App;
