import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const socialItens = [
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

const AboutMe = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex gap-8 items-center flex-col sm:flex-row" {...props}>
      <div className="flex-shrink-0">
        <Image
          width={100}
          height={100}
          src="/profile.png"
          alt="profile"
          className="rounded-full"
        />
      </div>
      <div>
        <p className="text-secondary text-center sm:text-left">
          <span>Hey, my name is Rafael but you can call me Bika/Bikas.</span>{' '}
          <br className="hidden sm:block" />
          <span>
            I&apos;m a frontend developer from Brazil currently working at{' '}
            <a
              href="https://bancointer.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Inter
            </a>
            .
          </span>
        </p>
        <ul className="flex gap-10 mt-4 justify-center sm:justify-start">
          {socialItens.map((item) => {
            const { label, icon, url } = item
            return (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 no-underline text-secondary hover:text-primary focus:text-primary"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className=" text-[24px] sm:text-[20px]"
                  />
                  <span className="text-sm hidden sm:block">{label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
