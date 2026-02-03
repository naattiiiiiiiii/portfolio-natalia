'use client'

import dynamic from 'next/dynamic'
import { stats } from '@/components/data/portfolio-data'

const CountUp = dynamic(() => import('@/components/react-bits/CountUp'), {
  ssr: false,
})

const ScrollReveal = dynamic(() => import('@/components/react-bits/ScrollReveal'), {
  ssr: false,
})

// Parse stat numbers - handles formats like "2+", "6+", "3", "C2"
function parseStatNumber(value: string): { number: number | null; prefix: string; suffix: string } {
  // Check if it's a special case like "C2"
  const letterMatch = value.match(/^([A-Za-z]+)(\d+)$/)
  if (letterMatch) {
    return { number: parseInt(letterMatch[2]), prefix: letterMatch[1], suffix: '' }
  }

  // Check for number with + suffix
  const plusMatch = value.match(/^(\d+)\+$/)
  if (plusMatch) {
    return { number: parseInt(plusMatch[1]), prefix: '', suffix: '+' }
  }

  // Plain number
  const plainNumber = parseInt(value)
  if (!isNaN(plainNumber)) {
    return { number: plainNumber, prefix: '', suffix: '' }
  }

  // Can't parse - return null
  return { number: null, prefix: '', suffix: value }
}

export default function Stats() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-harmony-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => {
            const parsed = parseStatNumber(stat.number)

            return (
              <ScrollReveal
                key={stat.label}
                delay={index * 0.1}
                className="text-center lg:text-left"
              >
                <span className="text-xs text-harmony-navy-muted tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="mt-2">
                  <span className="text-5xl sm:text-6xl font-light text-harmony-navy">
                    {parsed.number !== null ? (
                      <CountUp
                        end={parsed.number}
                        duration={2000}
                        prefix={parsed.prefix}
                        suffix={parsed.suffix}
                      />
                    ) : (
                      stat.number
                    )}
                  </span>
                </div>
                <p className="mt-2 text-harmony-navy-muted">
                  {stat.label}
                </p>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
