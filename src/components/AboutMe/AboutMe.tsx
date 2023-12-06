import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socialItems } from '@/utils/constants'

const AboutMe = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex gap-8 items-center flex-col sm:flex-row" {...props}>
      <div>
        <p className="text-secondary text-center sm:text-left">
          <span>Hi, my name is Rafael but you can call me Bika/Bikas.</span>{' '}
          <br className="hidden sm:block" />
          <span>I write about front-end and web development.</span>
        </p>
        <ul className="flex gap-10 mt-4 justify-center sm:justify-start">
          {socialItems.map((item) => {
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
                  <span className="text-sm hidden sm:block" aria-label={label}>
                    {label}
                  </span>
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
