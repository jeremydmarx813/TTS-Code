import React from 'react'

class AddForm extends React.Component {
   constructor(props){
       super(props);
       this.state = {
          titleVal: '',
          bodyVal: ''
       };
   }

   formChange = e => {
       this.setState(
           { [e.target.name]: e.target.value }
       )
   }

   addNote = e => {
       
           e.preventDefault();
           this.props.addCard(this.state.titleVal, this.state.bodyVal);
           this.setState( { titleVal: '', bodyVal: ''} );
       
   }

    render() {
        return (
            <form action="#" onSubmit={this.addNote} className="flex-column">
                   <div className="form-group row col-sm-6">
                      <label>New Title</label>
                      <input name="titleVal" type="text" value={this.state.titleVal} onChange={this.formChange}/>
                    </div>
                    <div className="form-group row">
                      <label>New Body</label>
                      <input name="bodyVal" type="text" value={this.state.bodyVal} onChange={this.formChange}/>
                    </div>
                 <button className="btn btn-success add-button">Add</button>
            </form>
        )
    }
}

export default AddForm;
