import { format } from 'date-fns'
import PostMetaData from '@/types/postMetaData'
import PageContainer from '../PageContainer'
import Seo from '../Seo'
import profileImage from '@/../public/profile.jpg'
import Image from 'next/image'
import { socialItems } from '@/utils/constants'

interface ArticleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  meta: PostMetaData
}

const Article = ({ children, meta }: ArticleProps) => {
  const handleBackToTopCLick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <PageContainer>
      <Seo
        title={meta.title}
        description={meta.description}
        path={`/blog/${meta.slug}`}
        type="article"
        image={meta.coverImage}
      />

      <header className="mb-4">
        <h1 className="text-4xl leading-tight">{meta.title}</h1>

        <div className="flex gap-4 items-center flex-row pb-6 my-6 border-b border-zinc-800">
          <div className="w-[36px] h-[36px] overflow-hidden rounded-full">
            <Image
              width="36"
              height="36"
              src={profileImage}
              alt="profile"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-secondary text-sm">Rafael Bika(s)</p>
            <p className="text-secondary text-xs">
              {meta?.date ? format(new Date(meta.date), 'MMM d, yyyy') : '---'}
            </p>
          </div>
        </div>
      </header>

      <div className="text-secondary max-w-none prose dark:prose-invert prose-h2:font-medium border-b border-zinc-800 pb-10 mb-10">
        {children}
      </div>

      <div className="flex justify-center mt-10 text-sm text-secondary">
        <button onClick={handleBackToTopCLick}>↑ Back to top</button>
      </div>
    </PageContainer>
  )
}

export default Article
