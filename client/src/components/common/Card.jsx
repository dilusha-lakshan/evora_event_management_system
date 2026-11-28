
import { motion } from 'motion/react'

function Card({
  children,
  className = '',
  hover = false,
  ...props
}) {
  const cardStyles = [
    'border border-border bg-surface rounded-none',
    hover
      ? 'transition-colors duration-300 hover:border-primary/60'
      : '',
    className,
  ].join(' ')

  if (hover) {
    return (
      <motion.div
        className={cardStyles}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={cardStyles} {...props}>
      {children}
    </div>
  )
}

export default Card
