import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { BookState } from './components/BookState';
// import AllGenres from './components/AllGenres';
// import Bookshelf from './components/Bookshelf';
import Header from './components/Header';

import HomePage from './components/HomePage';
import IndividualLocation from './components/locations/IndividualLocation';

// import axios from 'axios';

const App = (props) => {
	return (
		<BookState>
			<Router>
				<React.Fragment>
					<Header />
					<div className="App">
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/individual-location/:id" component={IndividualLocation} />
						</Switch>
					</div>
				</React.Fragment>
			</Router>
		</BookState>
	);
};

export default App;
