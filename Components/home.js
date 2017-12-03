import React from 'react';
import ReactDOM from 'react-dom';
import '../Css/home.css';



export default class Home extends React.Component{
	constructor(){
		super();
		this.state = {};
	}

	render(){
		return(
				<div id="home">
					<div id="pro_pic">
						<img src="../res/me.jpg" alt="pro_pic"/>
					</div>
					<div id="about_me">
						<h2>Hi,</h2>
						<h3>My name is John Doe</h3><br/>
						<p>I am a web developer,This is demo text
							i just need to write alot of text so that
							i can see how it will look on the prototype</p>
					</div>
					
				</div>
			)
	}
}

