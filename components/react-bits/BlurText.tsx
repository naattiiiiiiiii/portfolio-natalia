'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export default function BlurText({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
}: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={
        isVisible
          ? { opacity: 1, filter: 'blur(0px)' }
          : { opacity: 0, filter: 'blur(10px)' }
      }
      transition={{
        duration,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      {text}
    </motion.span>
  )
}
