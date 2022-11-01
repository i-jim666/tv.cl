import Head from 'next/head'

// Global components
import Header from '../global-components/Header'
import Footer from '../global-components/Footer'

// Components
import Hero from '../components/Hero/Hero'
import SettingList from '../components/SettingList/SettingList'
import Header_Mobile from '../global-components/Header_Mobile'


export default function Settings() {
  return (
    <div className={`main__wrapper`}>
      <Head>
        <title>Configuración de canales - TV.cl</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Header_Mobile />

      <main className={`main`}>
        <Hero />
        <SettingList />
      </main>

      <Footer />

    </div>
  )
}
