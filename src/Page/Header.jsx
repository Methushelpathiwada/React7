import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <div className='title left'>
          React Assignment 6
      </div>
      <div className='title menus'>
        <Link className='menu' to='/home'>Home</Link> 
        <Link className='menu' to='/form'>Form</Link>
        <Link className='menu' to='/about'>About</Link>

      </div>
      
      </div>
      

  )
}