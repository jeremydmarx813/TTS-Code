import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const BookContext = React.createContext();

export class BookState extends React.Component {
    constructor(){
        super();
        this.state = {
			genres : [ 'Fiction', 'History', 'Music' ],
			books  : [
				{
					id      : uuidv4(),
					title   : 'Harry Potter and the Order of the Phoenix',
					author  : 'J.K Rowling',
					year    : '2003',
					genre   : 'Fiction'
				},
				{
					id      : uuidv4(),
					title   : 'Doomed to Succeed',
					author  : 'Dennis Ross',
					year    : '2015',
					genre   : 'History'
				},
				{
					id      : uuidv4(),
					title   : 'Room Full of Mirrors',
					author  : 'Charles Cross',
					year    : '2005',
					genre   : 'Music'
				},
				{
					id      : uuidv4(),
					title   : 'Redwall',
					author  : 'Brian Jaques',
					year    : '1986',
					genre   : 'Fiction'
				},
				{
					id      : uuidv4(),
					title   : 'Heavier than Heaven',
					author  : 'Charles Cross',
					year    : '2001',
					genre   : 'Music'
				},
				{
					id      : uuidv4(),
					title   : 'Fire and Fury',
					author  : 'Michael Wolff',
					year    : '2018',
					genre   : 'History'
				}
			],
			deleteBook: this.deleteBook
		};
	}
	
	deleteBook = bookId => {
		this.setState({
			books: this.state.books.filter(b => b.id !== bookId)
		})
	}

    // componentDidMount() {
		// console.log(
		// 	'%cLOG FROM componentDidMount LIFECYCLE METHOD BLOCK IN APP.JS - LOGGED JSON DATA FROM NYTIMES API',
		// 	'color:red;font-size:20px;background-color:blue;border:red dotted 4px;padding:4px;margin:15px'
		// );

		
		// axios
		// 	.get(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`)
		// 	.then((res) => console.log(res.data))
		// 	.catch((err) => console.log(err));
		/////////////////////////////////////////////////////////////////////
		// const randInd = Math.floor(Math.random() * this.state.books.length);
		// this.setState({
		// 	books : [ ...this.state.books ].map((b, i) => {
		// 		if (i === randInd) {
		// 			b.isBunny = true;
		// 			return b;
		// 		} else {
		// 			return b;
		// 		}
		// 	})
        // });
       
	// }

    render() {
        return (
            <BookContext.Provider value={this.state}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}

export const BookContextClient = BookContext.Consumer;


