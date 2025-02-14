export default function randomNumber(min, max) {
	if (
		typeof min !== 'number' ||
		isNaN(min) ||
		typeof max !== 'number' ||
		isNaN(max)
	) {
		throw new Error('Given number must be a number!');
	} else if (min > max) {
		throw new Error('Min value cannot be greater than max value!');
	} else {
		return Math.random() * (max - min) + min;
	}
}
