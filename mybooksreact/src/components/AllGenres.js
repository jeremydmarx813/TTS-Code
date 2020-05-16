import React from 'react';
import Bookshelf from './Bookshelf';
import { BookContextClient } from '../components/BookState';

const AllGenres = (props) => {
	return (
		<BookContextClient>
			{() => {
				return (
					<React.Fragment>
						<Bookshelf />
					</React.Fragment>
				);
			}}
		</BookContextClient>
	);
};

export default AllGenres;
