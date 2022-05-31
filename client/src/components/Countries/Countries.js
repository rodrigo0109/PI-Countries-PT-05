import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterByContinent, getAllCountries, getCountriesByName, Order } from '../../actions/actions';
import CountryCard from './CountryCard';
import './Countries.css'

const Countries = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.countries);
    const [currentPage, setCurrentPage] = useState(0);
    const [order, setOrder] = useState('');

    const [country, setCountry] = useState('')
    const [query, setQuery] = useState('')

    const handleInputChange = (e) => {
        dispatch(getCountriesByName({
            name: e.target.value,
            continent: query
        }))
        setCountry(e.target.value)
    }

    const handleSearchChange = (e) => {
        dispatch(filterByContinent(e.target.value))
        setQuery(e.target.value)
    }

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    const handleOrder = (e) => {
        e.preventDefault()
        dispatch(Order(e.target.value))
        setOrder(e.target.value)
    }

    //console.log('lo que llega', state)
    return (
        <div className='countries'>
            <div className='filter_container'>
                <form className='search_form'>
                    <label htmlFor='country'></label>
                    <input type='text' name='country' value={country} placeholder='write a country' onChange={(e) => handleInputChange(e)} />
                </form>
                <div className='search_continent'>
                    <label htmlFor='continent'></label>
                    <select className='select' type='text' name='continent' onChange={(e) => handleSearchChange(e)} >
                        <option value={query}>Order by continent</option>
                        <option value={'All'}>All continents</option>
                        <option value={'Africa'}>Africa</option>
                        <option value={'Americas'}>Americas</option>
                        <option value={'Asia'}>Asia</option>
                        <option value={'Europe'}>Europe</option>
                        <option value={'Oceania'}>Oceania</option>
                    </select>
                </div>
                <button disabled={currentPage < 10} onClick={handlePrev}>prev</button>
                <select className='select' type='text' name='order' onChange={(e) => handleOrder(e)} >
                    <option value={order}>Order</option>
                    <option value={'Asc'}>A-Z</option>
                    <option value={'Desc'}>Z-A</option>
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