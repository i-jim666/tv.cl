import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer id="footer" className='footer'>
            <div className="container">
                <div className="links">
                    <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME+'/about-us'}>
                        <div className="link">ABOUT US</div>
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME+'/cookie-policy'}>
                        <div className="link">COOKIE POLICY</div>
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME+'/terms'}>
                        <div className="link">TERMS OF USE</div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer