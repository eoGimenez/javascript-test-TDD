import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { afterEach, describe, expect, it } from 'vitest'

import { Calculator, equalSign, numbers, operations } from '../src/Calculator'

describe('Calculator', () => {
	afterEach(cleanup)
	it('Calculator should render', () => {
		render(<Calculator />)
	})

	it('Should render title correctly', () => {
		render(<Calculator />)

		screen.getByText('Calculator')
	})
	it('Should render numbers', () => {
		render(<Calculator />)

		numbers.forEach((num) => screen.getByText(num))
	})

	it('Should render 4 rows', () => {
		render(<Calculator />)

		const rows = screen.getAllByRole('row')
		expect(rows.length).toBe(4)
	})

	it('Should render operations', () => {
		render(<Calculator />)

		operations.forEach((operation) => {
			screen.getByText(operation)
		})
	})

	it('Shoudl render "="', () => {
		render(<Calculator />)

		screen.getByText('=')
	})

	it('Should render an input', () => {
		render(<Calculator />)

		screen.getByRole('textbox')
	})

	it('Should user input after clicking a number', () => {
		render(<Calculator />)

		const one = screen.getByText('1')
		fireEvent.click(one)

		const input = screen.getByRole('textbox')
		expect(input.value).toBe('1')
	})

	it('Should user input after clicking several numbers', () => {
		render(<Calculator />)

		const one = screen.getByText('1')
		fireEvent.click(one)

		const two = screen.getByText('2')
		fireEvent.click(two)

		const tree = screen.getByText('3')
		fireEvent.click(tree)

		const input = screen.getByRole('textbox')
		expect(input.value).toBe('123')
	})

	it('Should show user input  after clicking numbers and operations', () => {
		render(<Calculator />)

		const one = screen.getByText('1')
		fireEvent.click(one)

		const plus = screen.getByText('+')
		fireEvent.click(plus)
		fireEvent.click(one)

		const input = screen.getByRole('textbox')
		expect(input.value).toBe('1+1')
	})

	it('Should calculate based on user input and show the calculation', () => {
		render(<Calculator />)

		const one = screen.getByText('1')
		fireEvent.click(one)

		const plus = screen.getByText('+')
		fireEvent.click(plus)
		fireEvent.click(one)

		const equal = screen.getByText(equalSign)
		fireEvent.click(equal)

		const input = screen.getByRole('textbox')
		expect(input.value).toBe('2')
	})
})
