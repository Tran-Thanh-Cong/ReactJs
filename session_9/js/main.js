const showtDate = () => {
	let dateStart = document.getElementById('startDate').value
	let dateEnd = document.getElementById('endDate').value
	console.log(moment(dateStart).format('DD-MM-YYYY'))
	console.log(moment(dateEnd).add(5, 'days').format('DD-MM-YYYY'))
}
showtDate()