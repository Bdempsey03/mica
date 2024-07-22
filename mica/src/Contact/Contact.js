import React from 'react';

function Contact(props){

    return(
        <div className={props.contactContainer}>
                <p className={props.contactStyle}>
                    Phone: 250-566-1990
                </p>
                <p className={props.contactStyle}>
                    email: lazydogacres@gmail.com
                </p>
                <p className={props.contactStyle}>
                    facebook: https://www.facebook.com/MicaElectronics/
                </p>

        </div>
    )
}
export default Contact;