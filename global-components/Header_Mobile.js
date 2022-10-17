import React from 'react'
import Image from 'next/image'
import Logo from '../public/tvcl.svg'
import SettingsIcon from '../images/icons/SettingsIcon';
import HamburgerIcon from '../images/icons/HamburgerIcon.svg';
import SearchIcon from '../images/icons/SearchIcon.svg';
import Link from 'next/link';

const Header_Mobile = (props) => {
    return (
        <div id="header_mob" className='header_mob'>
            <div className="container">
                <div className="logo">
                    <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME}>
                        <span>
                            <Image src={Logo} alt="Logo" width={45} />
                        </span>
                    </Link>
                </div>
                <div className="right_col">
                    <div className="search__icon">
                        <Image src={SearchIcon} alt="Search icon" />
                    </div>
                    <div className="hamburger__icon">
                        <Image src={HamburgerIcon} alt="Hamburger icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header_Mobile