import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HeaderMenuItem from '@/types/headerMenuItem'

const menu: HeaderMenuItem[] = [
  { label: 'Home', url: '/' },
  { label: 'Uses', url: '/uses' },
]

const Header = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter()

  return (
    <div
      className="max-w-3xl w-full px-4 mx-auto py-7 mb-7 flex justify-between items-center"
      {...props}
    >
      <Link
        href="/"
        className="leading-7 text-[22px] tracking-widest duration-300 no-underline font-bold"
      >
        R Bika(s)
      </Link>
      <ul className="text-secondary flex justify-center gap-8 uppercase text-[13px]">
        {menu.map((menuItem) => {
          const isActive = router.pathname === menuItem.url
          return (
            <li key={menuItem.url}>
              <Link
                href={menuItem.url}
                className={cn(
                  'animated-underline text-secondary transition-colors duration-500 hover:text-primary no-underline',
                  { active: isActive }
                )}
              >
                {menuItem.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Header
