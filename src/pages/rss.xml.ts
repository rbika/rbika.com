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
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
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
