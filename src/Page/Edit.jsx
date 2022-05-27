import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Edit = () => {

const[Name,setName]=useState("")

const[Age,setAge]=useState("")


const[Course,setCourse]=useState("")


const[Batch,setBatch]=useState("")

const[students,setStudents]=useContext()


const ChangeHandler1=(e)=>
{
setName(e.target.value)

}
const ChangeHandler2=(e)=>
{
setAge(e.target.value)

}
const ChangeHandler3=(e)=>
{
setCourse(e.target.value)

}
const ChangeHandler4=(e)=>
{
setBatch(e.target.value)

}

const SubmitHandler1=()=>{


setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch,id:new Date().getTime().toString()}])


}
  return (
    <div>


<div>

<label>Name:</label>
<input id="name" type="text" name='name' value={Name} onChange={ChangeHandler1} />
<label>Age:</label>
<input id="age" type="text" name='age' value={Age} onChange={ChangeHandler2} />
<label>Course:</label>
<input id="course" type="text" name='course' value={Course} onChange={ChangeHandler3} />
<label>Batch:</label>
<input id="batch" type="text" name='batch' value={Batch} onChange={ChangeHandler4} />

</div>

<div>

<Link to="/edit">Cancel</Link>
<Link to="/edit" onClick={SubmitHandler1}>Update</Link>

</div>



    </div>
  )
}

export default Edit