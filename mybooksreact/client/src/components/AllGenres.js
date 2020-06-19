import React, { useContext, useEffect } from 'react';
import Bookshelf from './Bookshelf';
import { BookContext } from './BookState';

const AllGenres = () => {
	const { genres, getNYTBooks } = useContext(BookContext);
	useEffect(() => {
		getNYTBooks();
	}, []);
	// const testAllGenres = genres.reduce((s, e) => {
	// 	if (!this.state.genres.includes(e.list_name)) {
	// 		s.push(e.list_name);
	// 	}
	// 	return s;
	// }, []);
	//if (genres.length) {
	// if (!selectedGenre.length) {
	//		return testAllGenres.map((g, i) => {
	//			return <Bookshelf genre={g} key={i} />;
	//		});
	// } else {
	// 	return (
	// 		<React.Fragment>
	// 			<Bookshelf genre={selectedGenre} />
	// 		</React.Fragment>
	// 	);
	// }
	//} else {
	return (
		<React.Fragment>
			<img
				src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
				style={{ textAlign: 'center' }}
				alt="spinner"
			/>
		</React.Fragment>
	);
	//}
};

export default AllGenres;
