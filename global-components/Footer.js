import React from 'react'
import Image from 'next/image'
import Logo from '../public/tvcl.svg'

const Footer = (props) => {
    let shoot = () => {
        console.log('Shooted from footer');
    }
    return (
        <div id="footer" className='footer'>
            <div className="container">
                <div className="logo" onClick={shoot}>
                    <a href={process.env.REACT_APP_DOMAIN_NAME}>
                        <Image src={Logo} alt="Logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer