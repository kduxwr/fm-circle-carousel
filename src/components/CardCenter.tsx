import { MotionValue, motion } from 'framer-motion'

type Props = {
  centerYOffset: number
  degree: MotionValue<number>
  children: React.ReactNode
}

export const CardCenter: React.FC<Props> = ({ degree, centerYOffset, children }) => {
  return (
    <motion.div className="absolute" style={{ bottom: `-${centerYOffset}px`, rotate: degree }}>
      {children}
    </motion.div>
  )
}
