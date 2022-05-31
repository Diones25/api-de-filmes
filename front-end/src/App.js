import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar.js';
import Home from './components/pages/Home/Home.js';
import Banner from './components/Banner/Banner.js'


function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
