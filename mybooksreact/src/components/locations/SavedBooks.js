import React from 'react';
import Book from '../Book';
import { BookContextClient } from '../BookState';

const SavedBooks = () => {
	return (
		<BookContextClient>
			{({ books }) => {
				return (
					<div className="container flex-column text-center">
						<h1 className="display-4 bg-info p-3">{'Saved Books'}</h1>
						{books
							.filter((b) => {
								return b.isSaved;
							})
							.map((b, i) => {
								return <Book bookData={b} key={i} />;
							})}
					</div>
				);
			}}
		</BookContextClient>
	);
};

export default SavedBooks;
