import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Activity from '../Activity/Activity'
import Countries from '../Countries/Countries'
import CountryDetail from '../Countries/CountryDetail'
import Nav from '../Nav/Nav'

const Home = () => {
  return (
    <div className='home'>
        <Nav />
        <Routes>
          <Route path='/countries' exact element={ <Countries /> } />
          <Route path='/countries/:id'  element={<CountryDetail />} />
          <Route path='/activity'  element={<Activity />} />
        </Routes>
    </div>
  )
}

export default Home