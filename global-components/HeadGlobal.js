import Head from "next/head";
import React from 'react'

const HeadGlobal = (props) => {
  return (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>

        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content="https://tv.cl" />
        <meta property="og:image" content="/og_image.jpg" />

        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadGlobal