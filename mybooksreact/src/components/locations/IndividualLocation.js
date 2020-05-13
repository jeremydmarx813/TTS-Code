import React from 'react';
import { Link } from 'react-router-dom';


class IndividualLocation extends React.Component {
    render() {
        return (
        <Link to="/" style={linkStyle}>
            <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
              <h1 className="display-4">Suprise!</h1>
              <p className="lead">Click Me to get back to Library</p>
              <img src="https://live.staticflickr.com/8191/8126563812_286ba506f7_b.jpg" width="100%" alt="pic of puppy bunny"/>
            </div>
          </div>
        </Link>
        )
    }
}

const linkStyle = {
    color: '#000000',
    textDecoration: 'none',
    cursor: 'auto'
}

export default IndividualLocation;