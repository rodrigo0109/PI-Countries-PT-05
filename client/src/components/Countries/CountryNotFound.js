import React from 'react'
import image from '../../images/not_found.jpg'
import './CountryCard.css'

const CountryNotFound = ({filters}) => {
    
    return (
        <div className='country_card'>
            <img className='img_not_found' src={image} alt={'not found'} />
            <div className='content'>
                <h1>{ filters !== '' ? 'Country not found' : 'Loading...' }</h1>
                <div className='loader'></div>
            </div>
        </div>
    )
}

export default CountryNotFound