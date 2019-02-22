import React from 'react'
import Header from './components/Headers'
import Footer from './components/Footer'
import MainContent from './components/maincontent'
import TodoItem from './components/todoitem'
import ContactCard from './components/Contactcards' 
import Joke from './components/joke'
import JokeComponents from './components/jokecompnent'
import './css/style.css'
import Product from './components/product'
import ProductData from './components/productdata'
function App()
{
	const productcomponents=ProductData.map(item => <Product key={item.id} product={item} />)


	return (
		<div>
{productcomponents}
</div>
		)}

 export default App