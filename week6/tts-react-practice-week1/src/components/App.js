import React from 'react';
import BoxContainer from './BoxContainer';
import Nav from './Nav';
import Home from './Home';
import BBContainer from './BBContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/box-container'>
					<BoxContainer />
				</Route>
        <Route path='/breaking-bad'>
          <BBContainer />
        </Route>
			</Switch>
		</Router>
	);
};

export default App;
