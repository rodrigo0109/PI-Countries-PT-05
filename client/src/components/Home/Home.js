import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Activity from '../Activity/Activity'
import Countries from '../Countries/Countries'
import CountryDetail from '../Countries/CountryDetail'
import Nav from '../Nav/Nav'

const Home = () => {
  
  const [ countryId, setCountryId ] = useState('')
  //console.log('llega id',countryId)
  
  return (
    <div className='home'>
        <Nav setCountryId={setCountryId} />
        <Routes>
          <Route path='/countries' element={ <Countries setCountryId={setCountryId} /> } exact />
          <Route path='/countries/:id' element={<CountryDetail setCountryId={setCountryId}/> } exact />
          <Route path='/activity' element={<Activity countryId={countryId} /> } exact />
          <Route path='/about' element={<About /> } exact />
        </Routes>
    </div>
  )
}

export default Home