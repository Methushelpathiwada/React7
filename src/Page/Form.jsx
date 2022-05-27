import React from 'react'
import { Link } from 'react-router-dom';
import Data from './Data';



export default function Form() {
  return (
    <div className='form'>
      <div className='form-header'>
      <Data/> 
      </div>
      <Link className='btn btn-form' to='/form/add'>Add Student</Link>
        
     
     
      </div>
  )
}