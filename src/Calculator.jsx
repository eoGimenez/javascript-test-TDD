import { useState } from 'react'
import { e, evaluate } from 'mathjs'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

export const operations = ['+', '-', '*', '/']

export const equalSign = '='

export const Calculator = () => {
	const [value, setValue] = useState('')

	const createHandlerClick = (op) => () => {
		console.log(value)
		if (op === '=') return setValue(evaluate(value))
		setValue(value.concat(op))
	}

	return (
		<section>
			<h1>Calculator</h1>
			<input value={value} readOnly />
			<div role='grid'>
				{rows.map((row, idx) => (
					<div key={idx} role='row'>
						{row.map((num) => (
							<button key={num} onClick={createHandlerClick(num)}>
								{num}
							</button>
						))}
					</div>
				))}
				{operations.map((operation) => (
					<button key={operation} onClick={createHandlerClick(operation)}>
						{operation}
					</button>
				))}
				<button onClick={createHandlerClick(equalSign)}>{equalSign}</button>
			</div>
		</section>
	)
}
