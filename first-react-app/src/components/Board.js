import React from "react";
import '../css/Board.css';
import Note from './Note';
import AddForm from './AddForm';
import { v4 as uuidv4 } from 'uuid';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [
              {
                id: uuidv4(),
                title: "Class Notes",
                body: "Always use constructors when extending another class"
                
              },
              {
                id: uuidv4(),
                title: "My New Address",
                body: "2001 N Lonhill Phoenix, AZ 81234"
              
              },
              {
                id: uuidv4(),
                title: "React Notes",
                body: "Everything in React is a component"
                
              }
            ]
          }
       this.addCard = this.addCard.bind(this);
       
    }

    addCard(title, body) {
     
      let newCard = {
        id: uuidv4(),
        title,
        body
      }
      if(title.length && body.length){

        this.setState(
          {
            notes: [...this.state.notes, newCard]
          }
        );
       } else {
         console.log('Need Form input for add feature to work');
       }
      }

   delNote = id => {
     this.setState({
       notes: [...this.state.notes].filter(n => n.id !== id)
     });
   }
    

    render(){
        return (
           <div>
               <div className="div-board">
                  <div className="row">
                   {this.state.notes.map(note => {
                     const { id, title, body } = note;
                    return <Note key={id} noteId={id} title={title} body={body} delNote={this.delNote} />;
                    })}
                  </div>
               </div>
              <AddForm addCard={this.addCard} />
           </div>
        )
    }
}

export default Board;