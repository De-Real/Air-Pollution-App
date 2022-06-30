export default async function getInfo(lat, lon, city) {
	let url = new URL(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=adb97eafe5bc8d39d4a054c3e052514a`)
	try {
		let response = await fetch(url);
		let result = await response.json();
		let data = result.list[0];
		return data;
	} catch (e) {
		const clear = document.querySelector('.air__clear');
		clear.innerHTML = e.message.toUpperCase();
		clear.style.color = 'white';
	}
}
