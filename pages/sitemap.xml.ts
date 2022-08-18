import { getAllPostsSlugs } from '../utils/blog'

const SiteMap = () => null

function generateSiteMap(slugs: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://rbika.com</loc></url>
      <url><loc>https://rbika.com/uses</loc></url>
      ${slugs
        .map((slug) => {
          return `<url><loc>https://rbika.com/blog/${slug}</loc></url>`
        })
        .join('')}
    </urlset>
 `
}

export async function getServerSideProps({ res }: any) {
  const posts = getAllPostsSlugs().map((item) => item.params.slug)
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
