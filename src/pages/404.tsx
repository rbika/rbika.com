import type { NextPage } from 'next'
import Link from 'next/link'
import Seo from '@/components/Seo'
import PageContainer from '@/components/PageContainer'

const NotFound: NextPage = () => {
  return (
    <PageContainer>
      <Seo
        title="404 | Page not found"
        description="The page you are looking for does not exist"
        path="/404"
      />
      <div className="pb-40 flex flex-col h-[calc(100vh_-_176px)] justify-center items-center">
        <h1 className="mb-2 tracking-widest font-thin text-6xl text-primary">
          404
        </h1>
        <h2 className="text-lg text-secondary font-thin">
          Page not found. <Link href="/">Go home</Link>.
        </h2>
      </div>
    </PageContainer>
  )
}

export default NotFound
