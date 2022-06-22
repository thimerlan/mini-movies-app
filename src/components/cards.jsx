import React from 'react'
import Card from './card';
import movies from '../components/moviesInfo'
import './cards.scss'
function Cards() {
	return(
		<div className="movies-cards">
			<Card
			name={movies[0].name}
			img={movies[0].img}
			date={movies[0].date}
			prod={movies[0].producer}
			price={movies[0]['box office']}
			/>
			<Card
			name={movies[2].name}
			img={movies[2].img}
			date={movies[2].date}
			prod={movies[2].producer}
			price={movies[2]['box office']}
			/>
			<Card
			name={movies[3].name}
			img={movies[3].img}
			date={movies[3].date}
			prod={movies[3].producer}
			price={movies[3]['box office']}
			/>
			<Card
			name={movies[4].name}
			img={movies[4].img}
			date={movies[4].date}
			prod={movies[4].producer}
			price={movies[4]['box office']}
			/>
			<Card
			name={movies[5].name}
			img={movies[5].img}
			date={movies[5].date}
			prod={movies[5].producer}
			price={movies[5]['box office']}
			/>
			<Card
			name={movies[6].name}
			img={movies[6].img}
			date={movies[6].date}
			prod={movies[6].producer}
			price={movies[6]['box office']}
			/>
			<Card
			name={movies[7].name}
			img={movies[7].img}
			date={movies[7].date}
			prod={movies[7].producer}
			price={movies[7]['box office']}
			/>
				<Card
			name={movies[8].name}
			img={movies[8].img}
			date={movies[8].date}
			prod={movies[8].producer}
			price={movies[8]['box office']}
			/>
		</div>
	)
}

export default Cards;