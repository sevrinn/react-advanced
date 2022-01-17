import React, { useState, useEffect } from 'react'

const ShowHide = () => {
	//show is initially set to
	const [show, setShow] = useState(false)

	return (
		<>
			<button className='btn' onClick={() => setShow(!show)}>
				show/hide
			</button>
			{/* circuited so if show is true, it will show item component */}
			{show && <Item />}
		</>
	)
}

const Item = () => {
	const [size, setSize] = useState(window.innerWidth)

	const checkSize = () => {
		setSize(window.innerWidth)
	}
	useEffect(() => {
		window.addEventListener('resize', checkSize)
		//MUST RETURN this cleanup function to remove the event listener
		//just adding the empty dependency array will not work in this case
		//because every time we toggle the component, it's rendered
		return () => {
			window.removeEventListener('resize', checkSize)
		}
	}, [])
	return (
		<>
			<h1>Item</h1>
			<p>The window size is: {size} pixels wide</p>
		</>
	)
}

export default ShowHide
