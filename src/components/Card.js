// import React, {Component} from 'react';

// class Card extends Component{
// 	render(){
// 		return(
// 			<div className='f1 tc'>
// 				<h1>Hello World!</h1>
// 				<p>{this.props.greetings}</p>
// 			</div>
// 		);
// 	}
// }
const Card = (props) =>{
	const {id,name,email} = props;
	return(
		<div className='tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5 ba b--green'>
			<img alt='robots' src={`https://robohash.org/${id}?5x5`} width="250" height="200"/>
			<div className='white'>
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;