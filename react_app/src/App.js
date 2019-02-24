import React from 'react'

import TodoItem from './components/todoitem'
import TodoData from './components/tododata'
import './css/style.css'

class App extends React.Component{
	constructor()
	{super()
		this.state={
			todos:TodoData
		}
	}
	render()
	{	
const todocomponents=this.state.todos.map(item => <TodoItem key={item.id} items={item} />)
	return (
		<div>
		{todocomponents}
	</div>)
}
}
 class App extends React.Component{
	constructor()
	{
		super()
		this.state={
			count:0
		}
		this.handleclick=this.handleclick.bind(this)

		}
		handleclick()

		{
			this.setState(prevState => {return {count:prevState.count +1}})
		}
		render(){
			
			return(
				<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.handleclick}>Change!</button>

				</div>
				)
		}
	}*/
 export default App

