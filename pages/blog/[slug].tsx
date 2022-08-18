import { format } from 'date-fns'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Layout from '../../components/Layout'
import Post from '../../types/post'
import PostsStaticPathsParams from '../../types/postsStaticPathsParams'
import { getAllPostsSlugs, getPostData } from '../../utils/blog'

type PostProps = {
  postData: Post
}

const Post: NextPage<PostProps> = ({ postData }: any) => {
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4">
        <header className="mb-12">
          <h1 className="text-4xl leading-tight">{postData.title}</h1>
          <p className="text-secondary mt-4 sm:mt-2 text-sm">
            {postData?.date
              ? format(new Date(postData.date), 'MMM d, yyyy')
              : '---'}
          </p>
        </header>
        <div
          className="text-secondary max-w-none prose dark:prose-invert prose-h2:font-medium"
          dangerouslySetInnerHTML={{ __html: postData.content }}
        />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
}: any) => {
  return {
    props: {
      postData: await getPostData(params.slug),
    },
  }
}

export const getStaticPaths: GetStaticPaths<PostsStaticPathsParams> = () => {
  return {
    paths: getAllPostsSlugs(),
    fallback: false,
  }
}

export default Post
