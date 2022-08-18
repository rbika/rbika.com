---
title: How I built this website
date: '2022-08-19T00:00:00-03:00'
---

Every time I want to learn a new technology I build a small side project. Building something from scratch is one of the best ways to learn new skills and improve the ones you already know. Tutorials are a good starting point but they are designed to work perfectly, so you usually don’t face any challenges. Building something on your own is much harder. You will hit real-life problems on the way and you will need to solve them to keep going.

This website is a side project I use to learn new things. It had many versions with many different stacks, and I’m always recreating and updating it to try out a new framework or tool.

## Technology stack

This time, I used some technologies I wanted to try for a while but didn’t have the opportunity to work with them. I also used some tools I didn’t even know when I started working on this new version. Here are the most relevant ones:

- [React](https://reactjs.org/) + [Typescript](https://www.typescriptlang.org/): This is a combination I’ve been using for a while and I'm happy with it.
- [Next.js](https://nextjs.org/): React framework I had never worked with, but always heard good things about it. It was a very nice experience.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework. In my last projects, I used Styled Components, and this time I decided to choose something different. I felt that even learning the classes' names on the go it was easy and fast to work with Tailwind.
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/): To enforce code quality and styles, these are one of the first things I configure when starting a new project.
- [Husky](https://typicode.github.io/husky/#/): To run tests, lints, and formatters using a pre-commit hook. This way I'm able to get errors as soon as possible.
- [Framer Motion](https://www.framer.com/motion/): React Animation library. I found this one by accident and I was impressed by how much cool things you can do with it. At the time of this writing, I’m just using it to make a fade in/out effect during page navigation.
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): My go-to tools for unit testing.
- [Unified](https://unifiedjs.com/): The blog posts are written in markdown and this tool, combined with some plugins, is used to transform them into HTML during build time.
- [Prismjs](https://prismjs.com/index.html): Syntax highlighter for code blocks.

And here a the list of services:

- [Github](https://github.com/): Where I host my personal projects.
- [Vercel](https://vercel.com/): Easy and simple deployments using Github integration.

## Design

The design and layout inspiration came from the websites of other developers like ([Kent C Dodds](https://kentcdodds.com/), [Zeno Rocha](https://zenorocha.com/), and [Dan Abramov](https://overreacted.io/)). The colors I'm using, at least for now, are just the [default palette](https://tailwindcss.com/docs/customizing-colors#arbitrary-values) provided by Tailwind CSS, which is pretty good! This project also features a light/dark theme that changes automatically based on the system configuration.

## Conclusion

I learned a lot of cool things while implementing this project, and I plan to keep playing with it so I can experiment and learn even more things. If you haven't built something from scratch I highly recommend you give it a try. You'll be amazed by how many things you'll learn along the way.

You can view this website's source code on [Github](https://github.com/rbika/rbika.com) if you are interested.

I hope you enjoyed this article and I'll see you in the next one.
