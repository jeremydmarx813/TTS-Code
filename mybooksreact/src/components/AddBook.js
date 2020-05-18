import React from 'react';

class AddBook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title  : '',
			author : '',
			year   : '',
			genre  : ''
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// addBook = e => {
	//     e.preventDefault();
	//     this.props.addBook(this.state);
	//     this.setState({
	//         title: '',
	//         author: '',
	//         year: '',
	//         genre: ''
	//     })
	// }

	render() {
		return (
			<form action="#" className="d-flex flex-column align-items-center">
				<div className="form-group row text-center">
					<label htmlFor="title" className="col-sm-2 col-form-label">
						Title
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							name="title"
							id="title"
							onChange={this.handleChange}
							value={this.state.title}
						/>
					</div>
				</div>
				<div className="form-group row text-center">
					<label htmlFor="author" className="col-sm-2 col-form-label">
						Author
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							name="author"
							id="author"
							onChange={this.handleChange}
							value={this.state.author}
						/>
					</div>
				</div>
				<fieldset className="form-group text-center" onChange={this.handleChange}>
					<div className="row">
						<legend className="col-form-label col-sm-2 pt-0">Genre</legend>
						<div className="col-sm-10">
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="genre"
									id="radioFiction"
									value="Fiction"
								/>
								<label className="form-check-label" htmlFor="radioFiction">
									Fiction
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="genre"
									id="radioHistory"
									value="History"
								/>
								<label className="form-check-label" htmlFor="radioHistory">
									History
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="genre"
									id="radioMusic"
									value="Music"
								/>
								<label className="form-check-label" htmlFor="gridRadios3">
									Music
								</label>
							</div>
						</div>
					</div>
				</fieldset>
				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Add Book!
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default AddBook;
