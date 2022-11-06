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
  const [tv_channel_name, setChannelName] = useState(pid);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var channel_title = '';

  useEffect(() => {

    if(tv_channel_name){
        let name_arr = [];
        if(tv_channel_name.includes('-')){
          name_arr = tv_channel_name.split('-');
        }
        else{
          name_arr.push(tv_channel_name)
        }
        
        for (let i = 0; i < name_arr.length; i++) {
          name_arr[i] = capitalizeFirstLetter(name_arr[i])  
        }
  
        channel_title = name_arr.join(' ');
      
        if(channel_title == 'A E'){
          channel_title = 'A&E'
        }
        if(channel_title == 'Tvn'){
          channel_title = 'TVN'
        }
        if(channel_title == 'Hbo'){
          channel_title = 'HBO'
        }
        if(channel_title == 'Axn'){
          channel_title = 'AXN'
        }
        if(channel_title == 'Fox Sports 3'){
          channel_title = 'FOX Sports 3'
        }
        if(channel_title == 'Hbo 2'){
          channel_title = 'HBO 2'
        }
        if(channel_title == 'Cnn Chile'){
          channel_title = 'CNN Chile'
        }
        if(channel_title == '13c'){
          channel_title = '13C'
        }
        if(channel_title == 'Tnt'){
          channel_title = 'TNT'
        }
        if(channel_title == 'Universal Tv'){
          channel_title = 'Universal TV'
        }
        if(channel_title == 'Fx'){
          channel_title = 'FX'
        }
        if(channel_title == 'Fox Sports Básico'){
          channel_title = 'FOX Sports Básico'
        }
        if(channel_title == 'Tyc Sports'){
          channel_title = 'TyC Sports'
        }
        
        setChannelName(channel_title)
      }

  },[tv_channel_name, pid])

  return (
    <div className={`main__wrapper`}>
      <HeadGlobal
        title={`${tv_channel_name} - La programación de TV de hoy`}
        description={`Consulta todos los programas, series, películas etc. que echan hoy y en los próximos días en ${tv_channel_name}.`}
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
