import React from 'react'
import './AboutContent.scss'
import Image from 'next/image'
import AboutImg from '../../images/about_image.jpg'
import AboutTvIcon from '../../images/icons/AboutTvIcon.svg'
import AboutMailboxIcon from '../../images/icons/AboutMailboxIcon.svg'

const AboutContent = () => {
    let title = 'Acerda de tv.cl';
    let desc1 = 'TV.cl se inició en noviembre de 2022 con la ambición de mostrar el horario de TV actual de una manera simple y flexible para los televidentes chilenos.'

    let content_1_title = 'Historia';
    let content_1_desc = `TV.cl en realidad tiene un propósito: Simplicidad. Debería ser fácil usar nuestro servicio. Y nuestro servicio tiene la ambición de mostrar el horario de TV actualizado de hoy, ¡rápida y fácilmente!`;

    let content_2_title = 'Quiere ponerse en contacto?';
    let content_2_desc = 'TV.cl fue fundada por dos empresarios suecos, Naim Murseli y Baki Sahini. Si tiene alguna pregunta con respecto a este sitio web o nuestra política de privacidad, contáctenos a: info@tv.cl.';

    return (
        <section className="about__content">
            <div className="container">
                <div className="image__holder">
                    <Image src={AboutImg} alt="About image" />
                </div>
                <h2>{title}</h2>
                <p>{desc1}</p>

                <div className="point_content">

                    <div className="flex_content">
                        <div className="left_item">
                            <Image src={AboutTvIcon} alt="TV icon" width={65} height={65} />
                        </div>
                        <div className="right_item">
                            <h4>{content_1_title}</h4>
                            <p>{content_1_desc}</p>
                        </div>
                    </div>


                    <div className="flex_content">
                        <div className="left_item">
                            <Image src={AboutMailboxIcon} alt="TV icon" width={65} height={65} />
                        </div>
                        <div className="right_item">
                            <h4>{content_2_title}</h4>
                            <p>{content_2_desc}</p>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    )
}

export default AboutContent