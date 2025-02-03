import Color from "./Color"
import Input from "./Input"


function App() {
  const click =()=>{
    alert("welcome to bhopal")
  }
  const college=(nm)=>{
    alert(`my college name is :${nm}`)

  }
  const Myname=(fnm,snm)=>{
    alert(`My Name is :${fnm} ${snm}`)
  }
const name=(rty,e)=>{
  alert(`my name is : ${rty} ${e.type}`)
}

  return (
    <>
  <h1>welcome</h1>
  <button onClick={()=>{college("lnct")}} >press</button>
  {/* <button onClick={click} >click</button> */}
  <button onClick={()=>{click()}} >click</button>
  <button onClick={()=>{Myname("anshul",'shivharre')}} >click</button>
  <button onClick={(e)=>{name("anshul",e)}} >daba</button>
  <Input/>
  <Color/>
    </>
  )
}

export default App
