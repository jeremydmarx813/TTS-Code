import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.book.title,
            author: this.props.book.author,
            year: this.props.book.year,
            editMode: false,
            isRead: false,
            isBunny: this.props.book.isBunny
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleRead = this.toggleRead.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    toggleEdit = e => {
        this.setState({editMode: !this.state.editMode});
    }
  
    toggleRead = e => {
        this.state.isRead ?  e.target.innerText = "Unread" : e.target.innerText = "Read";
        this.state.isRead ?  e.target.className = "btn-warning" : e.target.className = "btn-success";
        this.setState({ isRead: !this.state.isRead });
    }

    inputChange = e => {
       this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { title, author, year } = this.state;
        const finalCard = (
            <div className="card text-center border border-dark">
               <div className="card-header">
                   <h3>{title}</h3> 
               </div>
               <div className="card-body">
                 <h3>{author}</h3> 
                 <h3>{year}</h3>
                 <button className="btn btn-warning btn-sm" onClick={this.toggleEdit}>Edit</button>
                 <button className="btn btn-danger btn-sm" onClick={this.props.delBook.bind(this, this.props.book.id)}>Delete</button>
                 <button className="btn btn-warning btn-sm" onClick={this.toggleRead}>Unread</button>
               </div>
            </div>
        );
        const editCard = (
            <div className="card text-center border border-dark">
               <div className="card-header">
                   <input type="text" name="title" onChange={this.inputChange} value={title}/> 
               </div>
               <div className="card-body">
                 <input type="text" name="author" onChange={this.inputChange} value={author}/> 
                 <input type="text" name="year" onChange={this.inputChange} value={year}/> 
                 <button className="btn btn-warning btn-sm" onClick={this.toggleEdit}>Save</button>
                 <button className="btn btn-danger btn-sm">Delete</button>
                 <button className="btn btn-warning btn-sm" onClick={this.toggleRead}>Unread</button>
               </div>
            </div>
        )

        return this.state.editMode ? editCard : finalCard;
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    delBook: PropTypes.func.isRequired
}

export default Book
