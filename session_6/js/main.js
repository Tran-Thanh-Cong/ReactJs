Sum = () => {
	let a=100
	let b=200
	let c=a+b
	console.log(c)
}
Sum()
getArray = () => {
	let arr = [1,2,3,4,5,6,7,8,9]
	console.log("length: "+" "+arr.length)
	console.log(arr[6])
	arr.splice(5,1)
	console.log(arr)
}
getArray()

arrMap = () => {
	let arr = [1,2,3,4,5,6,7,8,9]
	const newarr=arr.map(x=>x*3)
	console.log(newarr)
}
arrMap()