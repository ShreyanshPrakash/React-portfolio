import React from 'react';
import '../Css/home.css';



export default class Homee extends React.Component{
	constructor(){
		super();
		this.state = {};
	}

	componentWillMount(){
		let ele = document.getElementById("home");
		ele.parentNode.removeChild(ele);
	}
	render(){
		return(
				<div id="home">
					<div id="pro_pic">
						<img src="../res/me.jpg" alt="pro_pic"/>
					</div>
					<div id="about_me">
						<h2>Hi,</h2>
						<h3>My name is John Doe second</h3><br/>
						<p>I am a web developer,This is demo text
							i just need to write alot of text so that
							i can see how it will look on the prototype</p>
					</div>
					
				</div>
			)
	}
}