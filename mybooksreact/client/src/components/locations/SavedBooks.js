import React from 'react';
import Book from '../Book';
import { BookContextClient } from '../BookState';
import axios from 'axios';

const SavedBooks = () => {
	return (
		<BookContextClient>
			{({ books }) => {
				const testGetBooks = axios
					.get('http://localhost:4000/api/savedbooks')
					.then((res) => res.data)
					.catch((err) => console.log(err));
				const namesArr = [];
				const reducedBooks = books.reduce((s, e) => {
					if (!namesArr.includes(e.title)) {
						s.push(e);
						namesArr.push(e.title);
						return s;
					} else {
						return s;
					}
				}, []);
				return (
					<div className="container flex-column text-center">
						<h1 className="display-4 bg-info p-3">{'Saved Books'}</h1>
						<React.Fragment>
							{() => {
								return testGetBooks
									.then((arr) => {
										return arr.map((b, i) => {
											return <Book bookData={b} key={i} />;
										});
									})
									.catch((err) => console.log(err));
								// .filter((b) => {
								// 	return b.isSaved;
								// })
								// .map((b, i) => {
								// 	return <Book bookData={b} key={i} />;
								// })
							}}
						</React.Fragment>
					</div>
				);
			}}
		</BookContextClient>
	);
};

export default SavedBooks;
