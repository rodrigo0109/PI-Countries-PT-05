import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterByContinent, getActivities, getByOrderPop, getCountriesByName, Order, orderByActivity } from '../../actions/actions';
import CountryCard from './CountryCard';
import './Countries.css'
import CountryNotFound from './CountryNotFound';

const Countries = ({setCountryId}) => {

    const dispatch = useDispatch();

    const state = useSelector(state => state.countries);
    const activity = useSelector(state => state.activity);

    const [currentPage, setCurrentPage] = useState(0);
    const [order, setOrder] = useState('');
    const [continent, setContinent] = useState('')
    const [act, setAct] = useState('')

    const handleInputChange = (e) => {
        dispatch(getCountriesByName(e.target.value))
        //setCountry(e.target.value)
        //dispatch(filterByContinent('All'))
        setContinent('All')  //al escribir limpia el filtro por continente
        setAct('') //al escribir limpia el filtro por actividad
    }

    //////// SELECT_CONTINENT ///////////
    const handleSearchChange = (e) => {
        dispatch(filterByContinent(e.target.value))
        setContinent(e.target.value)
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
        dispatch(getByOrderPop('Asc'))
        setOrder('Asc')
    }
    const handleOrderPopDesc = (e) => {
        dispatch(getByOrderPop('Desc'))
        setOrder('Desc')
    }

    const handleActivity = (e) => {
        dispatch(orderByActivity(e.target.value))
        setAct(e.target.value)
    }


    //console.log(state)
    return (
        <div className='countries'>
            <div className='filter_container'>
                <div className='input_container'>
                    <form className='search_form'>
                        <input className='buscador' autoComplete='off' type='text' name='country' /* value={country} */ onChange={(e) => handleInputChange(e)} />
                        <label className='lbl_buscador' htmlFor='country'>
                            <span className='text'>Country</span>
                        </label>
                    </form>
                    <div className='search'>
                        <label htmlFor='continent'></label>
                        <select className='select' value={continent} onChange={(e) => handleSearchChange(e)} >
                            {/* <option>Order by continent</option> */}
                            <option value={'All'}>All continents</option>
                            <option value={'Africa'}>Africa</option>
                            <option value={'Americas'}>Americas</option>
                            <option value={'Asia'}>Asia</option>
                            <option value={'Europe'}>Europe</option>
                            <option value={'Oceania'}>Oceania</option>
                        </select>

                        <label htmlFor='activity'></label>
                        <select className='select' value={act} onChange={handleActivity} >
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
                    <button className='pag_prev' disabled={currentPage < 10} onClick={handlePrev}>PREV</button>
                    <div className='order'>
                        <button className='btn_alfabetic' onClick={handleAscOrder}>A - Z</button>
                        <button className='btn_alfabetic' onClick={handleDescOrder}>Z - A</button>
                    </div>
                    <div className='order'>
                        <button className='btn_population' onClick={handleOrderPopAsc}>+ POP</button>
                        <button className='btn_population' onClick={handleOrderPopDesc}>- POP</button>
                    </div>
                    <button className='pag_next' onClick={handleNext}>NEXT</button>
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