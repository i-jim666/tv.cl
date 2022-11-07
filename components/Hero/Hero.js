import React, {useEffect} from 'react'
import Image from 'next/image'
import AdImg from '../../images/ad_img.jpg'
import styles from './Hero.module.scss';

const Hero = () => {

  let add_script = <ins className="adsbygoogle"
    style={{display: "inline-block !important", width: "970px", height:"250px"}}
    data-ad-client="ca-pub-1318984849974228"
    data-ad-slot="4088246871"></ins>;
  

  useEffect(()=>{

    const installGoogleAds = () => {
      const elem = document.createElement("script");
      elem.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1318984849974228";
      elem.async = true;
      elem.defer = true;
      elem.crossorigin = "anonymous";
      document.head.insertBefore(elem, document.head.firstChild);
    };
    
    if (window.screen.width < 600) {
      add_script = <ins className="adsbygoogle"
                  style={{display: "block !important"}}
                  data-ad-client="ca-pub-1318984849974228"
                  data-ad-slot="4869193111"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
    }

    installGoogleAds();
    
    (window.adsbygoogle = window.adsbygoogle || []).push({})

  }, [add_script])

  



  return (
    <div className={`hero ${styles.hero__bg}`} id='hero'>
      <div className="container">

        {add_script}

      </div>
    </div>
  )
}


export default Hero