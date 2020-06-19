import React, { useContext, useEffect } from 'react';
import Book from '../Book';
import { BookContext } from '../BookState';
// import axios from 'axios';

const SavedBooks = () => {
	const { savedBooks, getMongoBooks } = useContext(BookContext);
	// const testGetBooks = axios
	// 	.get('http://localhost:4000/api/savedbooks')
	// 	.then((res) => res.data)
	// 	.catch((err) => console.log(err));

	// const namesArr = [];
	// const reducedBooks = books.reduce((s, e) => {
	// 	if (!namesArr.includes(e.title)) {
	// 		s.push(e);
	// 		namesArr.push(e.title);
	// 		return s;
	// 	} else {
	// 		return s;
	// 	}
	// }, []);
	useEffect(
		() => {
			getMongoBooks();
		},
		[]
	);
	return (
		<div className="container flex-column text-center">
			<h1 className="display-4 bg-info p-3">{'Saved Books'}</h1>
			<React.Fragment>
				{savedBooks.length ? (
					savedBooks.map((b, i) => {
						return <Book bookData={b} key={i} />;
					})
				) : (
					<React.Fragment>
						<img
							src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
							style={{ textAlign: 'center' }}
							alt="spinner"
						/>
					</React.Fragment>
				)
				}
			</React.Fragment>
		</div>
	);
};

export default SavedBooks;
