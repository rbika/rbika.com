import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { SocialLink } from '@/types/socialLink'

export const socialItems: SocialLink[] = [
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
