import React from 'react'
import FormContainer from './formcontainer'

class FormComponent extends React.Component{
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
		<FormContainer
		handleChange={this.handleChange}
		data={this.state}/>

	)
	}
}
export default FormComponent