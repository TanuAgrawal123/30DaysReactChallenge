import React from 'react'

import TodoItem from './components/todoitem'
import TodoData from './components/tododata'
import './css/style.css'

function App()
{const todocomponents=TodoData.map(item => <TodoItem key={item.id} items={item} />)
	return (
		<div>
		{todocomponents}
	</div>)
}
 export default App