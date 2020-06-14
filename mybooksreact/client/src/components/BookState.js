import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const BookContext = React.createContext();

export class BookState extends React.Component {
	constructor() {
		super();
		this.state = {
			genres            : [],
			books             : [],
			savedBooks        : [],
			deleteBook        : this.deleteBook,
			toggleBookIsSaved : this.toggleBookIsSaved,
			selectedGenre     : '',
			selectGenreFunc   : this.selectGenreFunc
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

	// testGetBooks = async () => {
	// 	return await
	// };

	deleteBook = (book_uri) => {
		this.setState({
			books : this.state.books.filter((b) => b.book_uri !== book_uri)
		});
	};

	componentDidMount() {
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
								b.list_name = e.list_name;
								b.isSaved = false;
								return b;
							});
							s.push(funcBooks);
							return s;
						}, [])
						.flat()
				});
			})
			.catch((err) => console.log(err));

		axios
			.get('http://localhost:4000/api/savedbooks')
			.then((res) => {
				console.log(res);
				this.setState({
					savedBooks : res.data
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return <BookContext.Provider value={this.state}>{this.props.children}</BookContext.Provider>;
	}
}

export const BookContextClient = BookContext.Consumer;
