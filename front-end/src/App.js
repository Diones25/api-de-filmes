import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';

import MoviesPopulares from './pages/MoviesPopulares/MoviesPopulares.js';
import MovieDetails from './pages/MovieDetails/MovieDetails.js'


function App() {
  return (
    <>
      <NavBar />      
      <Router>
        <Routes>
          <Route path='/' element={<MoviesPopulares />} />
          <Route path='/filme/populares/:id' element={<MovieDetails />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
