import { format } from 'date-fns'
import PostMetaData from '@/types/postMetaData'
import ArticleFooter from '../ArticleFooter'
import PageContainer from '../PageContainer'
import Seo from '../Seo'
import Image from 'next/image'

type ArticleProps = {
  children: React.ReactNode
  meta: PostMetaData
} & React.HTMLAttributes<HTMLDivElement>

const Article = ({ children, meta }: ArticleProps) => {
  return (
    <PageContainer>
      <Seo
        title={meta.title}
        description={meta.description}
        path={`/blog/${meta.slug}`}
        type="article"
        image={meta.coverImage}
      />

      <header className="mb-12">
        <h1 className="text-4xl leading-tight">{meta.title}</h1>
        <p className="text-secondary mt-4 mb-8 pb-8 sm:mt-2 text-sm border-b border-zinc-800">
          {meta?.date ? format(new Date(meta.date), 'MMM d, yyyy') : '---'}
        </p>
      </header>

      <div className="text-secondary max-w-none prose dark:prose-invert prose-h2:font-medium">
        {children}
      </div>
      <ArticleFooter className="mt-12" />
    </PageContainer>
  )
}

export default Article
