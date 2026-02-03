'use client'

import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface AnimatedListProps {
  children: ReactNode[]
  className?: string
  delay?: number
  staggerDelay?: number
}

export default function AnimatedList({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.1,
}: AnimatedListProps) {
  const prefersReducedMotion = useReducedMotion()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1] as const,
      }
    },
  }

  return (
    <motion.ul
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children.map((child, index) => (
        <motion.li key={index} variants={item}>
          {child}
        </motion.li>
      ))}
    </motion.ul>
  )
}
