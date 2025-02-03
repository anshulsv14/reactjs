import React, { useState } from 'react'

const Input = () => {
    const[name,setName]=useState("anshul")
    const click=()=>{
setName('sudhansh')
    }
  return (
  <>
  <h1>my name is {name}</h1>
<button onClick={click} >click</button>
 
  </>
  )
}

export default Input
