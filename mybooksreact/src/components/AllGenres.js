import React from 'react';
import Bookshelf from './Bookshelf';
import { BookContextClient } from '../components/BookState';

const AllGenres = () => {
	return (
		<BookContextClient>
			{({ genres }) => {
			   return genres.map((g, i) => {
					return <Bookshelf genre={g} key={i} />;
				});
			}}
		</BookContextClient>
	);
};

export default AllGenres;
