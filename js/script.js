'use sctrict'

//API links was taken here: https://openweathermap.org/api and was used for educational purposes;

import openAdditionalInfo from "./openAdditional.js";

import getAirRate from "./getRate.js";

//get city name by latitude and longitude
import getCity from "./getCity.js";

//get city air rate by using info from function above
import getInfo from "./getInfo.js";

import getAirComponents from "./getAirComponents.js";


//add functionality to the 'See more';
openAdditionalInfo();


const rateBlock = document.querySelector('.air__rate');
if (rateBlock.innerHTML == 'Unknown') {
	rateBlock.insertAdjacentHTML('beforeend', '<div class="unknown-red"> Click the search to find info about city </div>')
}

//display found info about city
function displayInfo(data) {
	const clear = document.querySelector('.air__clear');
	clear.innerHTML = `
	<div class="air__rate ${getAirRate(data).color} ">
		${getAirRate(data).quality}
	</div>
	<div class="air__more">
		See details
	</div>
	<div class="air__more-open">
		<div class="air__no2 ${getAirComponents(data.components.no2, 'no2')}">NO<sub>2</sub>: ${data.components.no2}</div>
		<div class="air__pm10 ${getAirComponents(data.components.pm10, 'pm10')}"> PM <sub>10</sub >: ${data.components.pm10}</div>
		<div class="air__o3 ${getAirComponents(data.components.pm10, 'o3')}">O<sub>3</sub>: ${data.components.o3}</div>
		<div class="air__pm25 ${getAirComponents(data.components.pm2_5, 'pm2_5')}">PM<sub>25</sub>: ${data.components.pm2_5}</div>
	</div > `
	openAdditionalInfo();
}

//add possibility to search by clicking mouse button
const searchBtn = document.querySelector('.air__search-btn');
searchBtn.addEventListener('click', () => {
	getCity().then((data) => {
		let { lat, lon, city } = data
		getInfo(lat, lon, city).then(
			(data) => displayInfo(data)
		)
	});
});

//add possibility to search by pressing 'Enter'
window.addEventListener('keypress', (e) => {
	if (e.key === 'Enter' && document.querySelector('#city').value !== '') {
		getCity().then((data) => {
			let { lat, lon, city } = data
			getInfo(lat, lon, city).then(
				(data) => displayInfo(data)
			)
		});
	}
});