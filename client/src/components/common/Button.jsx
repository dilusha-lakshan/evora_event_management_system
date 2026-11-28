import { motion } from 'motion/react'

function Corner({ position, size }) {
  const paths = {
    topLeft: 'M8 16V8H16',
    topRight: 'M16 16V8H8',
    bottomLeft: 'M8 8V16H16',
    bottomRight: 'M16 8V16H8',
  }

  const offset = -(size * (8 / 24) + 0.75)

  const positionStyles = {
    topLeft: { top: offset, left: offset },
    topRight: { top: offset, right: offset },
    bottomLeft: { bottom: offset, left: offset },
    bottomRight: { bottom: offset, right: offset },
  }

  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none absolute text-primary transition-colors duration-300"
      style={{
        width: size,
        height: size,
        ...positionStyles[position],
      }}
      initial={{ x: 0, y: 0 }}
      variants={{
        initial: { x: 0, y: 0 },
        hover: {
          x: position.includes('Left') ? -5 : 5,
          y: position.includes('top') ? -5 : 5,
        },
      }}
    >
      <path d={paths[position]} />
    </motion.svg>
  )
}

function Button({
  children,
  variant = 'default',
  className = '',
  size = 20,
  type = 'button',
  disabled = false,
  glow = false,
  ...props
}) {
  const variants = {
    default:
      'bg-primary text-white border-primary hover:bg-primary-hover',

    secondary:
      'bg-transparent text-main-text border-current/30 hover:bg-white/10',

    outline:
      'bg-transparent text-primary border-primary/70 hover:bg-primary/10',
  }

  const baseStyles = [
    'group relative inline-flex items-center justify-center overflow-visible',
    'border-[1.5px] px-8 py-4',
    'cursor-pointer select-none no-underline',
    'uppercase tracking-[0.2em] text-sm font-medium',
    'transition-all duration-300',
    'rounded-none',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'active:scale-[0.985]',
    variants[variant] || variants.default,
    className,
  ].join(' ')

  return (
    <motion.button
      type={type}
      className={baseStyles}
      disabled={disabled}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {glow && (
        <span className="pointer-events-none absolute inset-0 -z-10 bg-primary opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40" />
      )}

      {children}

      <Corner position="topLeft" size={size} />
      <Corner position="topRight" size={size} />
      <Corner position="bottomLeft" size={size} />
      <Corner position="bottomRight" size={size} />
    </motion.button>
  )
}

export default Button