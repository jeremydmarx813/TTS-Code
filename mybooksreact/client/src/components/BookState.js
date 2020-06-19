import React, { createContext, useReducer } from 'react';
import BookReducer from './BookReducer';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const appState = {
	genres        : [],
	books         : [],
	savedBooks    : [],
	selectedGenre : ''
};

export const BookContext = createContext(appState);

export const BookProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(BookReducer, appState);

	const selectGenreFunc = (e) => {
		// this.setState({
		// 	selectedGenre : e.target.value
		// });
	};

	const toggleBookIsSaved = (book_uri) => {
		// this.setState({
		// 	books : [ ...this.state.books ].map((b) => {
		// 		if (b.book_uri === book_uri) {
		// 			b.isSaved = !b.isSaved;
		// 			return b;
		// 		} else {
		// 			return b;
		// 		}
		// 	})
		// });
	};

	const getNYTBooks = async () => {
		try {
			const nytBooks = await axios.get(
				`https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=M08voLv6ftzAuwJWsHIGS7n6gAl0dJZx`
			);
			dispatch({
				type    : 'GET_NYT_BOOKS',
				payload : nytBooks
			});
		} catch (err) {
			dispatch({
				type    : 'TRANSACTION_ERROR',
				payload : err 
			});
		}

		// .then((res) => {
		// 	// console.log(res.data.results.lists);
		// 	this.setState({
		// 		genres : res.data.results.lists.reduce((s, e) => {
		// 			if (!this.state.genres.includes(e.list_name)) {
		// 				s.push(e.list_name);
		// 			}
		// 			return s;
		// 		}, []),
		// 		books  : res.data.results.lists
		// 			.reduce((s, e) => {
		// 				let funcBooks = e.books.map((b) => {
		// 					if (this.state.savedBooks.find((savedBook) => savedBook.book_uri === b.book_uri)) {
		// 						b.isSaved = true;
		// 					}

		// 					b.isSaved = false;
		// 					b.list_name = e.list_name;
		// 					return b;
		// 				});
		// 				s.push(funcBooks);
		// 				return s;
		// 			}, [])
		// 			.flat()
		// 	});
		// })
		// .catch((err) => console.log(err));
	};

	const postBookToMongo = async (bData) => {
		// this.toggleBookIsSaved(bData.book_uri);
		// axios
		// 	.post('http://localhost:4000/api/savedbooks', {
		// 		amazon_product_url : bData.amazon_product_url,
		// 		author             : bData.author,
		// 		book_image         : bData.book_image,
		// 		title              : bData.title,
		// 		book_uri           : bData.book_uri,
		// 		description        : bData.description,
		// 		list_name          : bData.list_name,
		// 		publisher          : bData.publisher,
		// 		primary_isbn10     : bData.primary_isbn10,
		// 		isSaved            : bData.isSaved
		// 	})
		// 	.then((res) => console.log(res))
		// 	.catch((err) => console.log(err));
	};

	const deleteBookFromMongo = async (bId, uri) => {
		// this.toggleBookIsSaved(uri);
		// axios
		// 	.delete(`http://localhost:4000/api/savedbooks/${bId}`)
		// 	.then((res) => console.log(res))
		// 	.catch((err) => console.log(err));
	};

	const deleteBook = (book_uri) => {
		// this.setState({
		// 	books : this.state.books.filter((b) => b.book_uri !== book_uri)
		// });
	};

	// componentDidMount() {
	// 	const getSavedBooks = () => {
	// 		axios
	// 			.get('http://localhost:4000/api/savedbooks')
	// 			.then((res) => {
	// 				this.setState({
	// 					savedBooks : res.data
	// 				});
	// 			})
	// 			.catch((err) => console.log(err));
	// 	};

	// 	const getNYTBooks = () => {

	// 	};
	// 	Promise.all([ getSavedBooks, getNYTBooks ]).catch((err) => console.log(err));
	// }

	return (
		<BookContext.Provider
			value={{
				genres              : state.genres,
				books               : state.books,
				savedBooks          : state.savedBooks,
				selectedGenre       : state.selectedGenre,
				selectGenreFunc,
				toggleBookIsSaved,
				postBookToMongo,
				deleteBookFromMongo,
				deleteBook,
				getNYTBooks
			}}
		>
			{children}
		</BookContext.Provider>
	);
};

// export const BookContextClient = BookContext.Consumer;
