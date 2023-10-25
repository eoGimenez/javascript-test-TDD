import { describe, expect, it } from 'vitest'
import { canReConfigure } from '../src/canConfigure'

describe('canReConfigure()', () => {
	it('Should be a function', () => {
		expect(canReConfigure).toBeTypeOf('function')
	})

	it('Should throw if first parameter is missing', () => {
		expect(() => canReConfigure()).toThrow()
	})

	it('Should throw if first parameter is not a string ', () => {
		expect(() => canReConfigure(2)).toThrow()
	})

	it('Should throw if second parameter is not a string ', () => {
		expect(() => canReConfigure('AKA', 2)).toThrow()
	})

	it('Should return a boolean', () => {
		expect(canReConfigure('abc', 'fgh')).toBeTypeOf('boolean')
	})

	it('Should return "false" if string provided have different length', () => {
		expect(canReConfigure('abc', 'de')).toBe(false)
	})

	it('Should return "false" if string provided have different length event with same unique letters', () => {
		expect(canReConfigure('aac', 'ac')).toBe(false)
	})

	it('Should return "false" if string provided have diferent numbers of unique letters', () => {
		expect(canReConfigure('abc', 'upp')).toBe(false)
	})

	it('Should return "false" if strings have different order of transformation', () => {
		expect(canReConfigure('xbox', 'xxbo')).toBe(false)
	})
})
