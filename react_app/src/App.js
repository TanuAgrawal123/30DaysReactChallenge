import React from 'react'

import TodoItem from './components/todoitem'
import TodoData from './components/tododata'
import './css/style.css'

class App extends React.Component{
	constructor()
	{super()
		this.state={name:"tanu",
		age:20}
	}
	render()
	{
		return (
			<div>
			<h1>{this.state.name}</h1>
			<h2>{this.state.age} years old</h2>
			</div>
		)
}}

 export default App
