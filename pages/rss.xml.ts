import PostMetaData from '../types/postMetaData'
import { getSortedPostsMetaData } from '../utils/blog'
import { formatISO } from 'date-fns'

const Rss = () => null

function generateRss(posts: PostMetaData[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
    <channel>
      <title>R Bika(s) Blog</title>
      <link>https://rbika.com</link>
      <description>Frontend development articles, with a focus on React and related technologies.</description>
      <language>en-us</language>
      <category>Web development</category>
      <copyright>All rights reserved ${new Date().getFullYear()}, R Bika(s)</copyright>
      <image>
        <url>https://rbika.com/profile.png</url>
        <title>R Bika(s) Blog</title>
        <link>https://rbika.com</link>
      </image>
      ${posts.map(({ title, slug, description, date }) => {
        return `
          <item>
            <title>${title}</title>
            <link>https://rbika.com/${slug}</link>
            <guid>https://rbika.com/${slug}</guid>
            <description>${description}</description>
            <pubDate>${formatISO(new Date(date ? date : ''), {
              representation: 'date',
            })}</pubDate>
          </item>
        `
      })}
    </channel>
    </rss>
 `
}

export async function getServerSideProps({ res }: any) {
  const postsMeta = getSortedPostsMetaData()
  const rss = generateRss(postsMeta)

  res.setHeader('Content-Type', 'text/xml')
  res.write(rss)
  res.end()

  return {
    props: {},
  }
}

export default Rss
