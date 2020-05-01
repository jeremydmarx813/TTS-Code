import React from 'react';
import Book from './Book.js';

 class Bookshelf extends React.Component {
    render() {
        return (
            <div>
                <h1>Fiction</h1>
                <Book />
            </div>
        )
    }
}

export default Bookshelf;
