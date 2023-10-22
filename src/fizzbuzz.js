export const fizzbuzz = (number) => {
	if (typeof number !== 'number' || isNaN(number)) throw new Error('Must provide a valid number.')

	if (number % 15 === 0) return 'fizzbuzz'
	if (number % 3 === 0) return 'fizz'
	if (number % 5 === 0) return 'buzz'

	return number
}
