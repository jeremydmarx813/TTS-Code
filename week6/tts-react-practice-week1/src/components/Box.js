import React, { Component } from 'react';

class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clickedCount : 0
		};
	}
	handleClick = () => {
		console.log(`clicked on box ${this.props.backgroundColor}`);
		this.setState((prevState) => {
			return {
				clickedCount : prevState.clickedCount++
			};
		});
	};
	render() {
		const { backgroundColor } = this.props;
		const { clickedCount } = this.state;
		return (
			<div
				style={{
					display         : 'flex',
					flexDirection   : 'column',
					alignItems      : 'center',
					justifyContent  : 'center',
					backgroundColor : backgroundColor,
					height          : '160px',
					width           : '175px',
					border          : '3px #000 solid',
					margin          : '10px',
					cursor          : 'pointer'
				}}
				onClick={this.handleClick}
			>
				<h1>{clickedCount}</h1>
			</div>
		);
	}
}

export default Box;
