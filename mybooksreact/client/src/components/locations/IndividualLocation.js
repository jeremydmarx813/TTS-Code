import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';

const IndividualLocation = (props) => {
	const [ indvRevs, setIndvRevs ] = useState(props.location.state);
 //!!not working
	// useEffect(() => {
	// 	console.log(indvRevs);
	// 	let revs = axios
	// 		.get(
	// 			`https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${indvRevs.primary_isbn10}&api-key=M08voLv6ftzAuwJWsHIGS7n6gAl0dJZx`
	// 		)
	// 		.then((res) => {
	// 			console.log(res.data.results);
	// 			if (res.data.results.length) {
	// 				return res.data.results[0].url;
	// 			}
	// 		})
	// 		.catch((err) => console.log(err));
	// 	setIndvRevs((indvRevs) => (indvRevs.reviewLink = revs));
	// 	return () => {
	// 		console.log('dismount indv loc');
	// 		setIndvRevs(null);
	// 		console.log(indvRevs);
	// 	};
	// }, []);

	const { book_image, title, author, publisher, description, reviewLink, 
		amazon_product_url } = indvRevs;
	return (
		<React.Fragment>
			<div>
				<Link to="/">
					<Button className="bg-info btn-lg rounded-pill my-3">Back to Home Page</Button>
				</Link>
			</div>
			<div className="card mb-5">
				<div className="container">
					<img src={book_image} className="card-img-top" />
					<h1 className="display-4 card-title text-center">{title}</h1>
					<h3 className="card-text text-center">{author}</h3>
					<h4 className="display-5 text-center">
						<span>Publisher:</span> {publisher}
					</h4>
					<p className="card-text">{description}</p>
					<div className="d-flex flex-row justify-content-around">
						<a href={amazon_product_url} target="_blank">
							<button className="btn bg-warning align-self-center">Buy on Amazon</button>
						</a>
						{reviewLink ? (
							<a href={reviewLink} target="_blank">
								<Button className="btn bg-warning">Read a review from the NYT</Button>
							</a>
						) : null}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default IndividualLocation;
