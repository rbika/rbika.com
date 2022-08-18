import '../styles/globals.css'
import '../styles/prism-coldark.css'
import '../styles/prose.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

const env = process.env.NODE_ENV

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {env === 'production' && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-VTE1P0SNES" />
          <Script
            id="ga"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'G-VTE1P0SNES');
                `,
            }}
          ></Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  )
}

export default App
