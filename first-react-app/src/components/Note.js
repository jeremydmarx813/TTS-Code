import React from 'react';
import '../css/Note.css';
import PropTypes from 'prop-types';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      body: this.props.body,
      noteId: this.props.noteId,
      editMode: false
    }
    
  }

  toggleEdit = e => {
     this.setState({editMode: !this.state.editMode})
  }

  cardChange = e => {
    this.setState({ [e.target.name]: e.target.value  });
  }

  render() {
    const { noteId, title, body, editMode } = this.state;
    const finishedCard = (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{body}</p>
            <button className="btn btn-info" onClick={this.toggleEdit}>Edit</button>
            <button className="btn btn-danger" onClick={this.props.delNote.bind(this, noteId)}>Delete</button>
          </div>
        </div>
      </div>
    );
    const editModeCard = (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <input type="text" onChange={this.cardChange} name="title" value={title}/>
            <input type="text" onChange={this.cardChange} name="body" value={body}/>
            <button className="btn btn-info" onClick={this.toggleEdit}>Edited</button>
            <button className="btn btn-danger" onClick={this.props.delNote.bind(this, noteId)}>Delete</button>
          </div>
        </div>
      </div>
    )
    return editMode ? editModeCard : finishedCard;
  }
}

Note.defaultProps = {
    title: "A cool title",
    body: "A cool body",
  };

Note.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
};

export default Note;