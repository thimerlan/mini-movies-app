import React from 'react';
import './card.scss'

function Card({name, img, date , prod, price,}) {

	return(
		<>
			<div className="card">
				<div className="card-top">
					<div className="card-title">
						{name}
					</div>
				</div>
				<div className="card-img">
					<img src={img} alt="" />
				</div>
				<div className="card-footer">
					<div className="premiere-date">
						{date}
					</div>
					<div className="producer">
					{prod}
					</div>
					<div className="box-office">
					{price}
					</div>
				</div>
			</div>
		</>
	)
}
export default Card;