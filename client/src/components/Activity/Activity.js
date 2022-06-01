import React, { useState } from 'react'
import { createActivity } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import './Activity.css'

const Activity = () => {

  const countries = useSelector(state => state.countries);

  const [input, setInput] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  })

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  console.log(input)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createActivity(input))
    setInput({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: []
    })
  }

  const handleCountry = (e) => {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    })
  }

  const handleDeleteCountry = (country) => {
    setInput({
      ...input,
      countries: input.countries.filter(el => el !== country)
    })
  }

  return (
    <div className='activity_container'>
      <h1>Crear nueva actividad turística</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='field_container'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' placeholder='Name' onChange={handleInputChange} />
        </div>
        <div className='field_container'>
          <label htmlFor='difficulty'>Difficulty</label>
          <select type='text' name='difficulty' onChange={handleInputChange} >
            <option>-</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className='field_container'>
          <label htmlFor='duration'>Duration (in hours)</label>
          <select type='text' name='duration' onChange={handleInputChange} >
            <option>-</option>
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
          <label htmlFor='season'>Season</label>
          <select type='text' name='season' onChange={handleInputChange} >
            <option>-</option>
            <option value={'Autonm'}>Autonm</option>
            <option value={'Winter'}>Winter</option>
            <option value={'Spring'}>Spring</option>
            <option value={'Summer'}>Summer</option>
          </select>
        </div>
        <div className='field_container'>
          <label htmlFor='countries'>Country/es</label>
          <select type='text' name='countries' onChange={handleCountry} >
            <option>-</option>
            {
              countries.map(c => (
                <option value={c.id} key={c.id}>{c.name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <ul>
            {
              input.countries.map(c => (
                <div key={c}>
                  <li>{c}</li>
                  <button onClick={() => handleDeleteCountry(c)}>X</button>
                </div>
              ))
            }
          </ul>
        </div>
        <button className='btn_save' type='submit'>Save activity</button>
      </form>
    </div>
  )
}

export default Activity