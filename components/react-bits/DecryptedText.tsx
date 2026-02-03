'use client'

import { useEffect, useState, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

interface DecryptedTextProps {
  text: string
  className?: string
  speed?: number
  characters?: string
}

export default function DecryptedText({
  text,
  className = '',
  speed = 50,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*',
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isDecrypting, setIsDecrypting] = useState(true)
  const iterationRef = useRef(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(text)
      setIsDecrypting(false)
      return
    }

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iterationRef.current) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')
      )

      if (iterationRef.current >= text.length) {
        clearInterval(interval)
        setIsDecrypting(false)
      }

      iterationRef.current += 1 / 3
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, characters, prefersReducedMotion])

  return (
    <span className={className} data-decrypting={isDecrypting}>
      {displayText}
    </span>
  )
}
