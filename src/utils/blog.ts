import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrism from 'rehype-prism-plus'
import PostsStaticPathsParams from '@/types/postsStaticPathsParams'
import PostMetaData from '@/types/postMetaData'
import Post from '@/types/post'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

/**
 * Gets the file name slug.
 *
 * @param fileName file name string
 * @returns file name slug
 */
const fileNameSlug = (fileName: string) => fileName.replace(/\.md$/, '')

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
 * Gets an array of posts meta data, sorted by most recent date.
 *
 * @returns an array of {@link PostMetaData}
 */
export const getSortedPostsMetaData = (): PostMetaData[] => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug: fileNameSlug(fileName),
      title: data.title ?? null,
      date: data.date ?? null,
      description: data.description ?? null,
    }
  })

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1
    if (a > b) return -1
    return 0
  })
}

/**
 * Gets post data with processed markdown content.
 *
 * @param slug file name slug
 * @returns an object {@link Post}
 */
export const getPostData = async (slug: string): Promise<Post> => {
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  const result = await unified()
    .use(markdown)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(content)

  return {
    slug,
    date: data.date ?? null,
    title: data.title ?? null,
    description: data.description ?? null,
    content: result.value.toString(),
  }
}
