import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

const data = [
  {
   image: require('../Assets/network2.jpg'), 
   caption:"Installations",
   description:"Mica Electronics provides commerical grade IT installation solutions for small to mid-sized businesses."
  },
  {
    image:require('../Assets/typing.jpg'), 
    caption:"IT Support",
    description:"Mica Electronics can fully support existing servers (Linux or Windows) and networks and we’re always happy to help. If you’re having technical problems right now, please don’t hesitate to contact us for help."
   },
   {
    image:require('../Assets/remote-access-tools.webp'), 
    caption:"Remote Access",
    description:"One method we can use to look after your computers is remote access. Most of a computer’s functions can be accessed, and necessary corrections made, without the disruption of removing the computer to our premises or a site visit having to take place."
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
        <img
          className="carousel-image"
          src={slide.image}
          alt="slider"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default MicaCarousel;