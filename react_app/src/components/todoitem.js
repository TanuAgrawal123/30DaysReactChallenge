import React from 'react'


function TodoItem(props){
	const Completestyle={
		fontStyle: "italic",
		color:"grey",
		textDecoration:"line-through"
	}
	return(
<div className="todo_item">
<input type="checkbox" checked={props.items.completed} onChange={() => props.handleChange(props.items.id)} />

<p style={props.items.completed ? Completestyle: null}>{props.items.text}</p>
<hr/>

</div>
		)
}






export default TodoItem