'use client'

import dynamic from 'next/dynamic'
import { experiences } from '@/components/data/portfolio-data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

const SpotlightCard = dynamic(() => import('@/components/react-bits/SpotlightCard'), {
  ssr: false,
})

const ScrollReveal = dynamic(() => import('@/components/react-bits/ScrollReveal'), {
  ssr: false,
})

const GradientText = dynamic(() => import('@/components/react-bits/GradientText'), {
  ssr: false,
})

const FadeInScale = dynamic(() => import('@/components/react-bits/FadeInScale'), {
  ssr: false,
})

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-harmony-cream-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          title="Experiencia"
          subtitle="Trayectoria profesional"
        />

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal
              key={exp.company}
              delay={index * 0.15}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <SpotlightCard
                spotlightColor={exp.featured ? 'rgba(255, 255, 255, 0.1)' : 'rgba(74, 124, 89, 0.15)'}
                className={`
                  p-5 sm:p-8 rounded-xl sm:rounded-2xl transition-all duration-300
                  ${exp.featured
                    ? 'bg-harmony-navy text-white'
                    : 'bg-white border border-harmony-navy/5 hover:border-harmony-green/30 hover:shadow-lg'
                  }
                `}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                  {/* Left side - Company info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <FadeInScale delay={0.2}>
                        <span className={`
                          text-3xl sm:text-4xl font-light
                          ${exp.featured ? 'text-white/20' : 'text-harmony-green/30'}
                        `}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </FadeInScale>
                      <div className="flex-1">
                        <h3 className={`text-lg sm:text-xl font-medium ${exp.featured ? 'text-white' : ''}`}>
                          <GradientText
                            from={exp.featured ? '#ffffff' : '#1a365d'}
                            to={exp.featured ? '#a3d9a5' : '#4a7c59'}
                            animate={false}
                          >
                            {exp.company}
                          </GradientText>
                        </h3>
                        <p className={`text-sm sm:text-base ${exp.featured ? 'text-white/60' : 'text-harmony-navy-muted'}`}>
                          {exp.role}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className={`text-xs sm:text-sm ${exp.featured ? 'text-white/40' : 'text-harmony-navy-muted'}`}>
                            {exp.period}
                          </span>
                          {exp.type && (
                            <Badge
                              variant={exp.featured ? 'outline' : 'default'}
                              className={`text-xs ${exp.featured ? 'border-white/20 text-white/60' : ''}`}
                            >
                              {exp.type}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Description */}
                  <div className="lg:w-2/3">
                    <p className={`
                      text-sm sm:text-base leading-relaxed mb-4 sm:mb-6
                      ${exp.featured ? 'text-white/80' : 'text-harmony-navy-muted'}
                    `}>
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <FadeInScale key={tech} delay={0.1 + techIndex * 0.05} scale={0.8}>
                          <span
                            className={`
                              px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-300
                              ${exp.featured
                                ? 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                                : 'bg-harmony-cream text-harmony-navy-muted hover:bg-harmony-green/15 hover:text-harmony-green'
                              }
                            `}
                          >
                            {tech}
                          </span>
                        </FadeInScale>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
