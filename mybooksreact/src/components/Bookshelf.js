import React from 'react';
import { BookContextClient } from './BookState';
import Book from './Book.js';
// import EasterBunny from './locations/EasterBunny';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Bookshelf = (props) => {
	//Don't Understand this code from Pluralsight!!!!
	// componentWillUnmount() {
	//     if (this.updateTimer) {
	//       clearTimeout(this.updateTimer);
	//     }
	//   }

	//   updateAndNotify = () => {
	//     if (this.updateTimer) return;
	//     this.setState({ books: this.props.books });
	//     this.updateTimer = setTimeout(() => {
	//       this.updateTimer = null;
	//     }, 1000);
	//   }

	//   componentDidUpdate(prevProps) {
	//     if (prevProps.books.length !== this.props.books.length) {
	//       this.updateAndNotify();
	//     }
	//   }
	//////////////////////////////////////////////////////////////////////
	// delBook = id => {
	//    this.setState({ books: [...this.state.books].filter(b => b.id !== id)});
	// }

	return (
		<BookContextClient>
			{(value) => {
				const { books } = value;
				const { genre } = props;
				
				return (
					<React.Fragment>
						<div className="container flex-column text-center">
							<h1 className="display-4 bg-info">{props.genre}</h1>
							{books.filter(b => {
								return b.genre === genre;
							})
							.map(b => {
								return (
									<React.Fragment>
										<Book bookData={b} key={b.id}/>
									</React.Fragment>
								)
							})
							}
						</div>
					</React.Fragment>
				);
			}}
		</BookContextClient>
	);
};

// const linkStyle = {

// 	textDecoration : 'none'
// };

// Bookshelf.propTypes = {
//    books: PropTypes.array.isRequired,
//    genre: PropTypes.string.isRequired
// }

export default Bookshelf;
