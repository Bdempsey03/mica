import React from 'react';
import logo from '../Assets/MicaLogo.png';
import '../App.css';

function LogoNavButton(props){

    return(
        <div className='logoNavButton'>
            <div className='logoNavButtonText'>
                <img src={logo} width="400" height='30' alt="Mica Electronics logo"/>
            </div>
        </div>
    )
}
export default LogoNavButton;