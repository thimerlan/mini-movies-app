import React from 'react'
import Cards from './cards';
function Section() {

	return(
		<div className="section" style={{width: '90%', margin:'140px' , maxWidth: '1300px', margin: '0 auto'}}>
			<div className="top" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
				<h2 className="title">
					I AM COOL DEVELOPER'
				</h2>
				<div className="desr" style={{margin: "30px"}}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</div>
			</div>
		<Cards/>
		</div>
	)
}

export default Section;