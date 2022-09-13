import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';

import MoviesPopulares from './pages/Movies/MoviesPopulares/MoviesPopulares.js';
import MoviesPoster from './pages/Movies/MoviesPoster/MoviesPoster.js';
import Upcoming from './pages/Movies/Upcoming/Upcoming.js';
import TopRated from './pages/Movies/Top_rated/Top_rated.js'; 
import MovieDetails from './pages/Movies/MovieDetails/MovieDetails.js';
import SeriesPopulares from './pages/Series/SeriesPopulares/SeriesPopulares.js';
import AiringToday from './pages/Series/Airing-today/Airing-today.js';
import OnTheAir from './pages/Series/On-the-air/On-the-air.js';
import SeriesTopRated from './pages/Series/Top-rated/Top-rated.js';
import SeriesDetails from './pages/Series/SeriesDetails/SeriesDetails.js';
import PersonPopulares from './pages/Person/PersonPopulares/PersonPopulares.js';
import PersonDetails from './pages/Person/PersonDetails/PersonDetails.js'


function App() {
  return (
    <>
      <Router>
        <NavBar />{/* O navbar deve estar dentro da tag Router para ficar no contexto do roteamento e funcionar o Link no Navbar */}
        <Routes>
          <Route path="/" element={<MoviesPopulares />} />
          <Route path='/movie/now_playing' element={<MoviesPoster />} />
          <Route path='/movie/upcoming' element={<Upcoming />} />
          <Route path='/movie/top_rated' element={<TopRated />} />
          <Route path="/movie/:id" element={<MovieDetails />} />   
          <Route path='/tv' element={<SeriesPopulares />} />       
          <Route path='/tv/airing_today' element={<AiringToday />} />       
          <Route path='/tv/on_the_air' element={<OnTheAir />} />       
          <Route path="/tv/top_rated" element={<SeriesTopRated />} />   
          <Route path="/tv/:id" element={<SeriesDetails />} />    
          <Route path="/person/popular" element={<PersonPopulares />} /> 
          <Route path="/person/:id" element={<PersonDetails />} />    
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
