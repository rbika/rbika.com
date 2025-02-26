import fs from 'fs'
import path from 'path'
import PostsStaticPathsParams from '@/types/postsStaticPathsParams'
import PostMetaData from '@/types/postMetaData'
import { formatISO } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'src/pages/blog')

/**
 * Gets the file name slug.
 *
 * @param fileName file name string
 * @returns file name slug
 */
const fileNameSlug = (fileName: string) => fileName.replace(/\.mdx$/, '')

/**
 * Gets an array of posts file names slugs.
 *
 * @returns An array of { params: {@link PostsStaticPathsParams} }
 */
export const getAllPostsSlugs = (): { params: PostsStaticPathsParams }[] => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileNameSlug(fileName),
      },
    }
  })
}

/**
 * Gets an array of articles meta data, sorted by most recent date.
 *
 * @returns an array of {@link PostMetaData}
 */
export const getSortedPostsMetaData = async () => {
  const fileNames = fs.readdirSync(postsDirectory)

  const articleModules = await Promise.all(
    fileNames.map(async (article) => import(`@/pages/blog/${article}`))
  )

  const metaData = articleModules.map((module) =>
    module.meta ? module.meta : null
  )

  return metaData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1
    if (a > b) return -1
    return 0
  })
}

export const generateRssFeed = (articles: PostMetaData[]) => {
  const siteUrl = 'https://rbika.com'

  return `
    <rss version="2.0">
    <channel>
      <title>R Bika(s) Blog</title>
      <link>${siteUrl}</link>
      <description>Web development articles, with a focus on front-end technologies.</description>
      <language>en-us</language>
      <category>Web development</category>
      <copyright>All rights reserved ${new Date().getFullYear()}, R Bika(s)</copyright>
      <image>
        <url>${siteUrl}/profile.jpg</url>
        <title>R Bika(s) Blog</title>
        <link>${siteUrl}</link>
      </image>
      ${articles
        .map(({ title, slug, description, date }) => {
          return `
          <item>
            <title>${title}</title>
            <link>${siteUrl}/blog/${slug}</link>
            <description>${description}</description>
            <pubDate>${formatISO(new Date(date ? date : ''), {
              representation: 'date',
            })}</pubDate>
          </item>`
        })
        .join('')}
    </channel>
    </rss>
  `
}
