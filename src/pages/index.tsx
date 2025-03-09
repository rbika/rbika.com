import type { GetStaticProps, NextPage } from 'next'
import fs from 'fs'
import AboutMe from '@/components/AboutMe'
import PostMetaData from '@/types/postMetaData'
import { generateRssFeed, getSortedPostsMetaData } from '@/utils/blog'
import Link from 'next/link'
import { format } from 'date-fns'
import Seo from '@/components/Seo'
import PageContainer from '@/components/PageContainer'
import RssIcon from '../icons/Rss'

type BlogProps = {
  postsMetaData: PostMetaData[]
}

const Home: NextPage<BlogProps> = ({ postsMetaData }) => {
  return (
    <PageContainer>
      <Seo path="/" />

      <div>
        <AboutMe />

        <h2 className="text-xl pb-6 pt-12 flex items-center">
          <span className="pr-2">Articles</span>
          <a href="https://rbika.com/rss.xml">
            <RssIcon className="text-secondary text-md duration-500 transition-colors hover:text-primary" />
          </a>
        </h2>
        <ul className="border-t border-zinc-800">
          {postsMetaData.map(({ tags, slug, date, title }) => (
            <li key={slug} className="border-b border-zinc-800">
              <Link
                href={`/blog/${slug}`}
                className="py-6 no-underline text-primary sm:text-secondary hover:text-primary focus:text-primary flex justify-between transition-colors duration-300 flex-col gap-2"
              >
                <div className="flex flex-col sm:flex-row justify-between">
                  <span>{title}</span>
                  <span className="text-sm text-secondary">
                    {format(new Date(date ? date : ''), 'MMM d, yyyy')}
                  </span>
                </div>
                <div className="text-xs flex gap-2 text-secondary">
                  {tags.map((tag: string) => (
                    <span
                      className="border rounded flex justify-center items-center px-1 border-zinc-700"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const articles = await getSortedPostsMetaData()
  const feed = generateRssFeed(articles)
  fs.writeFileSync('./public/rss.xml', feed)

  return {
    props: {
      postsMetaData: articles,
    },
  }
}

export default Home
