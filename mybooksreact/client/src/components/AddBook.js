import React, { useContext } from 'react';
import { BookContext } from './BookState';
import { Button, Form, FormGroup } from 'reactstrap';

const AddBook = (props) => {
	const { genres, selectedGenre, selectGenreFunc } = useContext(BookContext);
	return (
		<Form className="d-flex flex-column align-items-center">
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
		</Form>
	);
};

export default AddBook;
