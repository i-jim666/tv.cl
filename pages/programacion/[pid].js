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
import { useEffect, useState } from "react";
 
export default function Programacion() {
  const router = useRouter();
  const { pid } = router.query;
  const [search, setSearch] = useState("");
  const [tv_channel_name, setChannelName] = useState("");
 
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
  useEffect(() => {
    if (pid) {
      let name_arr = [];
      if (pid.includes("-")) {
        name_arr = pid.split("-");
      } else {
        name_arr.push(pid);
      }
 
      for (let i = 0; i < name_arr.length; i++) {
        name_arr[i] = capitalizeFirstLetter(name_arr[i]);
      }
 
      let channel_title = name_arr.join(" ");
 
      if (channel_title == "A E") {
        channel_title = "A&E";
      } else if (channel_title == "Tvn") {
        channel_title = "TVN";
      } else if (channel_title == "Hbo") {
        channel_title = "HBO";
      } else if (channel_title == "Axn") {
        channel_title = "AXN";
      } else if (channel_title == "Fox Sports 3") {
        channel_title = "FOX Sports 3";
      } else if (channel_title == "Hbo 2") {
        channel_title = "HBO 2";
      } else if (channel_title == "Cnn Chile") {
        channel_title = "CNN Chile";
      } else if (channel_title == "13c") {
        channel_title = "13C";
      } else if (channel_title == "Tnt") {
        channel_title = "TNT";
      } else if (channel_title == "Universal Tv") {
        channel_title = "Universal TV";
      } else if (channel_title == "Fx") {
        channel_title = "FX";
      } else if (channel_title == "Fox Sports Básico") {
        channel_title = "FOX Sports Básico";
      } else if (channel_title == "Tyc Sports") {
        channel_title = "TyC Sports";
      }
 
      setChannelName(channel_title);
    }
  }, [pid]);

  return (
    <div className={`main__wrapper`}>

      <HeadGlobal
        title={`${
          tv_channel_name ? `${tv_channel_name} - ` : ""
        } La programación de TV de hoy`}
        description={`Consulta todos los programas, series, películas etc. que echan hoy y en los próximos días en ${tv_channel_name}.`}
      />
 
      <Header setSearch={setSearch} search={search} />
      <Header_Mobile setSearch={setSearch} />
 
      <main className={`main`}>
        <Hero />
        <ChannelDetails channelSlug={pid} search={search} />
      </main>
 
      <Footer />
    </div>
  );
}