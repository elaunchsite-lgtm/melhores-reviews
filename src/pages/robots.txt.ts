export async function GET() {
  const text = `Sitemap: https://melhoresreviews.vercel.app/sitemap.xml\nUser-agent: *\nAllow: /\n`;
  return new Response(text, { headers: { "Content-Type": "text/plain" } });
}
