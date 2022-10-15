import React from 'react'
import Image from 'next/image'
import AdImg from '../images/ad_img.jpg'
import styles from '../styles/components/Hero.module.scss';

const Hero = () => {
  return (
    <div className={`hero ${styles.hero__bg}`} id='hero'>
      <div className="container">
          <Image src={AdImg} alt='Ad image'></Image>
      </div>
    </div>
  )
}


export default Hero