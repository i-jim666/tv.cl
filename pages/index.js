import Head from "next/head";

// Global components
import Header from "../global-components/Header";
import Footer from "../global-components/Footer";

// Components
import Hero from "../components/Hero/Hero";
import ChannelList from "../components/ChannelList/ChannelList";
import Header_Mobile from "../global-components/Header_Mobile";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <div className={`main__wrapper`}>
      <Head>
        <title>TV.cl: Hoy en TV - Guía de TV de Chile</title>
        <meta name="description" content="Mesa de TV para todos los canales. ¿Te preguntas qué hay en la televisión en este momento? ¿Buscas el horario de TV de mañana? TV.cl tiene una completa guía de TV para ti." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setSearch={setSearch} />
      <Header_Mobile setSearch={setSearch} />

      <main className={`main`}>
        <Hero />
        <ChannelList title="Programación y horarios de la TV" search={search} />
      </main>

      <Footer />
    </div>
  );
}
