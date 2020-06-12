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
					.then((res) => console.log(res))
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
					<React.Fragment>
						<div className="container flex-column text-center">
							<h1 className="display-4 bg-info p-3">{'Saved Books'}</h1>
							{reducedBooks
								.filter((b) => {
									return b.isSaved;
								})
								.map((b, i) => {
									return <Book bookData={b} key={i} />;
								})}
						</div>
						<div>{console.log(testGetBooks)}</div>
					</React.Fragment>
				);
			}}
		</BookContextClient>
	);
};

export default SavedBooks;
