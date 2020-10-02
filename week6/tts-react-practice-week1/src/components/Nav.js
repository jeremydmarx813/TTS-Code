import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div>
			<ul style={{
                listStyle: "none",
                display: 'flex',
                justifyContent: 'space-between',
                margin: '10px'
            }}>
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="box-container">
					<li>Boxes</li>
				</Link>
                <Link to="pokemone">
                <li>Pokemon</li>
                </Link>
			</ul>
		</div>
	);
}

export default Nav;
