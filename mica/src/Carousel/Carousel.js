import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ExpandText from "./expandtext";
import '../App.css';

const maxTextLength = 100;
const data = [
  {
    image: require('../Assets/network2.jpg'),
    caption: "Installations",
    description:
      <ExpandText
        maxLength={maxTextLength}
        className='expandingTextBox'
        classNameExpand='expandButtonTextClass'
        text=
        {'Mica Electronics can fully support existing servers (Linux or Windows) and networks and we’re always happy to '+
          'assess your current IT setup and advise where performance, security and reliability improvements can be made. '+
          'If you’re having technical problems right now, please don’t hesitate to contact us for help. However, by far the '+
          'best way to keep your vital systems running smoothly is to not wait for problems to happen. Instead, let us '+
          'check for early key signs of deterioration. '+
          'Waiting until you’re already experiencing issues increases the probability of catastrophic data loss and the '+
          'disruption of business operations that generally accompanies unexpected hardware failures.'
        }
           />
  },
  {
    image: require('../Assets/support.jpg'),
    caption: "IT Support",
    description: <ExpandText
      maxLength={maxTextLength}
      className='expandingTextBox'
      classNameExpand='expandButtonTextClass'
      text=
      {'We provide commercial grade IT solutions for small to mid-sized businesses, ' +
        'including Active Directory configuration, physical server sales and support, hardwired ' + 
        'and wireless networks, workstation sales and support, managed security, and robust backup '+
        'solutions. We can offer a blend of Microsoft client machines and Linux Active Directory servers, '+
        'thereby utilizing enterprise Active Directory features, with globally recognized security, with the '+
        'additional benefits of Linux’s license free, secure, open source approach, making for a very cost-effective solution.'}
    />
  },
  {
    image: require('../Assets/remote2.jpg'),
    caption: "Remote Access",
    description: <ExpandText
      maxLength={maxTextLength}
      className='expandingTextBox'
      classNameExpand='expandButtonTextClass'
      text=
      {'One method we can use to look after your computers is remote access. Most of a computer’s functions can be '+
        'accessed, and necessary corrections made, without the disruption of removing the computer to our premises or '+
       ' a site visit having to take place. '+
        'We’re able to see memory usage, error logs, etc., and can install programs, change settings and scan the '+
        'computer for threats. We are also able to diagnose many hardware faults remotely, but any component that is '+
        'showing signs of failing would still need a site visit to repair or replace. '+
        'While we’re servicing the PC remotely, a clearly visible notification will be shown on the screen and the client '+
        'can watch everything that is being done, if they wish.'}    />
  }
];

function MicaCarousel({ carouselIndex, setCarouselIndex }) {
  const [index, setIndex] = useState(carouselIndex);

  useEffect(() => {
    setIndex(carouselIndex);
  }, [carouselIndex]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setCarouselIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id="micaExample">
      {
        data.map((slide, i) => (
          <Carousel.Item key={i} id={`slide-${i}`}>
            <img
              className="carousel-image"
              src={slide.image}
              alt="slider"
            />
            <Carousel.Caption className="carouselCaption">
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default MicaCarousel;