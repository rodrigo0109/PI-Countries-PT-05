import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterByContinent, getActivities, getAllCountries, getByOrderPop, getCountriesByName, Order, orderByActivity } from '../../actions/actions';
import CountryCard from './CountryCard';
import './Countries.css'

const Countries = () => {

    const dispatch = useDispatch();
    
    const state = useSelector(state => state.countries);
    const activity = useSelector(state => state.activity);

    const [currentPage, setCurrentPage] = useState(0);
    const [order, setOrder] = useState('');
    const [country, setCountry] = useState('')

    const handleInputChange = (e) => {
        dispatch(getCountriesByName(e.target.value))
        setCountry(e.target.value)
    }

    //////// SELECT_CONTINENT ///////////
    const handleSearchChange = (e) => {
        dispatch(filterByContinent(e.target.value))
        setOrder(e.target.value)
    }

    ///////// PAGINADO ////////////////////////
    const handleNext = () => {
        if (state.length <= currentPage + 10) {
            setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 10);
    }

    const handlePrev = () => {
        if (currentPage < 9) {
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage - 10);
        }
    }

    const firstPage = () => {
        setCurrentPage(0);
    };

    const countries = state.slice(currentPage, currentPage + 10)

    useEffect(() => {
        firstPage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    
    useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getActivities())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    ///////// A-Z //////////////////
    const handleOrder = (e) => {
        e.preventDefault()
        dispatch(Order(e.target.value))
        setOrder(e.target.value)
    }

    const handleOrderPop = (e) => {
        dispatch( getByOrderPop(e.target.value))
        setOrder(e.target.value)
    }

    const handleActivity = (e) => {
        dispatch( orderByActivity(e.target.value) )
        setOrder(e.target.value)
    }

    return (
        <div className='countries'>
            <div className='filter_container'>
                <form className='search_form'>
                    <label htmlFor='country'></label>
                    <input type='text' name='country' value={country} placeholder='write a country' onChange={(e) => handleInputChange(e)} />
                </form>
                <h3>Order by</h3>
                <div className='search'>
                    <label htmlFor='continent'></label>
                    <select className='select' type='text' name='continent' onChange={(e) => handleSearchChange(e)} >
                        {/* <option>Order by continent</option> */}
                        <option value={'All'}>All continents</option>
                        <option value={'Africa'}>Africa</option>
                        <option value={'Americas'}>Americas</option>
                        <option value={'Asia'}>Asia</option>
                        <option value={'Europe'}>Europe</option>
                        <option value={'Oceania'}>Oceania</option>
                    </select>
                </div>
                
                <div className='search'>
                    
                    <label htmlFor='activity'></label>
                    <select className='select' type='text' name='activity' onChange={handleActivity} >
                       {/*  <option>Order by Activity</option> */}
                        <option value={'All'}>All activities</option>
                        {
                            activity?.map( a => (
                                <option value={a} key={a}>{a}</option>
                            ) )
                        }
                    </select>
                </div>
                
                <button disabled={currentPage < 10} onClick={handlePrev}>prev</button>
                
                <select className='select' type='text' name='order' onChange={handleOrder} >
                    {/* <option>Order</option> */}
                    <option value={'Asc'}>A-Z</option>
                    <option value={'Desc'}>Z-A</option>
                </select>
                <select className='select' type='text' name='order_pop' onChange={handleOrderPop} >
                    {/* <option>Order</option> */}
                    <option value={'Asc'}>+ Pop</option>
                    <option value={'Desc'}>- Pop</option>
                </select>
                
                <button onClick={handleNext}>next</button>
            </div>
            
            <div className='countries_cards_container'>
                {
                    countries.length > 0 ?
                        countries.map(country => (
                            <CountryCard
                                key={country.id}
                                id={country.id}
                                flag={country.flag}
                                name={country.name}
                                continent={country.region}
                            />
                        ))
                        :
                        <p>No countries to show</p>
                }
            </div>
        </div>
    )
}

export default Countries