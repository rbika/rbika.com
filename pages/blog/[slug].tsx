import { format } from 'date-fns'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Seo from '../../components/Seo'
import Post from '../../types/post'
import PostsStaticPathsParams from '../../types/postsStaticPathsParams'
import { getAllPostsSlugs, getPostData } from '../../utils/blog'
import ArticleFooter from '../../components/ArticleFooter'
import PageContainer from '../../components/PageContainer'

type PostProps = {
  postData: Post
}

const Post: NextPage<PostProps> = ({ postData }: any) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <PageContainer>
      <Seo path={`/blog/${slug}`} />

      <div>
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

        <ArticleFooter className="mt-12" />
      </div>
    </PageContainer>
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
