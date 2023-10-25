import { describe, expect, it } from 'vitest'

const canReConfigure = (from, to) => {
	// if (from === undefined) throw new Error('from is requires') << cuando checkeamos si es una string, automaticamente checkea si no es undefined
	if (typeof from !== 'string') throw new Error('Parameter "from" must be a string')
	if (typeof to !== 'string') throw new Error('Parameter "to" must be a string')
	if (from.length !== to.length) return false
	const hasSameUniqueLetter = new Set(from).size === new Set(to).size
	if (!hasSameUniqueLetter) return false
  
	return true
}

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
	it('Should return "false" if string provided have diferent numbers of unique letters', () => {
		expect(canReConfigure('abc', 'upp')).toBe(false)
	})
})
