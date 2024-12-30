import React from 'react';
import PropTypes from 'prop-types';

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
Contact.propTypes = {
    contactContainer: PropTypes.string.isRequired,
    contactStyle: PropTypes.string.isRequired,
};

export default Contact;