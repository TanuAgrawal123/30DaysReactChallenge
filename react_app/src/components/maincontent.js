import React from 'react'
function MainContent(){
	const firstname="Tanu"
	const lastname="agrawal"
	const date=new Date(2019,2,20,10)
	const Hours=date.getHours()
	let timeOfDay
	const styles={
		
		 backgroundColor:'#FF2D00',
		 fontSize:20,
		 textAlign:'center'
		}
	if (Hours<12)
		{timeOfDay="morning"
	styles.color='white'}
	else if(Hours>=12 && Hours<17)
		{timeOfDay="afternoon"
	styles.color='yellow'
}
	else
		{timeOfDay="night"
	styles.color='blue'
}

	return (
		<main style={styles}>hello {` ${firstname} ${lastname} `} current time is {timeOfDay } </main>
		)

}
export default MainContent