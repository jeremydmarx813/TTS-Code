import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { BookState } from './components/BookState';
import AllGenres from './components/AllGenres';
// import Bookshelf from './components/Bookshelf';
import Header from './components/Header';
import AddBook from './components/AddBook';
import IndividualLocation from './components/locations/IndividualLocation';

// import axios from 'axios';

const App = props => {
	

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
						<div className="App">
							<Header />
							<Route
								exact
								path="/"
								render={(props) => (
									<React.Fragment>
										<AddBook />
										<AllGenres />
									</React.Fragment>
								)}
							/>
							<Route path="/individual-location" component={IndividualLocation} />
						</div>
					</Router>
				)}
			</BookState>
		);
	
}

export default App;
