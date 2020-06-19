import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { BookProvider } from './components/BookState';
// import AllGenres from './components/AllGenres';
// import Bookshelf from './components/Bookshelf';
import Header from './components/Header';
import SavedBooks from './components/locations/SavedBooks';
import HomePage from './components/HomePage';
import IndividualLocation from './components/locations/IndividualLocation';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

const App = () => {
	return (
		<BookProvider>
			<Router>
				<Header />
				<div className="App">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/individual-location/:id" component={IndividualLocation} />
						<Route path="/saved-books" component={SavedBooks} />
					</Switch>
				</div>
			</Router>
		</BookProvider>
	);
};

export default App;
