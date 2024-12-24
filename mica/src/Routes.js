import React from "react";

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import About from './pages/About';

export const myRoutes = ({ carouselIndex, setCarouselIndex }) => {
    return(
            <Routes>
            <Route exact path="/" element={<HomePage carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex}/>} />
            <Route path = "/contact" element={<ContactUs/>}/>
                <Route path = "/about" element={<About/>}/>
                {/* <Route path="/carousel" element={<MicaCarousel carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />} /> */}
                {/*If no path is specified/recognized display 404 page*/}
                <Route path="*" element = {<NotFound/>}/>
            </Routes>
    )
}