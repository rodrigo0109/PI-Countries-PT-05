import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  
  return (
    <div className='main_container'>
      <div className='ui_container'>
        <h1 className='landing_title'>Countries</h1>
        <Link className='btn_in' to='/countries'>Ingresar</Link>
      </div>
    </div>
  )
}

export default Landing