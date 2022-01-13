import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter, an array of dependencies
//adding this after the callback in useEffect will have it render only once
//adding vars as dependencies will trigger useEffect only when those variables change
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call useEffect')
    if (value >= 1) {
      document.title = `New Messages(${value})`
    }
  }, [value])

  useEffect(() => {
    console.log('hello world')
  }, [])

  console.log('render component')
  return (
    <>
      <h2>useEffect Basics</h2>
      <h3>{value}</h3>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  )
}

export default UseEffectBasics
