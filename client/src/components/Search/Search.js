import React from 'react'
import './Search.css'

const Search = () => {
/*     const dispatch = useDispatch();
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
        dispatch( filterByContinent(e.target.value) )
        setQuery(e.target.value)
    } */

    return (
        <div className='search_container'>
            {/* <form className='search_form'>
                <label htmlFor='country'></label>
                <input type='text' name='country' value={country} placeholder='write a country' onChange={(e) => handleInputChange(e)} />
            </form>
            <div className='search_continent'>
                <label htmlFor='continent'></label>
                <select className='select' type='text' value={query} name='continent' onChange={(e) => handleSearchChange(e)} >
                    <option value={'All'}>All continents</option>
                    <option value={'Africa'}>Africa</option>
                    <option value={'Americas'}>Americas</option>
                    <option value={'Asia'}>Asia</option>
                    <option value={'Europe'}>Europe</option>
                    <option value={'Oceania'}>Oceania</option>
                </select>
            </div> */}
            search
        </div>
    )
}

export default Search