import React from "react";
import '../css/Board.css';
import Note from './Note.js';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [
              {
                id: 1,
                title: "Class Notes",
                body: "Always use constructors when extending another class",
                toDelete: false
              },
              {
                id: 2,
                title: "My New Address",
                body: "2001 N Lonhill Phoenix, AZ 81234",
                toDelete: false
              },
              {
                id: 3,
                title: "React Notes",
                body: "Everything in React is a component",
                toDelete: false
              }
            ]
          }
       this.addNote = this.addNote.bind(this);
       
    }

    addNote(e) {
      let titleToAdd = e.target.querySelector('#titleVal').value;
        let bodyToAdd = e.target.querySelector('#bodyVal').value;
        
        this.state.notes.push(
          { 
            id: this.state.notes.length + 1,
            title: titleToAdd,
            body: bodyToAdd,
            toDelete: false 
          }
        );

        this.setState(
          {
            notes: this.state.notes
          }
        );
      }

    

    render(){
        return (
            <div>
               <div className="div-board">
                  <div className="row">
                   {this.state.notes.filter(note => {
                    return !note.toDelete;
                    }).map(filtNote => {
                      return <Note key={filtNote.id} noteId={filtNote.id} title={filtNote.title} body={filtNote.body}  />;
                    }) }
                  </div>
               </div>
            <form action="#" onSubmit={this.addNote}>
             <div className="form-group flex-column col-sm-6">
                <label>New Title</label>
                <input id="titleVal" type="text" />
                <label>New Body</label>
                <input id="bodyVal" type="text" />
                <button className="btn btn-success add-button">Add</button>
              </div>
            </form>
             </div>
        )
    }
}

export default Board;