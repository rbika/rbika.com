import type { GetStaticProps, NextPage } from 'next'
import { format } from 'date-fns'
import { getUsesData } from '../utils/uses'
import UsesData from '../types/usesData'
import Seo from '../components/Seo'

type UsesProps = {
  usesData: UsesData
}

const Uses: NextPage<UsesProps> = ({ usesData }) => {
  return (
    <>
      <Seo path="/uses" />
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-primary text-5xl leading-tight font-medium mb-8 ">
          Uses
        </h1>
        <p className="text-secondary">
          It&apos;s nice to find new apps, tools, and gear other developers use,
          so here is my list. You can also check more &ldquo;uses&rdquo; pages
          on this website:{' '}
          <a href="https://uses.tech/" target="_blank" rel="noreferrer">
            uses.tech
          </a>
          .
        </p>
        <p className="text-secondary">
          If you find a missing link or something wrong please let me know:{' '}
          <a href="https://twitter.com/rbika" target="_blank" rel="noreferrer">
            @rbika
          </a>
          .
        </p>
        <p className="text-secondary mt-2 mb-8">
          Last update:{' '}
          {usesData?.lastUpdate
            ? format(new Date(usesData.lastUpdate), 'MMM d, yyyy')
            : '---'}
          .
        </p>
        <div
          className="
            text-secondary max-w-none
            prose dark:prose-invert 
            prose-h2:font-medium 
            prose-a:no-underline prose-a:font-normal prose-a:underline-offset-1 hover:prose-a:decoration-solid hover:prose-a:underline
          "
          dangerouslySetInnerHTML={{ __html: usesData?.content }}
        />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<UsesProps> = async () => {
  return {
    props: {
      usesData: await getUsesData(),
    },
  }
}

export default Uses
