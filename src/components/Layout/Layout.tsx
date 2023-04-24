import Header from '@/components/Header'
import { motion } from 'framer-motion'

type LayoutProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="pb-16">
      <Header />
      <motion.div
        initial="initial"
        animate="visible"
        variants={{
          initial: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
        className="content"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Layout
