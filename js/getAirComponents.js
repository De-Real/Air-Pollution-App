export default function getAirComponents(data, component) {
	switch (component) {
		case 'no2':
			return no2Checker(data);
		case 'pm10':
			return pm10Checker(data);
		case 'pm2_5':
			console.log(data);
			return pm2_5Checker(data);
		case 'o3':
			return o3Checker(data);
	}
}



function no2Checker(value) {
	if (value < 50) return 'good'
	else if (value >= 50 && value < 100) return 'fair'
	else if (value >= 100 && value < 200) return 'moderate'
	else if (value >= 200 && value < 400) return 'poor'
	else return 'v-poor'
}

function pm10Checker(value) {
	if (value < 25) return 'good'
	else if (value >= 25 && value < 50) return 'fair'
	else if (value >= 50 && value < 90) return 'moderate'
	else if (value >= 90 && value < 180) return 'poor'
	else return 'v-poor'
}
function o3Checker(value) {
	if (value < 60) return 'good'
	else if (value >= 60 && value < 120) return 'fair'
	else if (value >= 120 && value < 1280) return 'moderate'
	else if (value >= 180 && value < 240) return 'poor'
	else return 'v-poor'
}
function pm2_5Checker(value) {
	if (value < 15) return 'good'
	else if (value >= 15 && value < 30) return 'fair'
	else if (value >= 30 && value < 55) return 'moderate'
	else if (value >= 55 && value < 110) return 'poor'
	else return 'v-poor'
}