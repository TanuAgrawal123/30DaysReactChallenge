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
		age:"",
		gender:"",
		destination:"",
		isVegan:"",
		isKosher:"",
		islactoseFree:""
		

	}
	this.handleChange=this.handleChange.bind(this)


}
handleChange(event){
	const {name, value, type, checked}=event.target
	type==="checkbox"?
	this.setState({[name]:checked})
	:
	this.setState({[name]:value})
	
}
render(){
	return(
		<form>
		<input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/>
		<br/>
		<input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/>
		<br/>
		<input type="text" name="age" value={this.state.age} placeholder="Age" onChange={this.handleChange}/>
		
		
		
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
<select value={this.state.destination} name="destination" onChange={this.handleChange}>
<option value="">--PLease select an option</option>
<option value="India">India</option>
<option value="germany">germany</option>
<option value="Norway">Norway</option>
</select>
<br/>
<label>Vegan</label>
<input type="checkbox" name="isVegan" checked={this.state.isVegan} onChange={this.handleChange}/>
<br/>
<label>Kosher</label>
<input type="checkbox" name="isKosher" checked={this.state.isKosher} onChange={this.handleChange}/>
<br/>
<label>lectose free</label>
<input type="checkbox" name="islactoseFree" checked={this.state.islactoseFree} onChange={this.handleChange}/>
<br/>
<h1> your Name is {this.state.firstName} {this.state.lastName}</h1>
		<h1> Your Age is {this.state.age}</h1>
<h2> You are a {this.state.gender}</h2>
<h2> Your Destination is {this.state.destination}</h2>
<br/>

<h2> Vegan {this.state.isVegan ? "yes" : "No"}</h2>
<br/>
<h2> Kosher {this.state.isKosher ? "yes" : "No"}</h2>
<br/>
<h2> Lactose free {this.state.islactoseFree ? "yes" : "No"}</h2>
		</form>

	)
	}
}

 export default App


