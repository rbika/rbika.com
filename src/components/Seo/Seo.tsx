import Head from 'next/head'

type SeoProps = {
  title?: string
  description?: string
  path: string
  type?: 'article' | 'website'
  image?: string
}

const defaultTitle = 'R Bika(s) • Frontend Developer'
const defaultDescription = `Hey, my name is Rafael but you can call me Bika/Bikas. I'm a frontend developer from Brazil currently working at Inter.`

const Seo = ({
  title = defaultTitle,
  description = defaultDescription,
  path = '',
  type = 'website',
  image = '/profile.png',
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
      <meta name="og:image" content={image} />
      <meta name="og:url" content={`http://rbika.com${path}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="https://rbika.com" />
      <meta property="twitter:url" content={`http://rbika.com${path}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}

export default Seo
