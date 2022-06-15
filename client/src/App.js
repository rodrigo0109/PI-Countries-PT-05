import React from 'react';
import './App.css';

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/*' exact element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
