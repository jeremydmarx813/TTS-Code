import React, { useContext } from 'react';
import { BookContext } from './BookState';
import Book from './Book.js';

// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Bookshelf = (props) => {
	const { books } = useContext(BookContext);
	const { genre } = props;
	return (
		<React.Fragment>
			<div className="container flex-column text-center">
				<h1 className="display-4 bg-info p-3">{genre}</h1>
				{books
					.filter((b) => {
						return b.list_name === genre;
					})
					.map((b, i) => {
						return <Book bookData={b} key={i} />;
					})}
			</div>
		</React.Fragment>
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
