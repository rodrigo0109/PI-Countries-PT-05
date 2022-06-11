import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/*' exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
