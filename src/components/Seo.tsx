import Head from 'next/head'

type SeoProps = {
  title?: string
  description?: string
  path: string
}

const defaultTitle = 'R Bika(s) • Frontend Developer'
const defaultDescription = `Hey, my name is Rafael but you can call me Bika/Bikas. I'm a frontend developer from Brazil currently working at Inter.`

const Seo = ({
  title = defaultTitle,
  description = defaultDescription,
  path = '',
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content="/profile.png" />
      <meta name="og:url" content={`http://rbika.com${path}`} />
    </Head>
  )
}

export default Seo