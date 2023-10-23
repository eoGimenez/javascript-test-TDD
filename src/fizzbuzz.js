export const fizzbuzz = (number) => {
	if (typeof number !== 'number' || isNaN(number)) throw new Error('Must provide a valid number.')

	const multiplies = { 3: 'fizz', 5: 'buzz' }
	let output = ''

	Object.entries(multiplies).forEach(([multiplier, word]) => {
		if (number % multiplier === 0) output += word
	})

	return output === '' ? number : output
}
