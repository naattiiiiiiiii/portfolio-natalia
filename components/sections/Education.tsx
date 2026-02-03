'use client'

import dynamic from 'next/dynamic'
import { GraduationCap, Award, ExternalLink, MapPin, Monitor } from 'lucide-react'
import { education, certifications } from '@/components/data/portfolio-data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

const SpotlightCard = dynamic(() => import('@/components/react-bits/SpotlightCard'), {
  ssr: false,
})

const ScrollReveal = dynamic(() => import('@/components/react-bits/ScrollReveal'), {
  ssr: false,
})

const FadeInScale = dynamic(() => import('@/components/react-bits/FadeInScale'), {
  ssr: false,
})

const TiltedCard = dynamic(() => import('@/components/react-bits/TiltedCard'), {
  ssr: false,
})

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-harmony-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          title="Educación"
          subtitle="Formación académica"
        />

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <ScrollReveal
                key={edu.title}
                delay={index * 0.12}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <SpotlightCard
                  spotlightColor="rgba(74, 124, 89, 0.15)"
                  className="p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-harmony-navy/5 hover:border-harmony-green/30 hover:shadow-lg transition-all duration-500"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <FadeInScale delay={0.1}>
                      <div className="p-2.5 sm:p-3 bg-harmony-green-pale rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-harmony-green/20 hover:scale-110 hover:rotate-3">
                        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-harmony-green" />
                      </div>
                    </FadeInScale>
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-medium text-harmony-navy leading-tight">
                          {edu.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          {edu.status === 'En curso' && (
                            <Badge variant="featured" className="text-[10px] sm:text-xs">
                              En curso
                            </Badge>
                          )}
                          {'modality' in edu && edu.modality && (
                            <Badge variant="default" className="text-[10px] sm:text-xs flex items-center gap-1">
                              {edu.modality === 'Presencial' ? (
                                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              ) : (
                                <Monitor className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              )}
                              {edu.modality}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm sm:text-base text-harmony-navy-muted">
                          {edu.institution}
                        </p>
                        {'link' in edu && edu.link && (
                          <a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-harmony-green hover:text-harmony-green-light transition-all duration-300 hover:scale-125"
                          >
                            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-harmony-navy-muted mb-3 sm:mb-4">
                        {edu.period}
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <FadeInScale key={highlight} delay={0.2 + hIndex * 0.08}>
                            <li className="flex items-start gap-2 text-xs sm:text-sm text-harmony-navy group">
                              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-harmony-green rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                              <span className="group-hover:text-harmony-green transition-colors">
                                {highlight}
                              </span>
                            </li>
                          </FadeInScale>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-1">
            <ScrollReveal delay={0.3} direction="right">
              <TiltedCard tiltAmount={5}>
                <SpotlightCard
                  spotlightColor="rgba(74, 124, 89, 0.12)"
                  className="p-5 sm:p-8 bg-harmony-cream-dark rounded-xl sm:rounded-2xl h-full"
                >
                  <FadeInScale delay={0.1}>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="p-2 bg-harmony-green/10 rounded-lg">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-harmony-green" />
                      </div>
                      <h3 className="text-base sm:text-lg font-medium text-harmony-navy">
                        Certificaciones
                      </h3>
                    </div>
                  </FadeInScale>

                  <div className="space-y-3 sm:space-y-4">
                    {certifications.map((cert, index) => (
                      <FadeInScale key={cert.name} delay={0.2 + index * 0.1}>
                        <div className="p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                          <h4 className="font-medium text-sm sm:text-base text-harmony-navy group-hover:text-harmony-green transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-harmony-navy-muted">
                            {cert.issuer}
                          </p>
                        </div>
                      </FadeInScale>
                    ))}
                  </div>
                </SpotlightCard>
              </TiltedCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
