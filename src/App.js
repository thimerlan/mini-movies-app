
import { useState } from 'react';
import './App.css';
import Cards from './components/cards';
import Section from './components/section';
import Heading from './Heading';

function App() {

	const Header = () =>{
		return(
	<div className="header" style={{width: '100%', height: '10vh', background:'yellow'}}>
		<h1 style={{fontWeight: '700'}}>
		Keeper App
		</h1>
	</div>
		)
	}
	
	const Note = () =>{
		return(
			<div className="notes">
				<div className="note">
				<div className="titie">
					<h3>
						I AM TITLE FUCKING
					</h3>
				</div>
				<p className='descr'>
						I AM WEB DEV SOON I TO BE FRONT-REACT-DEVELOPER
					</p>
			</div>lo
			</div>
		)
	}

	const Footer = () =>{
			// Data.getFullYear
			// function NewData(){
			// let Data = new Date().toLocaleTimeString()
			// setInterval(Data, 1000)
			// }
	return(
		<div className="footer">
			<h5 style={{letterSpacing: '0.21em'}}>
			 Copyright Reserved &copy; {new Date().toLocaleTimeString()}
			</h5>
		</div>
	)
}




  return (
	

	
    <div className="App">
		{/* <Header/>
		<Heading/> */}
		<Section/>
		{/* <Note/> */}
		<Footer/>
		{/* <Section/> */}
    </div>
  );
}

export default App;


// function CurrentTime() {
// 	const Times = (
// 		<h1>
// 			TIME IS IT {new Date().toLocaleTimeString()}
// 		</h1>
// 	)
// 	root.render(Times)
// }
// setInterval(CurrentTime, 1000)
