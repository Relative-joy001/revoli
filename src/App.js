import React from 'react';

// Routing
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

// components

import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
// Styles

import { GlobalStyle } from './GlobalStyle';


const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />

      </Routes>
      <GlobalStyle />
    </Router>
  );


export default App;



// sample arrow function
// const Star = () => React.createElement('div', null, 'This is a little star');

// const App = () => {
//   return Star();
// } 