import React, { useState } from 'react'

const UseStateBasics = () => {
	console.log(useState('hello world'))
	const [text, setText] = useState('random title')

	const clickHandler = () => {
		if (text === 'random title') {
			setText('hello world')
		} else {
			setText('random title')
		}
	}
	return (
		<>
			<h1>{text}</h1>
			<button className='btn' onClick={clickHandler}>
				change title
			</button>
		</>
	)
}

export default UseStateBasics
