import React from 'react';
import Bookshelf from './Bookshelf';
import { BookContextClient } from './BookState';

const AllGenres = () => {
	return (
		<BookContextClient>
			{({ genres, selectedGenre }) => {
				if (genres.length) {
					if (!selectedGenre.length) {
						return genres.map((g, i) => {
							return <Bookshelf genre={g} key={i} />;
						});
					} else {
						return (
							<React.Fragment>
								<Bookshelf genre={selectedGenre} />
							</React.Fragment>
						);
					}
				} else {
					return (
						<React.Fragment>
							<img
								src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
								style={{ textAlign: 'center' }}
							/>
						</React.Fragment>
					);
				}
			}}
		</BookContextClient>
	);
};

export default AllGenres;
