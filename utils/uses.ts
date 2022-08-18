import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import UsesData from '../types/usesData'
import { unified } from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const filePath = path.join(process.cwd(), 'content/uses.md')

/**
 * Gets post data with processed markdown content.
 *
 * @param slug file name slug
 * @returns an object {@link Post}
 */
export const getUsesData = async (): Promise<UsesData> => {
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const htmlContent = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(rehypeStringify)
    .process(content)

  return {
    content: htmlContent.toString(),
    lastUpdate: data.lastUpdate ?? null,
  }
}
