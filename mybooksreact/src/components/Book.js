import React from 'react';
import { BookContextClient } from '../components/BookState';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

const Book = (props) => {
	const { book_uri, title, author, year, isSaved } = props.bookData;
	return (
		<BookContextClient>
			{({ deleteBook, toggleBookIsSaved }) => {
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
									onClick={toggleBookIsSaved.bind(this, book_uri)}
								>
									Saved
								</button>
							) : (
								<button
									className="btn btn-warning btn-sm mx-2"
									onClick={toggleBookIsSaved.bind(this, book_uri)}
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
			}}
		</BookContextClient>
	);
};

// Book.propTypes = {
//     book: PropTypes.object.isRequired,
//     delBook: PropTypes.func.isRequired
// }

export default Book;
