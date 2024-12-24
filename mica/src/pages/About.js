import React from 'react';
import Navbar from '../Navigation/NavBar';
import mountain from "../Assets/MicaMountain.JPG"
import "../App.css";
function About() {
  return (
    <div className="page">
      <p className='text'>
        <h1>About Mica Electronics</h1>
        <img src={mountain} alt="Mica Mountain" className="aboutImage" />
        At Mica Electronics, we pride ourselves in being fairly priced, efficient, friendly, knowledgeable, and in listening
        carefully to our customers. Our team has many years of experience successfully maintaining large computer
        networks; reliably and cost effectively serving the technical needs of the Robson Valley, and beyond, since
        moving to the valley in 2005.
        With 30 years of post graduate experience in servers, networking, and electronics hardware design, Kiba
        Dempsey, owner of Mica Electronics, is also the Technical Analyst for the Robson Valley’s four schools.
      </p>
    </div>
  );
}
export default About;