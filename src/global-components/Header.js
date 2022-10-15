import React from 'react'
import Logo from '../images/nr-logo-2.svg'

const Header = (props) => {
    const shoot = () => {
        console.log('Fired!');
    }
    return (
        <div id="header" className='header'>
            <div className="container">
                <div className="logo" onClick={shoot}>
                    <a href={process.env.REACT_APP_DOMAIN_NAME}>
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header