import React from 'react';
import { Link } from 'react-router-dom';

class IndividualLocation extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.location.state;
	}

	render() {
		return (
			<React.Fragment>
				<div>
					<Link to="/">
						<button className="bg-info btn-lg rounded-pill my-3">Back to Home Page</button>
					</Link>
				</div>
				<div className="jumbotron jumbotron-fluid text-center">
					<div className="container">
						<h1 className="display-4">{this.state.title}</h1>
						<h2 className="display-5">{this.state.author}</h2>
						<h2 className="display-5">{this.state.genre}</h2>
						<h2 className="display-5">{this.state.year}</h2>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default IndividualLocation;
