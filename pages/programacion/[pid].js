import Head from 'next/head'

// Global components
import Header from '../../global-components/Header'
import Footer from '../../global-components/Footer'

// Components
import Hero from '../../components/Hero/Hero'
import Header_Mobile from '../../global-components/Header_Mobile'

import { useRouter } from 'next/router'

export default function Programacion() {

    const router = useRouter()
    const { pid } = router.query

    return (
        <div className={`main__wrapper`}>
        <Head>
            <title>Silence</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Header_Mobile />

        <main className={`main`}>
            <Hero />
        
            {pid}

        </main>

        <Footer />

        </div>
  )
}
