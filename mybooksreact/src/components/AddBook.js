import React from 'react'

 class AddBook extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <form action="#" onSubmit={this.props.addBook}>
                <div className="form-group row">
                   <label for="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                       <input type="text" className="form-control" id="title" />
                     </div>
                </div>
                <div className="form-group row">
                   <label for="author" className="col-sm-2 col-form-label">Author</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="author" />
                   </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Year</label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" id="inputPassword3" />
                     </div>
                </div>
                  <fieldset className="form-group">
                     <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Genre</legend>
                        <div className="col-sm-10">
                          <div className="form-check">
                              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                              <label className="form-check-label" for="gridRadios1">Fiction</label>
                          </div>
                      <div className="form-check">
                     <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                     <label className="form-check-label" for="gridRadios2">History</label>
                     </div>
                  <div className="form-check disabled">
                   <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                    <label className="form-check-label" for="gridRadios3" >Music 
                   </label>
                   </div>
                   </div>
                  </div>
                 </fieldset>
                <div className="form-group row">
               <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">Add Book!</button>
              </div>
              </div>
             </form>
        )
    }
}

export default AddBook;
