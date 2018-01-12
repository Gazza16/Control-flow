let roomMate = 'Hayley'

if (roomMate === 'Hayley') {
	console.log('you may enter the house!')
}

else {console.log('You may not enter!')}

	

let carMake = 'Ferrari'
let hasKeys = false

if (carMake === 'Ferrari' && hasKeys) {
	console.log('Let\'s ride')
}

else if (carMake === 'Ferrari' || hasKeys) {
	console.log('You have a Ferrari but can\'t drive it')
}

else if (carMake === 'other' || !hasKeys) {
	console.log('You have random keys. You can\'t drive the car')
}

else (console.log('Don\'t know'))