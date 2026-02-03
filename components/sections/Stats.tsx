'use client'

import dynamic from 'next/dynamic'
import { stats } from '@/components/data/portfolio-data'

const CountUp = dynamic(() => import('@/components/react-bits/CountUp'), {
  ssr: false,
})

const ScrollReveal = dynamic(() => import('@/components/react-bits/ScrollReveal'), {
  ssr: false,
})

const FadeInScale = dynamic(() => import('@/components/react-bits/FadeInScale'), {
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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-harmony-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-16">
          {stats.map((stat, index) => {
            const parsed = parseStatNumber(stat.number)

            return (
              <ScrollReveal
                key={stat.label}
                delay={index * 0.15}
                direction="up"
              >
                <div className="text-center lg:text-left group">
                  <FadeInScale delay={0.1}>
                    <span className="text-[10px] sm:text-xs text-harmony-navy-muted tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </FadeInScale>
                  <div className="mt-1 sm:mt-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-harmony-navy group-hover:text-harmony-green transition-colors duration-500">
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
                  <FadeInScale delay={0.2}>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-harmony-navy-muted group-hover:text-harmony-navy transition-colors">
                      {stat.label}
                    </p>
                  </FadeInScale>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
