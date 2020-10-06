import React, { Component } from 'react';
import BBCard from './BBCard';
import axios from 'axios';

class BBContainer extends Component {
	constructor() {
		super();
		this.state = {
			chars : []
		};
	}
	getChars = () => {
		axios.get('https://www.breakingbadapi.com/api/characters?limit=20').then((res) => {
			console.log(res);
			this.setState((prevState) => {
				return {
					chars : res.data
				};
			});
		});
	};
	componentDidMount() {
		this.getChars();
	}
	render() {
		const { chars } = this.state;
		return (
			<div
				style={{
					display       : 'flex',
					flexDirection : 'column',
					alignItems    : 'center'
				}}
			>
				{chars.map((e, i) => {
					return <BBCard data={e} key={e.char_id} />;
				})}
			</div>
		);
	}
}

export default BBContainer;
