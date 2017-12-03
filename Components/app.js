import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './home.js';
import Homee from './home2.js';
import Nav from './nav.js';
import '../css/app.css';


class App extends React.Component{
	constructor(){
		super();
		this.state = {};
	}

	render(){
		return(
				<BrowserRouter>
					<div>
						<Nav/>
						<Route path="/" component={Home}/>
						<Route path="/home" component={Home}/>
						<Route path="/skill" component={Homee}/>
						
					</div>
				</BrowserRouter>
			)
	}
}

window.onload = ()=>{
	ReactDOM.render(<App/>,document.getElementById('app'));
}