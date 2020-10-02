import React, { Component } from 'react';
import axios from 'axios';

class Poke extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
	getPokemon = () => {
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=20').then((res) => {
			console.log(res.data.results);
		});
	};
	render() {
		return <div />;
	}
}

export default Poke;
