import React, { Fragment } from 'react';
import BoxContainer from './BoxContainer';
import Nav from './Nav';
import Home from './Home';
import Poke from './Poke';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route>
					<BoxContainer path='box-container'/>
				</Route>
        <Route>
          <Poke path="pokemon"/>
        </Route>
			</Switch>
		</Router>
	);
};

export default App;
