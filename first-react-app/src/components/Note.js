import React from 'react';
import '../css/Note.css';
import PropTypes from 'prop-types';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(){
    console.log(this.props.noteId);
 }

  render() {
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.body}</p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger" onClick={this.deleteNote}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

Note.defaultProps = {
    title: "A cool title",
    body: "A cool body",
  };

Note.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    toDelete: PropTypes.bool
};

export default Note;