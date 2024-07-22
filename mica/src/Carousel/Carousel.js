import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  // {
  //  image: require('./one.jpg'), 
  //  caption:"Mica Electronics",
  //  description:"Description Here"
  // },
  {
    image:require('./two.jpg'), 
    caption:"Home Services",
    description:"Description Here"
   },
   {
    image:require('./three.jpg'), 
    caption:"Business Solutions",
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
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
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