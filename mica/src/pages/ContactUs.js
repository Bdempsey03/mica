import React from 'react';
import bg from "../Assets/shutterstock_2474885867SMALL.jpg"

function ContactUs() {
    return (
      <div className="page" style={{backgroundImage: "url(" + bg + ")",
         backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
        <p className='text'>

        <h1>Contact Us at Mica Electronics</h1>
        <image src = {bg} alt = "blue background" className="bg"/>
        <br/>
        Kiba Dempsey<br/>
Mica Electronics<br/>
PO Box 1024<br/>
Valemount, BC V0E 2Z0<br/>
Canada<br/>
Email: info@mica-electronics.com<br/>
Cell: 250 566 1990<br/>
      </p>
      <hr/>
      <p className='text'>
              <h1>About</h1>
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
  export default ContactUs;