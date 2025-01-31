import React from 'react'
import { Link, Outlet } from 'react-router-dom'



const Layout = () => {
  return (
    <>
    <div style={{display:"flex" , gap:"20px",justifyContent:"center",backgroundColor:"black"}}>
        <h1 ><Link  style={{color:"white"}} to='home'>Home</Link></h1>
        <h1><Link style={{color:"white"}} to='about'>About</Link></h1>
        <h1><Link style={{color:"white"}} to='contact'>Contact us</Link></h1>
</div>
        <hr />

        <div>
            <Outlet />
        </div>        
    </>
  )
}

export default Layout
