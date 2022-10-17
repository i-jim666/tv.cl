import Head from 'next/head'

// Global components
import Header from '../global-components/Header'
import Footer from '../global-components/Footer'

// Components
import Hero from '../components/Hero/Hero'
import ChannelDetails from '../components/ChannelDetails/ChannelDetails'
import Header_Mobile from '../global-components/Header_Mobile'



export default function ChannelDetailsPage() {
  return (
    <div className={`main__wrapper`}>
      <Head>
        <title>CNN Chile - TV | Chile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Header_Mobile />

      <main className={`main`}>
        <Hero />
        <ChannelDetails />
      </main>

      <Footer />

    </div>
  )
}
