import React, { useState } from 'react'
import { createActivity, getAllCountries } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import './Activity.css'
import { useNavigate } from 'react-router-dom';

const Activity = ({countryId}) => {

  //console.log('id en activity', countryId)
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const countries = useSelector(state => state.countriesFiltered);

  const countriesList = [...countries]

  countriesList.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })

  const [input, setInput] = useState({
    name: '',
    difficulty: 0,
    duration: 0,
    season: '',
    countries: countryId.length > 0 ? [countryId] : []
  })
  //console.log(input.countries)
  const validate = (value, condition) => {
    if (value === '') return false
    let res = []
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < condition.length; j++) {
        if (value[i] === condition[j]) res.push(value[i])
      }
    }
    if (value === res.join('')) return true
  }

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  //console.log(input)
  const handleSubmit = async (e) => {
    e.preventDefault()
    let countries = input.countries
    let name = input.name.toLowerCase()
    let caracteres = 'abcdefghijklmnñopqrstuvwxyzáéíóúßäëïöü '

    if (!validate(name, caracteres)) return alert('Field name is required, only letters')
    if (countries.length === 0) return alert('Select one country minimum')
    if (input.difficulty === 0 || input.duration === 0 || input.season === '') return alert('One option on every field is required')

    dispatch(createActivity(input))

    navigate('/countries', {
      replace: true
    })
    alert('Activity created')
    await dispatch(getAllCountries()) //para que se cargue la nueva info al crear actividad
  }

  const handleCountry = (e) => {
    if (input.countries.includes(e.target.value)) return alert('This country was already selected')
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    })
  }

  const handleDeleteCountry = (e, country) => {
    e.preventDefault()
    setInput({
      ...input,
      countries: input.countries.filter(el => el !== country)
    })
  }

  return (
    <div className='activity_container'>
      <h1 className='create_activity_title'>Create activity</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='field_container'>
          <input className='buscador' type='text' name='name' autoComplete='off' onChange={handleInputChange} />
          <label className='lbl_buscador' htmlFor='name'>
            <span className='text'>Name of activity</span>
          </label>
        </div>
        <div className='field_container'>
          <select className='select_activity' type='text' name='difficulty' onChange={handleInputChange} >
            <option value={0}>Select difficulty</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
          </select>
        </div>
        <div className='field_container'>
          <select className='select_activity' type='text' name='duration' onChange={handleInputChange} >
            <option value={0}>Select duration (in hours)</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div className='field_container'>
          <select className='select_activity' type='text' name='season' onChange={handleInputChange} >
            <option>Select season</option>
            <option value={'Autonm'}>Autonm</option>
            <option value={'Winter'}>Winter</option>
            <option value={'Spring'}>Spring</option>
            <option value={'Summer'}>Summer</option>
          </select>
        </div>
        <div className='field_container'>
          <select className='select_activity' type='text' name='countries' onChange={handleCountry} >
            <option value={null}>Select country/es</option>
            {
              countriesList.map(c => (
                <option value={c.id} key={c.id}>{c.name}</option>
              ))
            }
          </select>
        </div>
        <div className='country_selected_area'>
          <ul className='ul_selected_area'>
            {
              input.countries.map(c => (
                <div key={c} className="countries_selected_all">
                  <li>{c}</li>
                  <button onClick={(e) => handleDeleteCountry(e, c)}>X</button>
                </div>
              ))
            }
          </ul>
        </div>
        <button className='btn_save' type='submit'>SAVE</button>
      </form>
    </div>
  )
}

export default Activity