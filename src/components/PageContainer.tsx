import { motion } from 'framer-motion'

type PageContainerProps = {
  children: React.ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <motion.div
      initial="initial"
      animate="visible"
      variants={{
        initial: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
      className="mx-auto max-w-3xl px-4"
    >
      {children}
    </motion.div>
  )
}

export default PageContainer
