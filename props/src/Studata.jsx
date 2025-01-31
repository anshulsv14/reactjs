
const data=[{
    "rollno":1,
    "name":"anshul shivhare",
    "subject":"MBA",
    "fees":10000
},
{
    "rollno":2,
    "name":"dhruv shivhare",
    "subject":"MCA",
    "fees":20000
},
{
    "rollno":3,
    "name":"Kunal shivhare",
    "subject":"BBA",
    "fees":30000
},
{
    "rollno":4,
    "name":"himanshu shivhare",
    "subject":"BSC",
    "fees":40000
},
{
    "rollno":5,
    "name":"Anita shivhare",
    "subject":"Engineering",
    "fees":50000
}
]

const ans=data.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.subject}</td>
            <td>{key.fees}</td>
        </tr>
         </>
    )
})


function StuData(){



    return(
        <>
        <table border={1} >
   
          <tr>
            <th>rollno</th>
            <th>name</th>
            <th>subject</th>
            <th>fees</th>
          </tr>
           {ans}
        </table>
        
        </>
    )
}
export default StuData