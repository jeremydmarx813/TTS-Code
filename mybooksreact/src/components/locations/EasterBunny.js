import React from 'react';
import { Link } from 'react-router-dom';


class EasterBunny extends React.Component {
    render() {
        return (
        <Link to="/" style={linkStyle}>
            <div class="jumbotron jumbotron-fluid text-center">
            <div class="container">
              <h1 class="display-4">Suprise!</h1>
              <p class="lead">Click Me to get back to Library</p>
              <img src="https://live.staticflickr.com/8191/8126563812_286ba506f7_b.jpg" width="100%"/>
            </div>
          </div>
        </Link>
        )
    }
}

const linkStyle = {
    color: '#000000',
    textDecoration: 'none'
}

export default EasterBunny;