import React from 'react';
import { BookContextClient } from '../components/BookState';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

class Book extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		//     title: this.props.book.title,
		//     author: this.props.book.author,
		//     year: this.props.book.year,
		//     isRead: false,

		// }
	}

	// toggleEdit = e => {
	//     this.setState({editMode: !this.state.editMode});
	// }

	// toggleRead = e => {
	//     this.state.isRead ?  e.target.innerText = "Unread" : e.target.innerText = "Read";
	//     this.state.isRead ?  e.target.className = "btn-warning" : e.target.className = "btn-success";
	//     this.setState({ isRead: !this.state.isRead });
	// }

	// inputChange = e => {
	//    this.setState({[e.target.name]: e.target.value});
	// }

	render() {
		// console.log(this.props);
		const { id, title, author, year } = this.props.bookData;
		const finalCard = (
			<BookContextClient>
				{({ deleteBook }) => {
					return (
						<div className="card text-center border border-dark">
							<div className="card-header">
								<h3>{title}</h3>
							</div>
							<div className="card-body">
								<h3>{author}</h3>
								<h3>{year}</h3>
								<button className="btn btn-warning btn-sm mx-2">Unread</button>
								<Link to={{ pathname: `/individual-location/${id}`, bookData: this.props.bookData }}>
									<button className="btn btn-warning btn-sm mx-2">More Info</button>
								</Link>
								<button className="btn btn-danger btn-sm mx-2" onClick={deleteBook.bind(this, id)}>Delete</button>
							</div>
						</div>
					);
				}}
			</BookContextClient>
		);
		// const editCard = (
		//     <div className="card text-center border border-dark">
		//        <div className="card-header">
		//            <input type="text" name="title" onChange={this.inputChange} value={title}/>
		//        </div>
		//        <div className="card-body">
		//          <input type="text" name="author" onChange={this.inputChange} value={author}/>
		//          <input type="text" name="year" onChange={this.inputChange} value={year}/>
		//          <button className="btn btn-warning btn-sm" onClick={this.toggleEdit}>Save</button>
		//          <button className="btn btn-danger btn-sm">Delete</button>
		//          <button className="btn btn-warning btn-sm" onClick={this.toggleRead}>Unread</button>
		//        </div>
		//     </div>
		// )

		// return this.state.editMode ? editCard : finalCard;
		return finalCard;
	}
}

// Book.propTypes = {
//     book: PropTypes.object.isRequired,
//     delBook: PropTypes.func.isRequired
// }

export default Book;
