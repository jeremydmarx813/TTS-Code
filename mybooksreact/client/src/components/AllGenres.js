import React, { useContext } from 'react';
import Bookshelf from './Bookshelf';
import { BookContext } from './BookState';

const AllGenres = () => {
	const { genres, selectedGenre } = useContext(BookContext);

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
				<img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" style={{ textAlign: 'center' }} />
			</React.Fragment>
		);
	}
};

export default AllGenres;
