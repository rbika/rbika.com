import Image from 'next/image'
import profileImage from '@/../public/profile.jpg'
import { socialItems } from '@/utils/constants'

const ArticleFooter = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const handleBackToTopCLick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div {...props}>
      <div className="flex gap-4 items-center flex-row">
        <div className="w-[56px] h-[56px] overflow-hidden rounded-full">
          <Image
            width="56"
            height="56"
            src={profileImage}
            alt="profile"
            placeholder="blur"
          />
        </div>
        <div>
          <p className="text-secondary text-left text-sm">
            Written by Rafael Bika(s).
          </p>
          <ul className="flex gap-3 mt-2 text-secondary justify-start items-center">
            {socialItems.map((item) => {
              const { label, icon: Icon, url } = item
              return (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center no-underline text-secondary hover:text-primary focus:text-primary"
                  >
                    <Icon className="h-[20px] w=[20px]" />
                    <span aria-label={label} />
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
