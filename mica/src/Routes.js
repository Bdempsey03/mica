import React from "react";

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import Installations from './pages/Installations';
import RemoteAccess from './pages/RemoteAccess';
import ITSupport from './pages/ITSupport';
import NotFound from './pages/NotFound';
import About from './pages/About';
export const myRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path = "/contact" element={<ContactUs/>}/>
                {/* <Route path= "/remote-access" element={<RemoteAccess/>}/> */}
                {/* <Route path = "/IT-support" element={<ITSupport/>}/> */}
                {/* <Route path = "/installations" element={<Installations/>}/> */}
                <Route path = "/about" element={<About/>}/>

                {/*If no path is specified/recognized display 404 page*/}
                <Route path="*" element = {<NotFound/>}/>
            </Routes>
        </Router>
    )
}