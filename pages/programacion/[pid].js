// import Head from 'next/head'
import HeadGlobal from "../../global-components/HeadGlobal";
import { useRouter } from "next/router";

// Global components
import Header from "../../global-components/Header";
import Footer from "../../global-components/Footer";

// Components
import Hero from "../../components/Hero/Hero";
import ChannelDetails from "../../components/ChannelDetails/ChannelDetails";
import Header_Mobile from "../../global-components/Header_Mobile";
import { useState } from "react";

export default function Programacion() {
  const router = useRouter();
  const { pid } = router.query;
  const [search, setSearch] = useState("");

  return (
    <div className={`main__wrapper`}>
      <HeadGlobal
        title="TV.cl: Hoy en TV - Guía de TV de Chile"
        description="Mesa de TV para todos los canales. ¿Te preguntas qué hay en la televisión en este momento? ¿Buscas el horario de TV de mañana? TV.cl tiene una completa guía de TV para ti."
      />

      <Header setSearch={setSearch} />
      <Header_Mobile setSearch={setSearch} />

      <main className={`main`}>
        <Hero />
        <ChannelDetails channelSlug={pid} search={search} />
      </main>

      <Footer />
    </div>
  );
}
