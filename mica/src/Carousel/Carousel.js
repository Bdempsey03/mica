import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

const data = [
  {
   image: require('./one.jpg'), 
   caption:"Service One",
   description:"Description Here"
  },
  {
    image:require('./two.jpg'), 
    caption:"Service Two",
    description:"Description Here"
   },
   {
    image:require('./three.jpg'), 
    caption:"Service Three",
    description:"Description Here"
   },
   {
    image:require('./two.jpg'), 
    caption:"Service Four",
    description:"Description Here"
   } 
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
          className="d-block w-100"
          src={slide.image}
          alt="slider"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
        {/* <p className="slider">Business Solutions | Backups | Other Service | Text</p> */}
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default MicaCarousel;