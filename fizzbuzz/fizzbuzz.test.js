import { describe, expect, it } from 'vitest'

const fizzbuzz = (number) => {
	if (typeof number !== 'number' || isNaN(number)) throw new Error('Must provide a valid number.')

	return 1
}

describe('fizzbuzz', () => {
	it('Should be a function', () => {
		expect(typeof fizzbuzz).toBe('function')
	})
	it('Should throw if not number is provided as parameter', () => {
		expect(() => fizzbuzz()).toThrow()
	})
	it('Should throw a specific error message if not number is provided as parameter', () => {
		expect(() => fizzbuzz()).toThrow(/Must provide a valid number./)
	})
	it('Should throw a specific error message if NaN is provided', () => {
		expect(() => fizzbuzz(NaN)).toThrow(/Must provide a valid number./)
	})
	it('Should return "1" if number provided is "1"', () => {
		expect(fizzbuzz(1)).toBe(1)
	})
})
