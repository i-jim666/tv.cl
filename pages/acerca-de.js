// import Head from 'next/head'
import HeadGlobal from '../global-components/HeadGlobal'

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
      <HeadGlobal
        title = "Acerca de - TV.cl"
        description = "Mesa de TV para todos los canales. ¿Te preguntas qué hay en la televisión en este momento? ¿Buscas el horario de TV de mañana? TV.cl tiene una completa guía de TV para ti."
      />

      <Header showSearch="false" />
      <Header_Mobile showSearch="false" />

      <main className={`main`}>
        <Hero />
        <AboutContent />
      </main>

      <Footer />

    </div>
  )
}
