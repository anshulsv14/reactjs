// import StuData from "./Studata"

import Cybrom from "./Cybrom"
import empdata from "./EmpData"
import Design from "./Empdesign"

function App() {
  const ans=empdata.map((key)=> <Design no={key.empno} name={key.empname} des={key.Designation} sal={key.salary} /> )
 
  return (
    <>
   {/* <StuData/> */}
   <h1>Employee Data</h1>
    <table border={1} >
      <tr>
        <th>Emp no.</th>
        <th>Emp name</th>
        <th>Emp Designation</th>
        <th>Emp salary</th>
      </tr>
{ans}

    </table>
    <Cybrom/>
    </>
  )
}

export default App
