import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { BookState } from './components/BookState';
// import AllGenres from './components/AllGenres';
// import Bookshelf from './components/Bookshelf';
import Header from './components/Header';

import IndividualLocation from './components/locations/IndividualLocation';
import HomePage from './components/HomePage';

// import axios from 'axios';

const App = (props) => {
	// addBook = (obj) => {
	// 	const newBook = {
	// 		id      : uuidv4(),
	// 		title   : obj.title,
	// 		author  : obj.author,
	// 		year    : obj.year,
	// 		genre   : obj.genre,
	// 		isBunny : false
	// 	};

	// 	const newBookIsReady = Object.values(newBook).every((val) => val.length !== 0);

	// 	if (newBookIsReady) {
	// 		this.setState({ books: [ ...this.state.books, newBook ] });
	// 	} else {
	// 		console.log('not enough info for book');
	// 	}
	// };

	return (
		<BookState>
			{() => (
				<Router>
					<React.Fragment>
						<Header />
						<div className="App">
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route path="/individual-location/:book-id" component={IndividualLocation} />
							</Switch>
						</div>
					</React.Fragment>
				</Router>
			)}
		</BookState>
	);
};

export default App;
