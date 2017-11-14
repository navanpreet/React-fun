import React, {Component} from 'react';

class HobbyList extends Component{
	render(){
		const hobbies = ['Sleeping', 'Eating', 'Pooping'];
		return(
			<ul>
				{hobbies.map((hobby, index) => {
					return <li key={index} style={{fontSize: '1.5em'}}>{hobby}</li>
				})}
			</ul>
		);
	}
}

export default HobbyList;