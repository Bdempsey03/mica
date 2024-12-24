import React, {useState} from 'react';
import { HashRouter as Router } from 'react-router-dom';
import {myRoutes as Routes} from './Routes';
import Navbar from './Navigation/NavBar';

function App() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <Router>
      <Navbar setCarouselIndex={setCarouselIndex}/>
      <Routes carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
    </Router>
  );
}

export default App;
