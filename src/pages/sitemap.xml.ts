import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

const SITE_URL = import.meta.env.SITE ?? "https://sarananusapakan.com";

export const prerender = true;

export async function GET(): Promise<Response> {
  const articles = await getCollection("artikel");

  const staticPages = ["", "artikel", "produk"];
  const urls = staticPages.map((path) => `${SITE_URL}/${path}`);
  const articleUrls = articles.map((article) => `${SITE_URL}/artikel/${article.slug}`);
  const allUrls = [...urls, ...articleUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
    .map(
      (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === SITE_URL ? "1.0" : "0.8"}</priority>
  </url>`,
    )
    .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
