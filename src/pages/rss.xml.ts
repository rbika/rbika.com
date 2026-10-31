import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

interface Context {
  site: string;
}

export async function GET(context: Context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  return rss({
    title: "R Bika(s)'s Blog ",
    description: 'A blog about web development and productivity tips',
    site: context.site,
    items: sortedPosts.map((post) => {
      const link = new URL(
        `/blog/${post.id}/?utm_source=rss`,
        context.site,
      ).href;

      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: `${post.data.description}<p><a href="${link}">Continue reading…</a></p>`,
        link,
      };
    }),
    customData: `
      <language>en-us</language>
      <category>Web Development</category>
      <image>
        <url>https://rbika.com/profile.jpg</url>
        <title>R Bika(s) Blog</title>
        <link>https://rbika.com</link>
      </image>
    `,
  });
}
