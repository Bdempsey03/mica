import React from 'react';

function Content(props){

    return(
        <div>
            <p className={props.titleStyle}>
                Our Goal
            </p>
            <p className = {props.missionStyle}>
            Mica Electronics&#39; goal is to make your day-to-day IT experience as straight forward, stress free, efficient and user
            friendly as possible.
            </p>
        </div>
    )
}
export default Content;