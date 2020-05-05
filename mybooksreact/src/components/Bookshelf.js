import React from 'react';
import Book from './Book.js';
import { v4 as uuidv4 } from 'uuid';

 class Bookshelf extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
        }
    }

    render() {
        const { genre } = this.props;
        return (
            <div>
                <h2>{genre}</h2>
                {this.state.books.filter(book => book.genre === genre)
                .map(b => <Book book={b}/> )}
                
            </div>
        )
    }
}

export default Bookshelf;
