import React from 'react';
import logo from '../logo-white.png';
import '../App.css';

function LogoNavButton(props){

    return(
        <div className='logoNavButton'>
            <div className='logoNavButtonText'>
            <img src={logo} width="30" height="30" alt=""/>
            <p>ica Electronics</p>
            </div>
        </div>
    )
}
export default LogoNavButton;