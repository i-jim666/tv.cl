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
        title = "Política de cookies - TV.cl"
        description = "Mesa de TV para todos los canales. ¿Te preguntas qué hay en la televisión en este momento? ¿Buscas el horario de TV de mañana? TV.cl tiene una completa guía de TV para ti."
      />

      <Header showSearch="false" />
      <Header_Mobile showSearch="false" />

      <main className={`main`}>
        <Hero />
        <GenericContent
          title = "Política de cookies"
          description = {`Usamos anuncios a través de Google Adsense y estos anuncios están configurados para mostrar anuncios relevantes a nuestros visitantes. Google Adsense, a su vez, permite que varios proveedores de tecnología publicitaria acuerden el espacio publicitario en esta página. La lista completa de proveedores de tecnología publicitaria que certifican a Google se puede encontrar en la parte inferior de esta página, donde también están vinculados a información sobre su uso de datos.

          Los proveedores externos, incluido Google, utilizan cookies para mostrar anuncios basados ​​en las visitas anteriores de los usuarios a su sitio web u otros sitios web.
          
          Con la ayuda de las cookies publicitarias, Google y sus socios pueden mostrar anuncios basados ​​en las visitas de los usuarios a su sitio web y/u otros.
          
          Los usuarios de este sitio web pueden optar por no mostrar anuncios personalizados en Configuración de anuncios (enlace). (Alternativamente, los usuarios pueden optar por no recibir cookies de proveedores externos para anuncios personalizados visitando www.aboutads.info).
          
          Lea más sobre las cookies de Google aquí: https://support.google.com/adsense/answer/1348695
          
          Mediante el uso de este sitio web, se proporcionan datos en forma de cookies, entre otras cosas, a estos proveedores de tecnología publicitaria para poder presentar anuncios tan relevantes como sea posible.
          
          Los anuncios se adaptan al contenido de este sitio web y a su historial como usuario.
          
          TV.cl no almacena ningún dato personal sobre usted como visitante. Tampoco utilizamos ninguna herramienta en la que podamos averiguar quién es usted como persona. Sin embargo, usamos cookies que hacen que las imágenes y los scripts se carguen más rápido para que usted, como usuario, siempre obtenga el mejor tiempo de carga posible. Algo que puede ser bueno saber es que usamos anuncios de Google Adsense y estos anuncios usan herramientas de seguimiento diferentes a las nuestras, todo para que usted, como usuario, reciba los anuncios más relevantes posibles.
          
          Puede leer más sobre cómo funciona Google y su programa de publicidad visitando este enlace:
          Cómo utiliza Google la información de los sitios web o las aplicaciones que utilizan nuestros servicios
          
          Colección de cookies (cookies)
          Cuando visita TV.cl, cierta información se recopila mediante cookies. Una cookie es un archivo de texto que se almacena en su navegador. Una cookie puede contener, entre otras cosas, fechas, números o texto y se utiliza para obtener más información sobre nuestros usuarios, por ejemplo, para mostrar anuncios más relevantes.
          
          Además de eso, las cookies también se utilizan para guardar archivos de imagen y scripts de datos para que el tiempo de carga para su posible visita de regreso a TV.cl sea más rápido.
          
          Como usuario, siempre tiene la opción de bloquear las cookies, permitir las cookies o eliminar las cookies. Puede cambiar esto directamente en su navegador.`}
        />
      </main>

      <Footer />

    </div>
  )
}
