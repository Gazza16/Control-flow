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



//Using switch and case instead of else/if statements
let colour = 'nay'

switch (colour){
	case 'orange':
	console.log('Tim Roth');
	break;

	case 'white':
	console.log('Harvey Keitel')
	break;

	case 'blue':
	console.log('Eddie Bunker')
	break;

	case 'blonde':
	console.log('Michael Madsen')
	break;

	default: 
	console.log('Director')
	break;

}















