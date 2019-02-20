import React from 'react'
import Header from './components/Headers'
import Footer from './components/Footer'
import MainContent from './components/maincontent'
import TodoItem from './components/todoitem'
import './css/style.css'
function App()
{
	return (
		<div>
<Header />
<MainContent />

<TodoItem />
<TodoItem />
<TodoItem />
<TodoItem />

<Footer />
</div>
		)

	
}
 export default App