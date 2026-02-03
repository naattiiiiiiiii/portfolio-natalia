'use client'

import dynamic from 'next/dynamic'
import { Code2, Brain, Wrench } from 'lucide-react'
import { skills } from '@/components/data/portfolio-data'
import SectionHeader from '@/components/ui/SectionHeader'

const SpotlightCard = dynamic(() => import('@/components/react-bits/SpotlightCard'), {
  ssr: false,
})

const ScrollReveal = dynamic(() => import('@/components/react-bits/ScrollReveal'), {
  ssr: false,
})

const FadeInScale = dynamic(() => import('@/components/react-bits/FadeInScale'), {
  ssr: false,
})

const icons = {
  fullstack: Code2,
  aiData: Brain,
  tools: Wrench,
}

// Skill level to percentage
const levelToPercent: Record<string, number> = {
  'Básico': 40,
  'Intermedio': 65,
  'Avanzado': 90,
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-harmony-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          title="Skills"
          subtitle="Stack tecnológico"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {Object.entries(skills).map(([key, skill], index) => {
            const Icon = icons[key as keyof typeof icons]
            return (
              <ScrollReveal
                key={key}
                delay={index * 0.1}
                direction={index === 0 ? 'left' : index === 2 ? 'right' : 'up'}
              >
                <SpotlightCard
                  spotlightColor="rgba(74, 124, 89, 0.2)"
                  className="h-full p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-harmony-navy/5 hover:border-harmony-green/30 hover:shadow-xl transition-all duration-500"
                >
                  <FadeInScale delay={0.1}>
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2.5 sm:p-3 bg-harmony-green-pale rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-harmony-green/20 hover:scale-110">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-harmony-green" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium text-harmony-navy">
                          {skill.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-harmony-navy-muted">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </FadeInScale>

                  <ul className="space-y-3 sm:space-y-4">
                    {skill.items.map((item, itemIndex) => {
                      const percent = levelToPercent[item.level] || 50
                      return (
                        <FadeInScale key={item.name} delay={0.15 + itemIndex * 0.08}>
                          <li className="group">
                            <div className="flex items-center justify-between text-harmony-navy mb-1.5">
                              <span className="flex items-center gap-2 text-sm sm:text-base">
                                <span className="w-1.5 h-1.5 bg-harmony-green rounded-full group-hover:scale-150 transition-transform" />
                                {item.name}
                              </span>
                              <span className="text-[10px] sm:text-xs text-harmony-navy-muted px-2 py-0.5 bg-harmony-cream rounded group-hover:bg-harmony-green/10 transition-colors">
                                {item.level}
                              </span>
                            </div>
                            {/* Progress bar */}
                            <div className="h-1 sm:h-1.5 bg-harmony-cream rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-harmony-green/60 to-harmony-green rounded-full transition-all duration-1000 ease-out group-hover:from-harmony-green group-hover:to-harmony-green-light"
                                style={{
                                  width: `${percent}%`,
                                  animation: 'expandWidth 1.5s ease-out forwards',
                                  animationDelay: `${itemIndex * 0.1}s`,
                                }}
                              />
                            </div>
                          </li>
                        </FadeInScale>
                      )
                    })}
                  </ul>
                </SpotlightCard>
              </ScrollReveal>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes expandWidth {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  )
}
