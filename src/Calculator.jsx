import { useState } from 'react'
import { evaluate } from 'mathjs'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

export const operations = ['+', '-', '*', '/']

export const equalSign = '='

export const Calculator = () => {
	const [value, setValue] = useState('')
	// const [operator, setOperator] = useState('')

	const createHandlerClick = (op) => () => {
		setValue(value.concat(op))
	}
	// const handleEqual = (num, operator) => () => {
	// 	setValue()
	// }

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
				<button
					onClick={() => {
						setValue(evaluate(value))
					}}
				>
					{equalSign}
				</button>
			</div>
		</section>
	)
}
