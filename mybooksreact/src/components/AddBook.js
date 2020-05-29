import React from 'react';
import { BookContextClient } from './BookState';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const AddBook = (props) => {
	return (
		<BookContextClient>
			{({ genres, selectedGenre, selectGenreFunc, handleSubmit }) => (
				<Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
					<FormGroup className="text-center">
						<select
							value={selectedGenre}
							onChange={selectGenreFunc}
							className="custom-select mr-sm-2"
							id="inlineFormCustomSelect"
						>
							<option value={''}>Search via genre...</option>
							{genres.map((g, i) => {
								return (
									<React.Fragment key={i}>
										<option>{g}</option>
									</React.Fragment>
								);
							})}
						</select>
					</FormGroup>
					<FormGroup className="row">
						<div className="col-sm-10">
							<Button type="submit" className="btn btn-primary">
								Search!
							</Button>
						</div>
					</FormGroup>
				</Form>
			)}
		</BookContextClient>
	);
};

export default AddBook;
