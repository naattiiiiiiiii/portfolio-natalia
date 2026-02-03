'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export default function SplitText({
  text,
  className = '',
  delay = 50,
  duration = 0.5,
}: SplitTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>
  }

  const letters = text.split('')

  return (
    <span className={className} aria-label={text}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration,
            delay: index * (delay / 1000),
            ease: [0.215, 0.61, 0.355, 1],
          }}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  )
}
