export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.tv.cl/acerca-de</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/configuracion</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/politica-de-cookies</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/tvn</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/mega</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/canal-13</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/chilevisión</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/la-red</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/ucv-tv</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/24-horas</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/13c</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/star-channel</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/hbo</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/sony</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/axn</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/warner-channel</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/a-e</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/universal-tv</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/space</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/fx</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/cdf-básico</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/fox-sports-básico</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/fox-sports-3</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/lifetime</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/discovery-science</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/tyc-sports</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/discovery-channel</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/national-geographic</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/animal-planet</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/history</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/discovery-home-and-health</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/investigation-discovery</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/golden</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/cinecanal</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/hbo-2</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/cinemax</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/de-película</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/disney-channel</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/cartoon-network</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/nick</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.tv.cl/programacion/cnn-chile</loc>
        <lastmod>2022-11-07T16:20:14.608Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
  </urlset>`;

  res.end(xml);
}
