import {NavLink} from 'react-router-dom';
import React from 'react';

export default class Nav extends React.Component{
	constructor(){
		super();
		this.state = {};
	}

	render(){
		return(
				<ul>
					
					
					<li>
						<NavLink exact activeClassName="skill" to="/skill">Skill</NavLink>
						
					</li>
					<li>
						<NavLink exact activeClassName="work" to="/work">Work</NavLink>
						
					</li>
					<li>
						<NavLink exact activeClassName="contact" to="/contact">Contact</NavLink>
						
					</li>
				</ul>
			)
	}
}

