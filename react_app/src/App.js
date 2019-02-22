import React from 'react'

import TodoItem from './components/todoitem'
import TodoData from './components/tododata'
import './css/style.css'

class App extends React.Component{
	constructor()
	{super()
		this.state={isLogedin:false
			}


		}
	
	render()
	{let wordDisplay
		if (!this.state.isLogedin)
			wordDisplay="out"
		else
			wordDisplay="in"
		return (
			<div>
			<h1>You Are Currently loged {wordDisplay}</h1>
			
			</div>
		)
}}

 export default App
