import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/*{if(){console.log('hello world')}}*/}
      <h1>{text || `sev`}</h1>
      {text && <h1>what's up</h1>}
      {!text && <h1>what's up</h1>}
    </>
  )
}

export default ShortCircuit
