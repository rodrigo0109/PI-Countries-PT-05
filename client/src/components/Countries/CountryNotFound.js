import React from 'react'
import image from '../../images/not_found.jpg'
import './CountryCard.css'

const CountryNotFound = () => {
    return (
        <div className='country_card'>
            <img className='img_not_found' src={image} alt={'not found'} />
            <div className='content'>
                <h1>Country not found</h1>
                <h2 className='message_not_found'>try again</h2>
                <div className='loader'></div>
            </div>
        </div>
    )
}

export default CountryNotFound