import { SocialItem } from '@/types/socialLink'
import {
  faGithub,
  faLinkedin,
  faMastodon,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export const socialItems: SocialItem[] = [
  {
    label: 'Twitter',
    icon: faTwitter,
    url: 'https://twitter.com/rbika',
  },
  {
    label: 'Mastodon',
    icon: faMastodon,
    url: 'https://mastodon.social/@rbika',
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
