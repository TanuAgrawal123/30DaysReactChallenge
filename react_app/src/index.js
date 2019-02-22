import React, {Component} from 'react'
import ReactDOM from "react-dom"


class App extends React.Component{
	render()
	{
		return(
			<div>
			<Header username="tanuagrawal" />
			<Greating />
			</div>
			)
	}
}

class Header extends Component{
	render()
	{
		return(
		<header>
		<p>Welcome!{this.props.username}</p>
		</header>
		)
	}
}


class Greating extends React.Component{
	render()
	{
		const date=new Date()
		const hours= date.getHours()
		let timeOfDay
		if(hours<12)
		{
			timeOfDay="morning"
		}
		else if(hours>=12 && hours<17)
			timeOfDay="afternoon"
		else
			timeOfDay="night"
	
	return(
	<h2>Good {timeOfDay} to you!..sir or madam</h2>)

}}



ReactDOM.render(<App />, document.getElementById("root"))
		