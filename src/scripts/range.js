export default function range() {
	const $range = document.querySelector('input[type=range]');
	const $rangeValue = document.querySelector('.range__value');
	const changeRange = () => $rangeValue.innerText = `${$range.value}%`;

	changeRange();
	$range.addEventListener('input', () => changeRange());
}