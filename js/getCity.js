export default async function getCity() {

	const cityValue = document.querySelector('#city').value;
	const clear = document.querySelector('.air__clear');

	clear.innerHTML = `<div class="weather__loading">
		<img src="img/loading.gif" alt="Loading...">
	</div>`

	const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityValue}&appid=adb97eafe5bc8d39d4a054c3e052514a`
	const response = await fetch(server);
	const responseResult = await response.json();
	if (response.ok) {
		let latitude = responseResult.coord.lat;
		let longitude = responseResult.coord.lon;
		return {
			lat: latitude,
			lon: longitude,
			city: cityValue,
		}
	} else {
		clear.innerHTML = responseResult.message.toUpperCase();
		clear.style.color = 'white';
	}

}