'use client'

import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface GradientTextProps {
  children: ReactNode
  className?: string
  from?: string
  to?: string
  animate?: boolean
}

export default function GradientText({
  children,
  className = '',
  from = '#1a365d',
  to = '#4a7c59',
  animate = true,
}: GradientTextProps) {
  const prefersReducedMotion = useReducedMotion()

  const shouldAnimate = animate && !prefersReducedMotion

  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${from}, ${to}, ${from})`,
        backgroundSize: shouldAnimate ? '200% 100%' : '100% 100%',
      }}
      animate={shouldAnimate ? {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      } : undefined}
      transition={shouldAnimate ? {
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      } : undefined}
    >
      {children}
    </motion.span>
  )
}
