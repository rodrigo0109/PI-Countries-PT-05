import React from 'react'
import Countries from '../Countries/Countries'
import Search from '../Search/Search'

const Home = () => {
  return (
    <div className='home'>
        <Search />
        <Countries />
    </div>
  )
}

export default Home