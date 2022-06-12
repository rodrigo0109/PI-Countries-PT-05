import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterByContinent, getActivities, getByOrderPop, getCountriesByName, Order, orderByActivity } from '../../actions/actions';
import CountryCard from './CountryCard';
import CountryNotFound from './CountryNotFound';
import './Countries.css'

const Countries = ({setCountryId}) => {

    const dispatch = useDispatch();

    const state = useSelector(state => state.countries);
    const activity = useSelector(state => state.activity);

    const [currentPage, setCurrentPage] = useState(0);
    const [order, setOrder] = useState('');
    const [filters, setFilters] = useState({
        continent:'',
        act:''
    });
    const [page, setPage] = useState(1)

    const handleInputChange = (e) => {
        dispatch(getCountriesByName(e.target.value))
        setFilters({
            continent: 'All',  //al escribir limpia el filtro por continente
            act: ''            //al escribir limpia el filtro por actividad
        })
        order !== '' && setOrder('')
        localStorage.setItem('search',e.target.value) 
    }

    //////// SELECT_CONTINENT ///////////
    const handleSearchChange = (e) => {
        dispatch(filterByContinent(e.target.value))
        setFilters({
            ...filters,
            continent: e.target.value
        })
        setOrder('')
    }

    ///////// PAGINADO ////////////////////////
    const handleNext = () => {
        if (state.length <= currentPage + 10) {
            setCurrentPage(currentPage);
        } else {
            setCurrentPage(currentPage + 10);
            setPage( page + 1 )
        }
    }

    const handlePrev = () => {
        if (currentPage < 9) {
            setCurrentPage(0);
            setPage(1)
        } else {
            setCurrentPage(currentPage - 10);
            setPage( page - 1 )
        }
    }

    const firstPage = () => {
        setCurrentPage(0);
        setPage(1)
    };
    
    const pagination = (currentPage) => {
        if(currentPage === 0) return currentPage + 9 
        return currentPage + 10
    }
    const countries = state.slice(currentPage, pagination(currentPage))

    useEffect(() => {
        firstPage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])


    useEffect(() => {
        dispatch(getActivities())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    ///////// A-Z //////////////////
    const handleAscOrder = (e) => {
        e.preventDefault()
        dispatch(Order('Asc'))
        setOrder('Asc')
    }
    const handleDescOrder = (e) => {
        e.preventDefault()
        dispatch(Order('Desc'))
        setOrder('Desc')
    }

    const handleOrderPopAsc = (e) => {
        dispatch(getByOrderPop('Max'))
        setOrder('Max')
    }
    const handleOrderPopDesc = (e) => {
        dispatch(getByOrderPop('Min'))
        setOrder('Min')
    }

    const handleActivity = (e) => {
        dispatch(orderByActivity(e.target.value))
        setFilters({
            ...filters,
            act: e.target.value
        })
    }

    return (
        <div className='countries'>
            <div className='filter_container'>
                <div className='input_container'>
                    <form className='search_form'>
                        <input className='buscador' autoComplete='off' type='text' autoFocus name='country' value={ localStorage.getItem('search') } onChange={(e) => handleInputChange(e)} />
                        <label className='lbl_buscador' htmlFor='country'>
                            <span className='text'>Country</span>
                        </label>
                    </form>
                    <div className='search'>
                        <select className='select' value={filters.continent} onChange={(e) => handleSearchChange(e)} >
                            <option value={'All'}>All continents</option>
                            <option value={'Africa'}>Africa</option>
                            <option value={'Americas'}>Americas</option>
                            <option value={'Asia'}>Asia</option>
                            <option value={'Europe'}>Europe</option>
                            <option value={'Oceania'}>Oceania</option>
                            <option value={'Antarctic'}>Antarctic</option>
                        </select>
                        <select className='select' value={filters.act} onChange={handleActivity} >
                            <option value={''}>Select activity</option>
                            <option value={'All'}>All activities</option>
                            {
                                activity?.map(a => (
                                    <option value={a} key={a}>{a}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className='filter'>
                    <div className='order'>
                        <button className='btn_alfabetic' onClick={handleAscOrder}>A - Z</button>
                        <button className='btn_alfabetic' onClick={handleDescOrder}>Z - A</button>
                    </div>
                    <div className='paginado'>
                        <button className='pag_prev' onClick={handlePrev}>PREV</button>
                        <p>{page}/{Math.round(state.length / 10)}</p>
                        <button className='pag_next' onClick={handleNext}>NEXT</button>
                    </div>
                    <div className='order'>
                        <button className='btn_population' onClick={handleOrderPopAsc}>+ POP</button>
                        <button className='btn_population' onClick={handleOrderPopDesc}>- POP</button>
                    </div>
                </div>
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
                                setCountryId={setCountryId}
                            />
                        ))
                        :
                        <CountryNotFound />
                }
            </div>
        </div>
    )
}

export default Countries