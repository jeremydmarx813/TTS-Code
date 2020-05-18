import React from 'react';
import { bookContextClient, BookContextClient } from './BookState';

class AddBook extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BookContextClient>
				{({ genres }) => (
					<form action="#" className="d-flex flex-column align-items-center">
						<div className="form-group row text-center">
							<label htmlFor="title" className="col-sm-2 col-form-label">
								Search for Book
							</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" name="title" id="title" />
							</div>
						</div>
						<div className="form-group row text-center">
							<select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
								<option defaultValue>Search via genre...</option>
								{genres.map((g, i) => {
									return (
										<React.Fragment key={i}>
											<option>{g}</option>
										</React.Fragment>
									);
								})}
							</select>
						</div>
						<div className="form-group row">
							<div className="col-sm-10">
								<button type="submit" className="btn btn-primary">
									Search!
								</button>
							</div>
						</div>
					</form>
				)}
			</BookContextClient>
		);
	}
}

export default AddBook;
