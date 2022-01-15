import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  // gets the size of browser windows width
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  // us
  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  })
  console.log('render')
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h3>window</h3>
      <h4>{size} px</h4>
    </>
  )
}

export default UseEffectCleanup
