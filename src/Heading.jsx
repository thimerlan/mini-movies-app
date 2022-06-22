import React from 'react';

function Heading() {
	const date = new Date;
	let CurentHours = date.getHours();
	// console.log(date);
	console.log(CurentHours);

	let hi = '';

	let Colors = {
		color: ''
	}

	if(CurentHours < 12){
		hi = 'GOOD FUCKING MORNING'
		Colors.color = '#333'
	}else if(CurentHours < 1){
		hi = 'GOOD FUCKING AFTORNOON'
		Colors.color = '#4F1A'
	}else{
		hi = 'FUCKING NIGHTS'
		Colors.color = '#773'
	}

	return(
		<div className="heading">
			<h1 style={Colors}>{hi}</h1>
		</div>
	)
}

export default Heading;