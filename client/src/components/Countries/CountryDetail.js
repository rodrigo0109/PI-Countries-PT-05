import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCountryById } from '../../actions/actions';

const CountryDetail = ({setCountryId}) => {

    const  {id}  = useParams()
    const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch( getCountryById(id) )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    const handleId = (e) => {
        //e.preventDefault()
        setCountryId(id)
      }

    const values = (val) => {
        if( val > 1000000 ){
            return Math.round(val / 1000000 * 100) / 100 + ' Millions'
        }
        if( val > 1000 ){
            return Math.round(val / 1000 ) + ' Thousand'
        }
        else return val 
    }
    
    const countryDetail = useSelector(state => state.countryDetail);
    const { flag, name, region, subregion, capital, population, area, activities, /* maps */ } = countryDetail
    //console.log(activities)

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
                    <p><span>Surface:</span> {values(area)} Km²</p>
                    <p><span>Pop.</span> {values(population)}</p>
                </div>
                <div className='act_container'>
                    <h2>Activities</h2>
                    {
                        activities?.length > 0 ? 
                        activities.map( (a,i) => (
                            <div key={i} className="act_description">
                                <h3>{a.name}</h3>
                                <p ><span>Duration:</span> {a.duration}</p>
                                <p ><span>Diff.:</span> {a.difficulty}</p>
                                <p ><span>Season:</span> {a.season}</p>
                            </div>
                        ))
                        :
                        <Link className='btn_create-activity-detail' to={`/activity`} onClick={handleId} >Create activity</Link>
                    }
                </div>
                {/* <div className='maps_container'>
                    <iframe
                        className='maps'
                        width="100%"
                        height="209"
                        frameBorder="0" style={{border:"0"}}
                        
                        src={`${maps}&embedded=true`}
                        allowFullScreen
                    >
                    </iframe>
                </div> */}
            </div>
        </div>
    )
}

export default CountryDetail