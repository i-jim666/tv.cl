import React from 'react'
import '../scss/components/hero.scss'
import HeroBG from '../images/hero-bg.jpg'


const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <div className="background">
          <img src={HeroBG} alt="Hero background" />
        </div>
        <div className="container">
            <h1>Sweden’s largest searching platform</h1>
            <p className="hero-desc">
              We present results in a variety of ways, based on what's most helpful for the type of information you're looking for.
            </p>
        </div>
    </div>
  )
}


export default Hero