import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllCountries } from '../../actions/actions';
import './Landing.css'

const Landing = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getAllCountries() )
  }, [dispatch])
  

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