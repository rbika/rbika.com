import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profileImage from '../../../public/profile.png'
import { socialItems } from '@/utils/constants'

const AboutMe = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex gap-8 items-center flex-col sm:flex-row" {...props}>
      <div className="flex-shrink-0">
        <Image
          width={100}
          height={100}
          src={profileImage}
          alt="profile"
          className="rounded-full"
        />
      </div>
      <div>
        <p className="text-secondary text-center sm:text-left">
          <span>Hey, my name is Rafael but you can call me Bika/Bikas.</span>{' '}
          <br className="hidden sm:block" />
          <span>
            I&apos;m a frontend developer from Brazil currently working at{' '}
            <a
              href="https://bancointer.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Inter
            </a>
            .
          </span>
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
                  <span className="text-sm hidden sm:block">{label}</span>
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
