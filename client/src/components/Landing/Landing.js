import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {

  const [classActive, setClassActive] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setClassActive('_active')
    }, 2000);
  }, [])
  
  
  return (
    <div className='main_container'>
      <div className='ui_container'>
        <h1 className={`landing_title${classActive}`}>
          Project <span className='span'>C</span>
                  <span className='span'>o</span>
                  <span className='span'>u</span>
                  <span className='span'>n</span>
                  <span className='span'>t</span>
                  <span className='span'>r</span>
                  <span className='span'>i</span>
                  <span className='span'>e</span>
                  <span className='span'>s</span>
          </h1>
        <Link className='btn_in' to='/countries'>Enter</Link>
      </div>
    </div>
  )
}

export default Landing