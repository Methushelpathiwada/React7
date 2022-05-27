import React  from 'react';
import PostData from './mock-data.json'

function Data () {
  const Post = PostData.map((info)=>{
      return(
        <tr>
          <td>{info.id}</td>
          <td>{info.fullName}</td>
          <td>{info.course}</td>
          <td>{info.batch}</td>
          <td>{info.change}</td>
          <td><a href='Edit' >Edit</a></td>
        </tr>
      )
    })
  
  return (
    <>
        <table style={{backgroundColor:"green", width:"100%", textAlign:"center"}}>
          <thead>
            <tr>
            <th>Sr.no</th>
              <th>Name</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Email</th>
              <th>Change</th>
              
            </tr>
          </thead>
          <tbody>

                {Post}
          </tbody>
        


        </table>
    </>
  )
}

export default Data ;
