import React from 'react'
import { Link } from 'react-router-dom'
import './CountryCard.css'

const CountryCard = ({flag, name, continent, id}) => {

  return (
    <div className='country_card'>
        <img src={flag} alt={name} />
        <h1>{name}</h1>
        <h2>{continent}</h2>
        <Link to={`/countries/${id}`}>+</Link>
        <Link to={`/activity`}>Registrar actividad</Link>
    </div>
  )
}

export default CountryCard