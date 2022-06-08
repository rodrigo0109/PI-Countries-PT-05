import React from 'react'
import { Link } from 'react-router-dom'
import './CountryCard.css'

const CountryCard = ({flag, name, continent, id, setCountryId}) => {

  const handleId = (e) => {
    //e.preventDefault()
    setCountryId(id)
  }
  
  return (
    <div className='country_card'>
        <img src={flag} alt={name} />
        <div className='content'>
          <h1>{name}</h1>
          <h2>{continent}</h2>
          <Link className='btn_info' to={`/countries/${id}`}>+</Link>
        </div>
          <Link className='btn_create-activity' to={`/activity`} onClick={handleId} ><span className='text_skew'>Register activity</span></Link>
    </div>
  )
}

export default CountryCard