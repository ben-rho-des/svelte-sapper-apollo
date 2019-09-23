const colors  = {
	'--some-var': 'red',
	'--other-var': 'green'
}

const units  = {
	'--some-unit': '20px'
}

const theme = {
	...colors,
	...units
}

export default theme;
