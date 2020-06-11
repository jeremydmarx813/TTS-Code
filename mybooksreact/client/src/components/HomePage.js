import React from 'react';
import AddBook from './AddBook';
import AllGenres from './AllGenres';


const HomePage = () => {
    return (
        <React.Fragment>
            <AddBook />
            <AllGenres />
        </React.Fragment>
    )
}

export default HomePage;
