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
		firstName:"",
		lastName:"",
		isfriendly:false,
		gender:"",
		favColor:"blue"

	}
	this.handleChange=this.handleChange.bind(this)


}
handleChange(event){
	const {name, value, type, checked}=event.target
	type=="checkbox"? this.setState({[name]:checked}) :this.setState({[name]:value})
	
}
render(){
	return(
		<form>
		<input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/>
		<br/>
		<input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/>
		<h1>{this.state.firstName} {this.state.lastName}</h1>
		<textarea
		value={"some default value"} onChange={this.handleChange}/>
<br/>
<label>
<input type="checkbox" name="isfriendly" checked={this.state.isfriendly} onChange={this.handleChange}/>
<h3>is Friendly?</h3>

</label>
<br/>
<label>
<input type="radio" name="gender" value="female" checked={this.state.gender==="female"}onChange={this.handleChange}/>
female
<br/>

</label>
<label>
<input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange}/>male

</label>
<br/>
<label>Favourite color</label>
<select name="favColor" value={this.state.favColor} onChange={this.handleChange}>
<option value="blue">Blue</option>
<option value="green">Green</option>
<option value="red">Red</option>
</select>
<h2> You are a {this.state.gender}</h2>
<h2> Your Favourite color is {this.state.favColor}</h2>
		</form>

	)
	}
}

 export default App


