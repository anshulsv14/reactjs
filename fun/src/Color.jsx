import React, { useState } from 'react'

const Color = () => {
    const[color,setColor]=useState("red")
  return (
   <>
   <h1 style={{color:color}} >My Favourite color is : {color}</h1>
   <button onClick={()=>{setColor("blue")}} >blue</button>
   <button onClick={()=>{setColor("green")}} >green</button>
   <button onClick={()=>{setColor("black")}} >black</button>
   <button onClick={()=>{setColor("brown")}} >brown</button>
   
   
   </>
  )
}

export default Color
