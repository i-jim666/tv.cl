import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer id="footer" className='footer'>
            <div className="container">
                <div className="left-col">
                    <div className="big_text">Acerca de tv.cl</div>
                    <div className="footer_about_desc">tv.cl is a smart TV guide, schedule with the programming of more than 200 channels, enjoy the best on television.</div>
                </div>
                <div className="links">
                    <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME+'/about-us'}>
                        <div className="link">Acerca de</div>
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME+'/cookie-policy'}>
                        <div className="link">Cookie policy</div>
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME+'/terms'}>
                        <div className="link">Terms</div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer