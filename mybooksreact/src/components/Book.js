import React from 'react';

class Book extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.book.title,
            author: this.props.book.author,
            year: this.props.book.year,
            editMode: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    toggleEdit = e => {
        this.setState({editMode: !this.state.editMode});
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
                 <button className="btn btn-warning btn-sm" onClick={this.toggleEdit}>Edited</button>
                 <button className="btn btn-danger btn-sm">Delete</button>
               </div>
            </div>
        )

        return this.state.editMode ? editCard : finalCard;
    }
}

export default Book
