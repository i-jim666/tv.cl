import Head from "next/head";
import React, { useEffect } from "react";

const HeadGlobal = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>

      <meta name="google-site-verification" content="CFNoO0lXABbi1ySiaoOsN5vbxsyT_pGekrgfeXXaXOM" />
      <meta name="robots" content="all" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content="https://tv.cl" />
      <meta property="og:image" content="/og_image.jpg" />

      <link rel="icon" href="/favicon.ico" />

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1318984849974228"
        crossOrigin="anonymous"
      ></script>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-N008FYMRP3"></script>


    </Head>
  );
};

export default HeadGlobal;
