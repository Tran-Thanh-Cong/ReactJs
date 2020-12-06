// Exercise 1
const getSumElements = () => {
	let arr = [1,2,3,4,5,6,7,8,9]
	var total = 0
	arr.forEach( sum = (element) =>{
		total += element
	})
	console.log(total)
}

// Exercise 2.1
const DOM_Inner = () => {
	document.getElementsByClassName("text")[0].innerHTML = "Hello 2"
}

// Exercise 2.2
const DOM_Color = () => {
	document.getElementById("color").style.color = "Red"
}

// Exercise 2.3
const changeContent = () => {
	document.getElementsByName("h")[0].outerHTML = "<h2 id='h_2'>Hello friend</h2>"
	document.getElementById("h_2").style.color = "Blue"
} 