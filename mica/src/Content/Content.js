import React from 'react';
import PropTypes from 'prop-types';

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
Content.propTypes = {
    titleStyle: PropTypes.string,
    missionStyle: PropTypes.string
};
export default Content;