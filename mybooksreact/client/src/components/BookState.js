import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const BookContext = React.createContext();

export class BookState extends React.Component {
	constructor() {
		super();
		this.state = {
			genres              : [],
			books               : [],
			savedBooks          : [],
			deleteBook          : this.deleteBook,
			toggleBookIsSaved   : this.toggleBookIsSaved,
			selectedGenre       : '',
			selectGenreFunc     : this.selectGenreFunc,
			postBookToMongo     : this.postBookToMongo,
			deleteBookFromMongo : this.deleteBookFromMongo
		};
	}

	selectGenreFunc = (e) => {
		this.setState({
			selectedGenre : e.target.value
		});
	};

	toggleBookIsSaved = (book_uri) => {
		this.setState({
			books : [ ...this.state.books ].map((b) => {
				if (b.book_uri === book_uri) {
					b.isSaved = !b.isSaved;
					return b;
				} else {
					return b;
				}
			})
		});
	};

	postBookToMongo = (bData) => {
		this.toggleBookIsSaved(bData.book_uri);

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
				isSaved            : bData.isSaved
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	deleteBookFromMongo = (bId, uri) => {
		this.toggleBookIsSaved(uri);
		axios
			.delete(`http://localhost:4000/api/savedbooks/${bId}`)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	deleteBook = (book_uri) => {
		this.setState({
			books : this.state.books.filter((b) => b.book_uri !== book_uri)
		});
	};

	componentDidMount() {
		const getSavedBooks = () => {
			axios
				.get('http://localhost:4000/api/savedbooks')
				.then((res) => {
					this.setState({
						savedBooks : res.data
					});
				})
				.catch((err) => console.log(err));
		};

		const getNYTBooks = () => {
			axios
				.get(
					`https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=M08voLv6ftzAuwJWsHIGS7n6gAl0dJZx`
				)
				.then((res) => {
					// console.log(res.data.results.lists);
					this.setState({
						genres : res.data.results.lists.reduce((s, e) => {
							if (!this.state.genres.includes(e.list_name)) {
								s.push(e.list_name);
							}
							return s;
						}, []),
						books  : res.data.results.lists
							.reduce((s, e) => {
								let funcBooks = e.books.map((b) => {
									if (this.state.savedBooks.find((savedBook) => savedBook.book_uri === b.book_uri)) {
										b.isSaved = true;
									}

									b.isSaved = false;
									b.list_name = e.list_name;
									return b;
								});
								s.push(funcBooks);
								return s;
							}, [])
							.flat()
					});
				})
				.catch((err) => console.log(err));
		};
		Promise.all([getSavedBooks, getNYTBooks]).catch(err => console.log(err));
	}

	render() {
		return <BookContext.Provider value={this.state}>{this.props.children}</BookContext.Provider>;
	}
}

export const BookContextClient = BookContext.Consumer;
