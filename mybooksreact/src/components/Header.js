import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarToggler } from 'reactstrap';

const Header = () => {
	return (
		<div className="jumbotron text-center bg-info">
			<h1>Bookshelves App</h1>
			<Navbar light expand="md">
				<NavItem>
					<Link to="/">Home</Link>
				</NavItem>
				<NavItem>
					<Link to="/saved-books">Saved Books</Link>
				</NavItem>
			</Navbar>
		</div>
	);
};

export default Header;
