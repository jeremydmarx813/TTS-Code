import React from "react";
import '../css/Board.css';
import Note from './Note.js';

class Board extends React.Component {
    constructor(){
        super();
        this.state = {
            notes: [
              {
                title: "Class Notes",
                body: "Always use constructors when extending another class"
              },
              {
                title: "My New Address",
                body: "2001 N Lonhill Phoenix, AZ 81234"
              },
              {
                title: "React Notes",
                body: "Everything in React is a component"
              }
            ]
          }
    }

    addNote(e) {
      let titleToAdd = e.target.querySelector('#titleVal').value;
        let bodyToAdd = e.target.querySelector('#bodyVal').value;
        
        this.state.notes.push(
          {
            title: titleToAdd,
            body: bodyToAdd
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
                   {this.state.notes.map(note => {
                    return <Note title={note.title} body={note.body} />;
                    })}
                  </div>
               </div>
            <form action="#" onSubmit={this.addNote.bind(this)}>
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