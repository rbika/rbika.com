import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import profileImage from '../public/profile.png'

const socialItems = [
  {
    label: 'Email',
    icon: faEnvelope,
    url: 'mailto:rbikadev@gmail.com',
  },
  {
    label: 'Twitter',
    icon: faTwitter,
    url: 'https://twitter.com/rbika',
  },
  {
    label: 'Github',
    icon: faGithub,
    url: 'https://github.com/rbika',
  },
  {
    label: 'Linkedin',
    icon: faLinkedin,
    url: 'https://linkedin.com/in/rbika',
  },
]

const ArticleFooter = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const handleBackToTopCLick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div {...props}>
      <div className="flex gap-8 items-center flex-row">
        <div className="flex-shrink-0">
          <Image
            width={56}
            height={56}
            src={profileImage}
            alt="profile"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-secondary text-left text-sm">
            Written by Rafael Bikas.
          </p>
          <ul className="flex gap-3 mt-1 justify-start">
            {socialItems.map((item) => {
              const { icon, url } = item
              return (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center no-underline text-secondary hover:text-primary focus:text-primary"
                  >
                    <FontAwesomeIcon icon={icon} className="text-[16px]" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button onClick={handleBackToTopCLick}>↑ Back to top</button>
      </div>
    </div>
  )
}

export default ArticleFooter
