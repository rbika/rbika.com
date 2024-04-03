import { HTMLAttributes } from 'react'

export type SocialItem = {
  label: string
  icon: React.JSXElementConstructor<HTMLAttributes<SVGElement>>
  url: string
}
