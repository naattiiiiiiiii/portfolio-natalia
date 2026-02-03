'use client'

import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface FadeInScaleProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  scale?: number
}

export default function FadeInScale({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  scale = 0.95,
}: FadeInScaleProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
