import { Outlet,Link } from "react-router-dom"

function About(){
    return(
        <>
        <h1 style={{textAlign:"center"}} >welcome to About page</h1>
        <div style={{display:"flex" , gap:"20px",justifyContent:"center",backgroundColor:"black"}}>
       <h2><Link style={{color:"white"}} to="aboutdetails">About details</Link></h2> 
       <h2> <Link style={{color:"white"}} to="aboutcareer">About my career</Link></h2>
       <h2> <Link style={{color:"white"}} to="aboutmyself">About myself</Link></h2>
        </div>
        <br />
        <br />
        <hr />
       <div>
        <Outlet/>
       </div>
        
        </>
    )
}
export default About