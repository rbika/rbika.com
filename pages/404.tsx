import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const NotFound: NextPage = () => {
  return (
    <Layout>
      <Seo
        title="404 | Page not found"
        description="The page you are looking for does not exist"
        path="/404"
      />
      <div className="mx-auto max-w-3xl px-4 pb-40 flex flex-col h-[calc(100vh_-_176px)] justify-center items-center">
        <h1 className="mb-2 tracking-widest font-thin text-6xl text-primary">
          404
        </h1>
        <h2 className="text-lg text-secondary font-thin">
          Page not found.{' '}
          <Link href="/">
            <a>Go home</a>
          </Link>
          .
        </h2>
      </div>
    </Layout>
  )
}

export default NotFound
