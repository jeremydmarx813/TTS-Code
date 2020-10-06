import React from 'react';
// import moment from 'moment';
import Moment from 'react-moment';

const BBCard = (props) => {
	// moment().format()
	const { name, nickname, birthday, status, portrayed, img } = props.data;
	// const formattedDate = moment().format( birthday);

	// console.log(formattedDate);
	return (
		<div
			className="card"
			style={{
				border         : '1px solid black',
				width          : '60%',
				display        : 'flex',
				flexDirection  : 'column',
				alignItems     : 'center',
				justifyContent : 'center',
				padding        : 10
			}}
		>
			<h3>{name}</h3>
			<p style={{ textAlign: 'center' }}>
				Nickname: {nickname}
				<br />
				Birthday: {birthday === 'Unknown' ? 'Unkown' : <Moment date={birthday} />}
				<br />
				Status: {status}
				<br />
				Portrayed By: {portrayed}
			</p>
			<img src={img} height="150" width="110" alt="character profile" />
		</div>
	);
};

export default BBCard;
