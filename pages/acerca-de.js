import Head from 'next/head'

// Global components
import Header from '../global-components/Header'
import Footer from '../global-components/Footer'

// Components
import Hero from '../components/Hero/Hero'
import AboutContent from '../components/About/AboutContent'
import Header_Mobile from '../global-components/Header_Mobile'


export default function About() {
  return (
    <div className={`main__wrapper`}>
      <Head>
        <title>About us - TV | Chile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Header_Mobile />

      <main className={`main`}>
        <Hero />
        <AboutContent />
      </main>

      <Footer />

    </div>
  )
}
