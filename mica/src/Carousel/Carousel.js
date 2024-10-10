import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

const data = [
  {
    image: require('../Assets/network.jpg'),
    caption: "Installations",
    description: "Click here for more info about our installations",
    linkTo: "/installations"
  },
  {
    image: require('../Assets/support.jpg'),
    caption: "IT Support",
    description: "Click here for more info about our support options",
    linkTo: "/IT-support"
  },
  {
    image: require('../Assets/remote2.jpg'),
    caption: "Remote Access",
    description: "Click here for more info about our remote access options",
    linkTo: "/remote-access"

  },

]

function MicaCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
        data.map((slide, i) => {
          return (
            <Carousel.Item>
              <a href={slide.linkTo}>
                <img
                  className="carousel-image"
                  src={slide.image}
                  alt="slider"
                />
                <Carousel.Caption>
                  <h3>{slide.caption}</h3>
                  <p >{slide.description}</p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
          )
        })}

    </Carousel>
  );
}
export default MicaCarousel;