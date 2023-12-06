import { SocialItem } from '@/types/socialLink'
import {
  faGithub,
  faLinkedin,
  faMastodon,
  faThreads,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

export const socialItems: SocialItem[] = [
  {
    label: 'Twitter',
    icon: faXTwitter,
    url: 'https://twitter.com/rbika',
  },
  {
    label: 'Mastodon',
    icon: faMastodon,
    url: 'https://mastodon.social/@rbika',
  },
  {
    label: 'Threads',
    icon: faThreads,
    url: 'https://threads.net/@rbika',
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
