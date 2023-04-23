import { NextPage } from 'next'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    name: 'Personal website',
    description:
      'My personal website (this site) build with Next.js and hosted at Vercel.',
    stack: ['React', 'Next.js', 'Typescript', 'Tailwind'],
    github: 'https://github.com',
    url: 'https://rbika.com',
  },
  {
    name: 'Pomo Web',
    description: 'A pomodoro timer web app built with React.',
    stack: ['React', 'Typescript', 'Emotion', 'Testing Library', 'Stryker'],
    github: 'https://github.com/rbika/pomo-web',
    url: 'https://pomo-web.netlify.app/',
  },
]

const Projects: NextPage = () => {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-[#5DD8FF] text-5xl leading-tight font-medium mb-8 ">
          Projects
        </h1>
        <ul>
          {projects.map((project) => {
            return (
              <li key={project.name}>
                <ProjectCard project={project} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Projects
