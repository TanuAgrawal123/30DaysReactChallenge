import React from 'react'

import TodoItem from './components/todoitem'
import TodoData from './components/tododata'
import Conditional from './components/conditional'
import './css/style.css'

/*class App extends React.Component{
constructor()
	{super()
		this.state={
			todos:TodoData
		}
     this.handleChange=this.handleChange.bind(this)
	}
	handleChange(id){
		this.setState(prevState =>{
			const updateTodos=prevState.todos.map(todo =>{
				if(todo.id===id){
					todo.completed= !todo.completed
				}
			
			
		        return todo 
		    })
		     return {
		     	todos:updateTodos}
		})
	}


	render()
	{	
const todocomponents=this.state.todos.map(item => <TodoItem key={item.id} items={item} handleChange={this.handleChange} />)
	return (
		<div>
		{todocomponents}
	</div>)
}
}
*/
class App extends React.Component{
constructor(){
	super()
	this.state={
		loading:false,
		character:{}

	}

}
componentDidMount(){
	this.setState({loading:true})
	fetch("https://swapi.co/api/people/1")
	.then(response => response.json())
	.then(data=>{
		this.setState({loading:false,
			character:data})

	})
}
render(){
	const text=this.state.loading ? "loading...." :this.state.character.name
	return(
		<div>
		<h1>{text}</h1>
		</div>)
}
}

 export default App


