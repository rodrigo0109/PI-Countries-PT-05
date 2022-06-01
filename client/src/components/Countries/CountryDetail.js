import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCountryById } from '../../actions/actions';

const CountryDetail = () => {

    const  {id}  = useParams()
    const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch( getCountryById(id) )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    
    const countryDetail = useSelector(state => state.countryDetail);
    const { flag, name, region, subregion, capital, population, area, activities } = countryDetail
    console.log(countryDetail)
    return (
        <div>
            <Link to='/countries'>Volver</Link>
            <div className='country_card_detail'>
                <img src={flag} alt={name} />
                <h3>{id}</h3>
                <h1>{name}</h1>
                <h2>Capital: {capital}</h2>
                <h2>Continent: {region}</h2>
                <h2>Region: {subregion}</h2>
                <h2>Surface: {area} KM</h2>
                <h2>Pop. {population}</h2>
                <h2>Activities</h2>
                {
                    activities?.length > 0 ? 
                    activities.map( (a,i) => (
                        <p key={i}>{a.name}</p>
                    ))
                    :
                    <p>Nothing to show</p>
                }
            </div>
        </div>
    )
}

export default CountryDetail