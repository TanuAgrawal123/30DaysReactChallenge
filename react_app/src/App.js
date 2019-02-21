import React from 'react'
import Header from './components/Headers'
import Footer from './components/Footer'
import MainContent from './components/maincontent'
import TodoItem from './components/todoitem'
import ContactCard from './components/Contactcards' 
import './css/style.css'
function App()
{
	return (
		<div className="contacts">

<ContactCard
contact={{name:"Mr.Whiskerson", imageUrl:"https://placekitten.com/300/200",
 phone:"(212) 512 879", email:"mrwhiskerton@gmail.com"}} />
<ContactCard
contact={{name:"Fluffykins", imageUrl:"https://placekitten.com/400/200",
 phone:"(212) 678 879", email:"fluffykinn@gmail.com"}} />
<ContactCard
contact={{name:"destroyer", imageUrl:"https://placekitten.com/100/200",
 phone:"(212) 876 879", email:"destroyer@gmail.com"}} />
<ContactCard
contact={{name:"Felix", imageUrl:"https://placekitten.com/300/200",
 phone:"(212) 512 123", email:"felix@gmail.com"}} />

</div>
		)

	
}
 export default App