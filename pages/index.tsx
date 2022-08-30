import type { GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layout'

import AboutMe from '../components/AboutMe'
import PostMetaData from '../types/postMetaData'
import { getSortedPostsMetaData } from '../utils/blog'
import Link from 'next/link'
import { format } from 'date-fns'
import Seo from '../components/Seo'

type BlogProps = {
  postsMetaData: PostMetaData[]
}

const Home: NextPage<BlogProps> = ({ postsMetaData }) => {
  return (
    <Layout>
      <Seo path="/" />
      <div className="mx-auto max-w-3xl px-4">
        <AboutMe />

        <h2 className="text-xl pb-6 pt-12">
          <span className="pr-2">Articles</span>
          {/* <Link href="/blog">
            <a>
              <FontAwesomeIcon
                className="text-secondary text-md duration-500 transition-colors hover:text-primary"
                icon={faRssSquare}
              />
            </a>
          </Link> */}
        </h2>
        <ul className="border-t border-zinc-800">
          {postsMetaData.map(({ slug, date, title }) => (
            <li key={slug} className="border-b border-zinc-800">
              <Link href={`/blog/${slug}`}>
                <a className="py-6 no-underline text-primary sm:text-secondary hover:text-primary focus:text-primary flex justify-between transition-colors duration-300 flex-col sm:flex-row">
                  <span>{title}</span>
                  <span className="text-sm text-secondary">
                    {format(new Date(date ? date : ''), 'MMM d, yyyy')}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = () => {
  return {
    props: {
      postsMetaData: getSortedPostsMetaData(),
    },
  }
}

export default Home