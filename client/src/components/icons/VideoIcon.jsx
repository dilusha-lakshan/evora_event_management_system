import { motion, useAnimation, useReducedMotion } from 'motion/react'
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'

const VideoIcon = forwardRef(function VideoIcon(
  {
    onMouseEnter,
    onMouseLeave,
    className = '',
    size = 32,
    duration = 1,
    isAnimated = true,
    color,
    ...props
  },
  ref
) {
  const controls = useAnimation()
  const reduced = useReducedMotion()
  const isControlled = useRef(false)

  const start = useCallback(() => {
    if (reduced) return
    controls.start('pan')
  }, [controls, reduced])

  const stop = useCallback(() => {
    controls.start('rest')
  }, [controls])

  useImperativeHandle(ref, () => {
    isControlled.current = true
    return {
      startAnimation: start,
      stopAnimation: stop,
    }
  })

  const handleEnter = useCallback(
    (e) => {
      if (!isAnimated || reduced) return
      if (!isControlled.current) start()
      else onMouseEnter?.(e)
    },
    [isAnimated, reduced, start, onMouseEnter]
  )

  const handleLeave = useCallback(
    (e) => {
      if (!isControlled.current) stop()
      else onMouseLeave?.(e)
    },
    [stop, onMouseLeave]
  )

  const cameraVariants = {
    rest: { rotate: 0 },
    pan: {
      rotate: [0, -6, -6, 2.5, 0],
      transition: {
        duration: 0.75 * duration,
        ease: 'easeInOut',
        times: [0, 0.32, 0.5, 0.8, 1],
      },
    },
  }

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
      style={{ color, ...props.style }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={controls}
        initial="rest"
      >
        <motion.g
          variants={cameraVariants}
          style={{
            transformBox: 'view-box',
            originX: '9px',
            originY: '18px',
          }}
        >
          <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
          <rect x="2" y="6" width="14" height="12" rx="2" />
        </motion.g>
      </motion.svg>
    </motion.div>
  )
})

export { VideoIcon }
export default VideoIcon