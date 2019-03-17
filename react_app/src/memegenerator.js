import React from 'react'
import './css/style.css'


class MemeGenerator extends React.Component
{
constructor(){
	super()
	this.state={
		toptext:"",
		bottomtext:"",
		randomimg:"http://i.imgflip.com/1bij.jpg",
		allmemeimg:[]

	}
	this.handleChange=this.handleChange.bind(this)
	this.handleSubmit=this.handleSubmit.bind(this)
}
componentDidMount(){
	fetch("https://api.imgflip.com/get_memes")
	.then(response=>response.json())
	.then(response=>{
		const {memes}=response.data
		this.setState({allmemeimg:memes})
	})

}
handleChange(event){
	const {name, value}= event.target
    this.setState({[name]:value})
}
handleSubmit(event){
	event.preventDefault()
	const randnum=Math.floor(Math.random()*this.state.allmemeimg.length)
	const randMemeImg=this.state.allmemeimg[randnum].url
	this.setState({randomimg:randMemeImg})
}
render()
{
	return(
		<div>
		<form className="meme-form" onSubmit={this.handleSubmit}>
		<input type="text" name="toptext" placeholder="Top Text" value={this.state.toptext}
		onChange={this.handleChange} className="input1"/>
		<input type="text" name="bottomtext" placeholder="Bottom Text" value={this.state.bottomtext}
		onChange={this.handleChange} className="input2"/>
		<button>GEN</button>
		<br/>
		</form>
		
		<div className="Meme">
		<br/>
		<img src={this.state.randomimg}
		/>
		<br/>
		<h2 className="top">{this.state.toptext}</h2>
		<h2 className="bottom">{this.state.bottomtext}</h2>
		</div>
		</div>
		)
}
}
export default MemeGenerator