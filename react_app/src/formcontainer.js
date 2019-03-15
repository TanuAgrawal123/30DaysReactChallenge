import React from 'react'

function FormContainer(props)
{
	
		return(
			
<form>
		<input type="text" name="firstName" value={props.data.firstName} placeholder="First Name" onChange={props.handleChange}/>
		<br/>
		<input type="text" name="lastName" value={props.data.lastName} placeholder="Last Name" onChange={props.handleChange}/>
		<br/>
		<input type="text" name="age" value={props.data.age} placeholder="Age" onChange={props.handleChange}/>
		
		
		
<br/>
<label>
<input type="radio" name="gender" value="female" checked={props.data.gender==="female"}onChange={props.handleChange}/>
female
<br/>

</label>
<label>
<input type="radio" name="gender" value="male" checked={props.data.gender==="male"} onChange={props.handleChange}/>male

</label>
<br/>
<select value={props.data.destination} name="destination" onChange={props.handleChange}>
<option value="">--PLease select an option</option>
<option value="India">India</option>
<option value="germany">germany</option>
<option value="Norway">Norway</option>
</select>
<br/>
<label>Vegan</label>
<input type="checkbox" name="isVegan" checked={props.data.isVegan} onChange={props.handleChange}/>
<br/>
<label>Kosher</label>
<input type="checkbox" name="isKosher" checked={props.data.isKosher} onChange={props.handleChange}/>
<br/>
<label>lectose free</label>
<input type="checkbox" name="islactoseFree" checked={props.data.islactoseFree} onChange={props.handleChange}/>
<br/>
<h1> your Name is {props.data.firstName} {props.data.lastName}</h1>
		<h1> Your Age is {props.data.age}</h1>
<h2> You are a {props.data.gender}</h2>
<h2> Your Destination is {props.data.destination}</h2>
<br/>

<h2> Vegan {props.data.isVegan ? "yes" : "No"}</h2>
<br/>
<h2> Kosher {props.data.isKosher ? "yes" : "No"}</h2>
<br/>
<h2> Lactose free {props.data.islactoseFree ? "yes" : "No"}</h2>
		</form>
		
)}
export default FormContainer