import React, { useContext } from 'react';
import { BookContext } from './BookState';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

const Book = (props) => {
	const { deleteBook, toggleBookIsSaved, postBookToMongo, deleteBookFromMongo } = useContext(BookContext);
	const { book_uri, title, author, year, isSaved, _id } = props.bookData;
	return (
		<div className="card text-center border border-dark">
			<div className="card-header">
				<h3>{title}</h3>
			</div>
			<div className="card-body">
				<h3>{author}</h3>
				<h3>{year}</h3>
				{isSaved ? (
					<button
						className="btn btn-success btn-sm mx-2"
						onClick={deleteBookFromMongo.bind(this, _id, book_uri)}
					>
						Saved
					</button>
				) : (
					<button
						className="btn btn-warning btn-sm mx-2"
						onClick={postBookToMongo.bind(this, props.bookData)}
					>
						Unsaved
					</button>
				)}
				<Link to={{ pathname: `/individual-location/${book_uri}`, state: props.bookData }}>
					<button className="btn btn-warning btn-sm mx-2">More Info</button>
				</Link>
				<button className="btn btn-danger btn-sm mx-2" onClick={deleteBook.bind(this, book_uri)}>
					Delete
				</button>
			</div>
		</div>
	);
};

// Book.propTypes = {
//     book: PropTypes.object.isRequired,
//     delBook: PropTypes.func.isRequired
// }

export default Book;
