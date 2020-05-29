import React from 'react';
import Bookshelf from './Bookshelf';
import { BookContextClient } from '../components/BookState';

const AllGenres = () => {
	return (
		<BookContextClient>
			{({ genres, selectedGenre }) => {
				if (genres.length) {
					!selectedGenre.length
						? genres.map((g, i) => {
								return <Bookshelf genre={g} key={i} />;
							})
						: console.log('genre selected: ', selectedGenre);
				} else {
					return (
						<React.Fragment>
							<img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" />
						</React.Fragment>
					)
				}
			}}
		</BookContextClient>
	);
};

export default AllGenres;
