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
        <title>TV | Chile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setSearch={setSearch} />
      <Header_Mobile />

      <main className={`main`}>
        <Hero />
        <ChannelList title="Programación y horarios de la TV" search={search} />
      </main>

      <Footer />
    </div>
  );
}
