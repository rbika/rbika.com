import { SocialItem } from '@/types/socialLink'
import XTwitter from '../icons/XTwitter'
import MastodonIcon from '../icons/Mastodon'
import GithubIcon from '../icons/Github'

export const socialItems: SocialItem[] = [
  {
    label: 'X / Twitter',
    icon: XTwitter,
    url: 'https://x.com/rbika',
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
]
