import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
	// este test ya es redundante
	// it('Should be a function', () => {
	// 	expect(typeof fizzbuzz).toBe('function')
	// })
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
	it('Should return "2" if number provided is "2"', () => {
		expect(fizzbuzz(2)).toBe(2)
	})
	it('Should return "fizz" if number provided is "3"', () => {
		expect(fizzbuzz(3)).toBe('fizz')
	})
	it('Should return "fizz" if number provided is multiple of "3"', () => {
		expect(fizzbuzz(6)).toBe('fizz')
		expect(fizzbuzz(9)).toBe('fizz')
		expect(fizzbuzz(12)).toBe('fizz')
	})
	it('Should return "buzz" if number provided is multiple of "5"', () => {
		expect(fizzbuzz(5)).toBe('buzz')
	})
	it('Should return "fizzbuzz" if number provided is multiple of 15', () => {
		expect(fizzbuzz(15)).toBe('fizzbuzz')
	})
})
