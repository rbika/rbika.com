import { SocialItem } from '@/types/socialLink'
import BlueskyIcon from '../icons/Bluesky'
import MastodonIcon from '../icons/Mastodon'
import GithubIcon from '../icons/Github'
import LinkedinIcon from '../icons/Linkedin'

export const socialItems: SocialItem[] = [
  {
    label: 'Bluesky',
    icon: BlueskyIcon,
    url: 'https://bsky.app/profile/rbika.bsky.social',
  },
  {
    label: 'Mastodon',
    icon: MastodonIcon,
    url: 'https://mastodon.social/@rbika',
  },
  {
    label: 'Github',
    icon: GithubIcon,
    url: 'https://github.com/rbika',
  },
  {
    label: 'Linkedin',
    icon: LinkedinIcon,
    url: 'https://linkedin.com/in/rbika',
  },
]
