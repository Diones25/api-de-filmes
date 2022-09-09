import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';

import MoviesPopulares from './pages/Movies/MoviesPopulares/MoviesPopulares.js';
import MoviesPoster from './pages/Movies/MoviesPoster/MoviesPoster.js';
import Upcoming from './pages/Movies/Upcoming/Upcoming.js';
import Top_rated from './pages/Movies/Top_rated/Top_rated.js'; 
import MovieDetails from './pages/Movies/MovieDetails/MovieDetails.js'


function App() {
  return (
    <>
      <Router>
        <NavBar />{/* O navbar deve estar dentro da tag Router para ficar no contexto do roteamento e funcionar o Link no Navbar */}
        <Routes>
          <Route path="/" element={<MoviesPopulares />} />
          <Route path='/movie/now_playing' element={<MoviesPoster />} />
          <Route path='/movie/upcoming' element={<Upcoming />} />
          <Route path='/movie/top_rated' element={<Top_rated />} />
          <Route path="/movie/:id" element={<MovieDetails />} />          
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
