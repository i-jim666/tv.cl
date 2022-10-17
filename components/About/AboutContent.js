import React from 'react'
import './AboutContent.scss'
import Image from 'next/image'
import AboutImg from '../../images/about_image.jpg'
import AboutTvIcon from '../../images/icons/AboutTvIcon.svg'
import AboutMailboxIcon from '../../images/icons/AboutMailboxIcon.svg'

const AboutContent = () => {
    let title = 'About tv.cl';
    let desc = 'TV.cl is one of the largest and most popular online TV guides in the Chile. We\'ll show you the TV listings for all Chile TV channels in a user friendly format, available on your computer, phone or tablet.'

    let content_1_title = 'History';
    let content_1_desc = `TV.cl was built by a couple of TV enthusiasts (who also happened to be programmers) that wanted a better way to find out what was on TV every night.\n \n Our goal was to create the most user friendly TV guide on the planet. A site that even your grandmother can use and enjoy) Just a really good tv guide and nothing else - fast, easy, on your computer or on your mobile device. We hope you\'ll like it!`;

    let content_2_title = 'Want to get in touch?';
    let content_2_desc = 'Feedback, questions, help, partnerships? Please send an email to hello@tv.cl and we\'ll get back to you as soon as we can.';

    return (
        <section className="about__content">
            <div className="container">
                <div className="image__holder">
                    <Image src={AboutImg} alt="About image" />
                </div>
                <h2>{title}</h2>
                <p>{desc}</p>

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