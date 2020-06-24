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
		dispatch({
			type: 'SWITCH_SELECTED_GENRE',
			payload: e.target.value
		})
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
	};

	const getMongoBooks = async () => {
		try {
			const mongoBooks = await axios.get('http://localhost:4000/api/savedbooks');
			dispatch({
				type    : 'GET_MONGO_BOOKS',
				payload : mongoBooks
			});
		} catch (err) {
			dispatch({
				type    : 'TRANSACTION_ERROR',
				payload : err
			});
		}
	};

	const toggleBookIsSaved = (book_title) => {
		dispatch({
			type    : 'TOGGLE_BOOK_SAVED',
			payload : book_title
		});
	};

	const postBookToMongo = async (bData) => {
		toggleBookIsSaved(bData.title);
		axios
			.post('http://localhost:4000/api/savedbooks', {
				amazon_product_url : bData.amazon_product_url,
				author             : bData.author,
				book_image         : bData.book_image,
				title              : bData.title,
				book_uri           : bData.book_uri,
				description        : bData.description,
				list_name          : bData.list_name,
				publisher          : bData.publisher,
				primary_isbn10     : bData.primary_isbn10,
				isSaved            : !bData.isSaved
			})
			.then((res) => {
				console.log(res.data)
				dispatch({
					type    : 'POST_MONGO_BOOK',
					payload : res.data
				});
			})
			.catch((err) => console.log(err));
	};

	const deleteBookFromMongo = async (bId, title) => {
		toggleBookIsSaved(title);
		axios
			.delete(`http://localhost:4000/api/savedbooks/${bId}`)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const deleteBook = (book_uri) => {
		try {
			dispatch({
				type    : 'DELETE_NYT_BOOK_FROM_STATE',
				payload : book_uri
			});
		} catch (err) {
			dispatch({
				type    : 'TRANSACTION_ERROR',
				payload : err
			});
		}
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
				getNYTBooks,
				getMongoBooks
			}}
		>
			{children}
		</BookContext.Provider>
	);
};

// export const BookContextClient = BookContext.Consumer;
