import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profileImage from '@/../public/profile.png'
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
        <Image
          width={56}
          height={56}
          src={profileImage}
          alt="profile"
          className="rounded-full"
        />
        <div>
          <p className="text-secondary text-left text-sm">
            Written by Rafael Bika(s).
          </p>
          <ul className="flex gap-3 mt-2 justify-start">
            {socialItems.map((item) => {
              const { label, icon, url } = item
              return (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center no-underline text-secondary hover:text-primary focus:text-primary"
                  >
                    <FontAwesomeIcon icon={icon} className="text-[18px]" />
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
