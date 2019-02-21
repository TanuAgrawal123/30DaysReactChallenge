import React from 'react'
import Header from './components/Headers'
import Footer from './components/Footer'
import MainContent from './components/maincontent'
import TodoItem from './components/todoitem'
import ContactCard from './components/Contactcards' 
import Joke from './components/joke'
import JokeComponents from './components/jokecompnent'
import './css/style.css'
function App()
{
	const Jokecomponents=JokeComponents.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)


	return (
		<div>
{Jokecomponents}
</div>
		)}

 export default App