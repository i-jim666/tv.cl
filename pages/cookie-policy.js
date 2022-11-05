// import Head from 'next/head'
import HeadGlobal from '../global-components/HeadGlobal'

// Global components
import Header from '../global-components/Header'
import Footer from '../global-components/Footer'

// Components
import Hero from '../components/Hero/Hero'
import GenericContent from '../components/GenericContent/GenericContent'
import Header_Mobile from '../global-components/Header_Mobile'


export default function CookiePolicy() {
  return (
    <div className={`main__wrapper`}>
      
      <HeadGlobal
        title = "TV.cl: Hoy en TV - Guía de TV de Chile"
        description = "Mesa de TV para todos los canales. ¿Te preguntas qué hay en la televisión en este momento? ¿Buscas el horario de TV de mañana? TV.cl tiene una completa guía de TV para ti."
      />

      <Header />
      <Header_Mobile />

      <main className={`main`}>
        <Hero />
        <GenericContent
          title = "Cookie policy"
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </main>

      <Footer />

    </div>
  )
}
