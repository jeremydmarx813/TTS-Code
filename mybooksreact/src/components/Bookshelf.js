import React from 'react';
import Book from './Book.js';
import EasterBunny from './locations/EasterBunny';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


 class Bookshelf extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           books: this.props.books
        }
    }

    componentWillUnmount() {
        if (this.updateTimer) {
          clearTimeout(this.updateTimer);
        }
      }
    
      updateAndNotify = () => {
        if (this.updateTimer) return;
        this.setState({ books: this.props.books });
        this.updateTimer = setTimeout(() => {
          this.updateTimer = null;
        }, 1000);
      }

      componentDidUpdate(prevProps) {
        if (prevProps.books.length !== this.props.books.length) {
          this.updateAndNotify();
        }
      }

    delBook = id => {
       this.setState({ books: [...this.state.books].filter(b => b.id !== id)});
    }
    
    render() {
        const { genre } = this.props;
        return (
            <div className="text-center bg-info">
                <h2>{genre}</h2>
                {this.state.books.map(b => {
                if(b.title === 'Redwall'){
                  return (
                    <Link to="easter-bunny-puppy" style={linkStyle}>
                       <Book key={b.id} book={b} delBook={this.delBook}/>
                    </Link>
                  )
                } else {
                  return <Book key={b.id} book={b} delBook={this.delBook}/>;
                }
                } 
                )}
                
            </div>
        )
    }
}

const linkStyle = {
  color: '#000000',
  textDecoration: 'none'
}

Bookshelf.propTypes = {
   books: PropTypes.array.isRequired,
   genre: PropTypes.string.isRequired
}

export default Bookshelf;
