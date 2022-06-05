import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';

import MoviesPopulares from './components/pages/MoviesPopulares/MoviesPopulares.js';
import MovieDetails from './components/pages/MovieDetails/MovieDetails.js'


function App() {
  return (
    <>
      <NavBar />      
      <Router>
        <Routes>
          <Route path='/' element={<MoviesPopulares />} />
          <Route path='/movie' element={<MovieDetails />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
