export  default function getAirRate(data) {
	let air = document.querySelector('#air');
	air.className = 'air';
	switch (data.main.aqi) {
		case 1:
			air.classList.add('good');
			return {
				quality: 'Good',
				color: 'good'
			};
		case 2:
			air.classList.add('fair');
			return {
				quality: 'Fair',
				color: 'fair'
			};
		case 3:
			air.classList.add('moderate');
			return {
				quality: 'Moderate',
				color: 'moderate'
			};
		case 4:
			air.classList.add('poor');
			return {
				quality: 'Poor',
				color: 'poor'
			};
		case 5:
			air.classList.add('v-poor');
			return {
				quality: 'Very poor',
				color: 'v-poor'
			};
	}

}