import React from 'react'
import Image from 'next/image'
import Logo from '../public/tvcl.svg'
import SettingsIcon from '../images/icons/SettingsIcon';
import Link from 'next/link';

const Header = (props) => {
    let shoot = () => {
        console.log('Shooted from header');
    }
    return (
        <div id="header" className='header'>
            <div className="container">
                <div className="logo" onClick={shoot}>
                    <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME}>
                        <span>
                            <Image src={Logo} alt="Logo" />
                        </span>
                    </Link>
                </div>
                <div className="search__box">
                    <div className="input_holder">
                        <input type="text" id="search_input" className="search_input" placeholder='Search by channel, program name' />
                    </div>
                </div>
                <div className="settings__icon">
                    <Link href="#">
                        <span>
                            <SettingsIcon />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header