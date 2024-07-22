import React from 'react';

function Content(props){

    return(
        <div>
            <p className={props.titleStyle}>
                About Us
            </p>
            <p className = {props.style}>
                Mica Electronics, co-founded by Kiba Dempsey and Alex Dempsey, is a well-established IT solutions business nestled in the heart of the Rocky Mountains in Valemount, 
                British Columbia. Kiba and Alex have a combined 40 years of industry experience, ensuring that your systems are in knowledgable hands. 
                Mica Electronics is the Valley's leading home and business IT solution, trusted by hundreds of individuals and businesses in the Robson Valley and neighbouring towns.
            </p>
        </div>
    )
}
export default Content;