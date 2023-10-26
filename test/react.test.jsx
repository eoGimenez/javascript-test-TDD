import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'
import { afterEach, describe, expect, it } from 'vitest'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

const operations = ['+', '-', '*', '/']

const equalSign = '='

const Calculator = () => {
	const [value, setValue] = useState('')

	const createHandlerNum = (num) => () => {
		setValue(value.concat(num))
	}

	return (
		<section>
			<h1>Calculator</h1>
			<input value={value} readOnly />
			<div role='grid'>
				{rows.map((row, idx) => (
					<div key={idx} role='row'>
						{row.map((num) => (
							<button key={num} onClick={createHandlerNum(num)}>
								{num}
							</button>
						))}
					</div>
				))}
				{operations.map((operation) => (
					<span key={operation}>{operation}</span>
				))}
				<span>{equalSign}</span>
			</div>
		</section>
	)
}

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
})
