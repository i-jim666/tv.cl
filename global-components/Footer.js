import React from 'react'
import Image from 'next/image'
import Logo from '../public/tvcl.svg'
import Link from 'next/link'

const Footer = (props) => {
    let shoot = () => {
        console.log('Shooted from footer');
    }
    return (
        <footer id="footer" className='footer'>
            <div className="container">
                <div className="logo" onClick={shoot}>
                    <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME}>
                        <span>
                            <Image src={Logo} alt="Logo" />
                        </span>
                    </Link>
                </div>

                <div className="links">
                    <Link href="#">
                        <div className="link">ABOUT US</div>
                    </Link>
                    <Link href="#">
                        <div className="link">COOKIE POLICY</div>
                    </Link>
                    <Link href="#">
                        <div className="link">TERMS OF USE</div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer