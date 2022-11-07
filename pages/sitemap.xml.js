import React from "react";
import * as fs from "fs";
const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_NAME;

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "product",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  const dynamicPaths = [
    `${BASE_URL}/programacion/tvn`,
    `${BASE_URL}/programacion/mega`,
    `${BASE_URL}/programacion/canal-13`,
    `${BASE_URL}/programacion/chilevisión`,
    `${BASE_URL}/programacion/la-red`,
    `${BASE_URL}/programacion/ucv-tv`,
    `${BASE_URL}/programacion/24-horas`,
    `${BASE_URL}/programacion/13c`,
    `${BASE_URL}/programacion/star-channel`,
    `${BASE_URL}/programacion/hbo`,
    `${BASE_URL}/programacion/sony`,
    `${BASE_URL}/programacion/axn`,
    `${BASE_URL}/programacion/warner-channel`,
    `${BASE_URL}/programacion/a-e`,
    `${BASE_URL}/programacion/universal-tv`,
    `${BASE_URL}/programacion/space`,
    `${BASE_URL}/programacion/fx`,
    `${BASE_URL}/programacion/cdf-básico`,
    `${BASE_URL}/programacion/fox-sports-básico`,
    `${BASE_URL}/programacion/fox-sports-3`,
    `${BASE_URL}/programacion/lifetime`,
    `${BASE_URL}/programacion/discovery-science`,
    `${BASE_URL}/programacion/tyc-sports`,
    `${BASE_URL}/programacion/discovery-channel`,
    `${BASE_URL}/programacion/national-geographic`,
    `${BASE_URL}/programacion/animal-planet`,
    `${BASE_URL}/programacion/history`,
    `${BASE_URL}/programacion/discovery-home-and-health`,
    `${BASE_URL}/programacion/investigation-discovery`,
    `${BASE_URL}/programacion/golden`,
    `${BASE_URL}/programacion/cinecanal`,
    `${BASE_URL}/programacion/hbo-2`,
    `${BASE_URL}/programacion/cinemax`,
    `${BASE_URL}/programacion/de-película`,
    `${BASE_URL}/programacion/disney-channel`,
    `${BASE_URL}/programacion/cartoon-network`,
    `${BASE_URL}/programacion/nick`,
    `${BASE_URL}/programacion/cnn-chile`,
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
