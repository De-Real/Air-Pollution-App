export default function openAdditionalInfo() {

	const btn = document.querySelector('.air__more');
	const openingBlock = document.querySelector('.air__more-open');
	btn.addEventListener('click', function () {
		console.log('yes');
		openingBlock.classList.toggle('_active');
	})
	
}
