---
title: How to add Google Analytics to a Next.js app
date: '2022-08-25T00:00:00-03:00'
---

This tutorial covers how to set up Google Analytics in a Next.js application.

I recently recreated this website from scratch using Next.js and some other cool tools. If you want to learn more about the tech stack check [this post](notion://www.notion.so/rbika/How-to-add-Google-Analytics-to-a-Next-js-app-12358d4d008043c28b4cd201a83f6aad).

This post assumes you have a Google Analytics account and a Next.js project. If you didn’t create an Analytics account yet, you can create and set up one by following this [official guide](https://support.google.com/analytics/answer/9304153?hl=en#property).

## Creating a data stream

To start collecting data for your website, first you need to create a data stream on Google Analytics. Open https://analytics.google.com/ and:

1. Click on **Admin** (left side menu) → **Data Streams**
2. Create a new **web** stream with your project's data.

Once you are done, you should see a page similar to the image below, displaying the Measurement ID, used to identify your data stream:

![image](/images/blog/how-to-add-google-analytics-to-a-nextjs-app-ga.png)

Google analytics conveniently provides the code snippet with the script tags we need to add metrics to our website. From the same page you got the Measurement ID, click on:

**View tag instructions** → select the **Install manually** tab.

You should see the code below with `<You Measurement ID>` replaced by your actual ID:

```html
<!-- Google tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=<You Measurement ID>"
></script>
<script>
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', '<You Measurement ID>')
</script>
```

## Updating the code snippet

Next.js has a [Script component](https://nextjs.org/docs/basic-features/script) that extends the HTML `<script>` element and is the recommended way for loading third-party scripts to our project. To make use of this component you'll need to change a few things in the original snippet. The final code looks like this:

```jsx
import Script from 'next/script'

// Google tag (gtag.js)
<Script
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=<You Measurement ID>"
></Script>
<Script strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', '<You Measurement ID>')
  `}
</Script>
```

1. We imported the Next’s `<Script>` component and replaced the HTML `<script>` tag.
2. We also set the `strategy` property of each Script component to `afterInteractive`. Scripts that use the afterInteractive strategy are injected client-side and will run after Next.js hydrates the page. Note this is the default value, so you can omit it if you want to. To learn more about the strategy property see [this page](https://nextjs.org/docs/basic-features/script#strategy) from Next.js docs.

## Adding Google Analytics to the project

The only thing left to do is add our code to the application, and the best place to put it is inside a [Custom `App`](https://nextjs.org/docs/advanced-features/custom-app) component. If you don't have a `./pages/_app.js` file in your project yet, you can create one with the following content:

```jsx
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

Now add our scripts to it:

```jsx {2,7-20}
import App from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=<You Measurement ID>"
      ></Script>
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', '<You Measurement ID>')
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

## Conclusion

Now you have a Next.js application with Google Analytics set up and you can verify it is working by typing `dataLayer` in the browsers' console.

![image](/images/blog/how-to-add-google-analytics-to-a-nextjs-app-console.png)

If everything is correct you should see a value like the image above. Note it may take from 24h to 48h to activate your Analytics data collection so give it some time before checking the report dashboard.

I hope you enjoyed this article and I'll see you in the next one.
