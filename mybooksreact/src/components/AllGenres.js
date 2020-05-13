import React from 'react';
import Bookshelf from './Bookshelf';
import { BookContextClient } from '../components/BookState';

const AllGenres = props => {
	return (
		<BookContextClient>
			{({ genres }) => {
                // console.log(genres);
				genres.map((g) => <Bookshelf genre={g} />);
			}   }
		</BookContextClient>
	);
};

export default AllGenres;
