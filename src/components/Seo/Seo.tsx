import Head from 'next/head'

type SeoProps = {
  title?: string
  description?: string
  path: string
  type?: 'article' | 'website'
}

const defaultTitle = 'R Bika(s) • Frontend Developer'
const defaultDescription = `Hey, my name is Rafael but you can call me Bika/Bikas. I'm a frontend developer from Brazil currently working at Inter.`

const Seo = ({
  title = defaultTitle,
  description = defaultDescription,
  path = '',
  type = 'website',
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Web development, Frontend, Front-end, React, Javascript"
      />

      {/* Open Graph */}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content={type} />
      <meta name="og:image" content="/profile.png" />
      <meta name="og:url" content={`http://rbika.com${path}`} />
    </Head>
  )
}

export default Seo
