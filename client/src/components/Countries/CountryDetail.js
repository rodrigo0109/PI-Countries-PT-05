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
    const { flag, name, region, subregion, capital, population, area, activities, /* maps */ } = countryDetail
    console.log(countryDetail)
    return (
        <div className='country_detail'>
            <div className='country_card_detail'>
                <div className='flag_container'>
                    <img src={flag} alt={name} />
                    <h3>{id}</h3>
                    <h1>{name}</h1>
                </div>
                <div className='data_container'>
                    <p><span>Capital:</span> {capital}</p>
                    <p><span>Continent:</span> {region}</p>
                    <p><span>Region:</span> {subregion}</p>
                    <p><span>Surface:</span> {area} KM</p>
                    <p><span>Pop.</span> {population}</p>
                </div>
                <div className='act_container'>
                    <h2>Activities</h2>
                    {
                        activities?.length > 0 ? 
                        activities.map( (a,i) => (
                            <p key={i}>{a.name}</p>
                        ))
                        :
                        <Link className='btn_create-activity-detail' to={`/activity`}>Register activity</Link>
                    }
                </div>
                {/* <div className='maps_container'>
                    <iframe
                        className='maps'
                        width="100%"
                        height="209"
                        frameBorder="0" style={{border:"0"}}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={'https://goo.gl/maps/47dmgeXMZyhDHyQW8'}
                        allowFullScreen
                    >
                    </iframe>
                </div> */}
            </div>
        </div>
    )
}

export default CountryDetail