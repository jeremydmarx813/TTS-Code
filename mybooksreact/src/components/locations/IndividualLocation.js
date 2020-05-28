import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';

class IndividualLocation extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.location.state;
	}

	componentDidMount() {
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${this.state
					.primary_isbn10}&api-key=M08voLv6ftzAuwJWsHIGS7n6gAl0dJZx`
			)
			.then((res) => {
				console.log(res.data.results);
				if (res.data.results.length) {
					this.setState({
						reviewLink : res.data.results[0].url
					});
				}
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<React.Fragment>
				<div>
					<Link to="/">
						<Button className="bg-info btn-lg rounded-pill my-3">Back to Home Page</Button>
					</Link>
				</div>
				<div className="card mb-5">
					<div className="container">
						<img src={this.state.book_image} className="card-img-top" />
						<h1 className="display-4 card-title text-center">{this.state.title}</h1>
						<h3 className="card-text text-center">{this.state.author}</h3>
						<h4 className="display-5 text-center">
							<span>Publisher:</span> {this.state.publisher}
						</h4>
						<p className="card-text">{this.state.description}</p>
						<div className="d-flex flex-row justify-content-around">
							<a href="https://www.amazon.com/dp/0385545932?tag=NYTBSREV-20?tag=NYTBS-20" target="_blank">
								<button className="btn bg-warning align-self-center">Buy on Amazon</button>
							</a>
							{this.state.reviewLink ? (
								<a href={this.state.reviewLink} target="_blank">
									<Button className="btn bg-warning">Read a review from the NYT</Button>
								</a>
							) : null}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default IndividualLocation;
