import React from 'react';
import './Mainmodule.css';
import logo from '../../images/Logo.svg'

const Mainmodule = () => {
    return (
        <nav className='header'>
            <div>
                <h2>SA 10M Academy</h2>
            </div>
            
            <div>
                <img src={logo} alt="" />
            </div>
        </nav>
        
        
    );
};

export default Mainmodule;