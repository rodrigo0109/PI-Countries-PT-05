import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
/* import CountryDetail from './components/Countries/CountryDetail';
import Activity from './components/Activity/Activity'; */

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/*' exact element={<Home />} />
        {/* <Route path='/countries/:id'  element={<CountryDetail />} />
        <Route path='/countries' element={<Home />} />
        <Route path='/activity'  element={<Activity />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
