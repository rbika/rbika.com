import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Project from '../types/project'

type ProjectCardProps = {
  project: Project
} & React.HTMLAttributes<HTMLDivElement>

function ProjectCard({ project }: ProjectCardProps) {
  const { name, github, stack, description, url } = project

  return (
    <div
      className="p-6 border border-[#23252B] rounded-md flex flex-col mb-4"
      key={name}
    >
      <header className="flex items-center justify-between pb-4">
        <div className="text-xl font-medium">{name}</div>
        <div className="flex gap-4 text-[20px]">
          <a href={url}>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-secondary hover:text-primary transition-colors duration-300"
            />
          </a>
          <a href={github}>
            <FontAwesomeIcon
              icon={faGithub}
              className="text-secondary hover:text-primary transition-colors duration-300"
            />
          </a>
        </div>
      </header>
      <p className="text-secondary pb-6 flex-auto">{description}</p>
      <footer>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 pb-1 text-xs text-secondary font-mono">
          {stack.map((item) => {
            return (
              <li className="rounded py-1 px-2 bg-[#1b1e22]" key={item}>
                {item}
              </li>
            )
          })}
        </ul>
      </footer>
    </div>
  )
}

export default ProjectCard
