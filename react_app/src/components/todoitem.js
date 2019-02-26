import React from 'react'


function TodoItem(props){
	return(
<div className="todo_item">
<input type="checkbox" checked={props.items.completed} onChange={() => props.handleChange(props.items.id)} />
<h2>{props.items.text}</h2>
<hr/>


</div>
		)
}






export default TodoItem