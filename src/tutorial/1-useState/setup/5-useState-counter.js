import React, { useState } from 'react'

const UseStateCounter = () => {
	const [value, setValue] = useState(0)

	const complexIncrease = () => {
		setTimeout(() => {
			setValue((prevState) => {
				return prevState + 1
			})
		}, 2000)
	}
	return (
		<>
			<h2>useState counter example</h2>
			<section className>
				<h2>regular counter</h2>
				<h1>{value}</h1>
				<button className='btn' onClick={() => setValue(value - 1)}>
					decrease
				</button>
				<button className='btn' onClick={() => setValue(0)}>
					reset
				</button>
				<button className='btn' onClick={() => setValue(value + 1)}>
					increase
				</button>
			</section>

			<section className>
				<h2>more complex counter</h2>
				<h1>{value}</h1>

				<button className='btn' onClick={complexIncrease}>
					increase later
				</button>
			</section>
		</>
	)
}

export default UseStateCounter
