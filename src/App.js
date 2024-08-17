import React from 'react';

// components

import Header from './components/Header';
import Home from './components/Home';
// Styles

import { GlobalStyle } from './GlobalStyle';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;



// sample arrow function
// const Star = () => React.createElement('div', null, 'This is a little star');

// const App = () => {
//   return Star();
// } 