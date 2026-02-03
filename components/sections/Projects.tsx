'use client'

import dynamic from 'next/dynamic'
import { ArrowUpRight, Github, Sparkles } from 'lucide-react'
import { projects } from '@/components/data/portfolio-data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

const TiltedCard = dynamic(() => import('@/components/react-bits/TiltedCard'), {
  ssr: false,
})

const SpotlightCard = dynamic(() => import('@/components/react-bits/SpotlightCard'), {
  ssr: false,
})

const ScrollReveal = dynamic(() => import('@/components/react-bits/ScrollReveal'), {
  ssr: false,
})

const FadeInScale = dynamic(() => import('@/components/react-bits/FadeInScale'), {
  ssr: false,
})

const Magnetic = dynamic(() => import('@/components/react-bits/Magnetic'), {
  ssr: false,
})

export default function Projects() {
  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-harmony-cream-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          title="Proyectos"
          subtitle="Trabajo destacado"
        />

        {/* Featured Project - TFM with TiltedCard */}
        {featuredProject && (
          <ScrollReveal className="mb-10 sm:mb-16">
            <TiltedCard tiltAmount={4}>
              <div className="p-5 sm:p-8 lg:p-12 bg-harmony-navy rounded-xl sm:rounded-2xl text-white overflow-hidden relative">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-harmony-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-harmony-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 relative z-10">
                  <div>
                    <FadeInScale delay={0.1}>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <Badge variant="outline" className="border-white/20 text-white/80 text-xs sm:text-sm">
                          <Sparkles className="w-3 h-3 mr-1" />
                          {featuredProject.status || 'Proyecto Destacado'}
                        </Badge>
                        {'collaboration' in featuredProject && featuredProject.collaboration && (
                          <Badge variant="outline" className="border-harmony-green/40 text-harmony-green-light text-xs sm:text-sm">
                            {featuredProject.collaboration}
                          </Badge>
                        )}
                      </div>
                    </FadeInScale>

                    <FadeInScale delay={0.2}>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-2">
                        {featuredProject.title}
                      </h3>
                    </FadeInScale>

                    <FadeInScale delay={0.3}>
                      <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">
                        {featuredProject.subtitle}
                      </p>
                    </FadeInScale>

                    <FadeInScale delay={0.4}>
                      <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                        {featuredProject.description}
                      </p>
                    </FadeInScale>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {featuredProject.tech.map((tech, index) => (
                        <FadeInScale key={tech} delay={0.3 + index * 0.08} scale={0.8}>
                          <Magnetic strength={0.15}>
                            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full text-white/70 hover:bg-white/15 hover:text-white hover:border-white/30 transition-all duration-300 text-xs sm:text-sm">
                              {tech}
                            </span>
                          </Magnetic>
                        </FadeInScale>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TiltedCard>
          </ScrollReveal>
        )}

        {/* Other Projects with SpotlightCard */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {otherProjects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <SpotlightCard
                spotlightColor="rgba(74, 124, 89, 0.15)"
                className="h-full p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-harmony-navy/5 hover:border-harmony-green/30 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex-1">
                    <FadeInScale delay={0.1}>
                      <span className="text-2xl sm:text-3xl font-light text-harmony-green/30 group-hover:text-harmony-green/50 transition-colors">
                        {String(index + 2).padStart(2, '0')}
                      </span>
                    </FadeInScale>
                    <h3 className="text-lg sm:text-xl font-medium text-harmony-navy mt-1 group-hover:text-harmony-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-harmony-navy-muted">
                      {project.subtitle}
                    </p>
                  </div>
                  {project.github && (
                    <Magnetic strength={0.3}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-harmony-navy-muted hover:text-harmony-navy hover:bg-harmony-cream rounded-lg transition-all duration-300"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </Magnetic>
                  )}
                </div>

                <p className="text-harmony-navy-muted text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <FadeInScale key={tech} delay={0.15 + techIndex * 0.05} scale={0.9}>
                      <span className="px-2 py-0.5 sm:py-1 bg-harmony-cream text-harmony-navy-muted text-[10px] sm:text-xs rounded hover:bg-harmony-green/10 hover:text-harmony-green transition-colors">
                        {tech}
                      </span>
                    </FadeInScale>
                  ))}
                </div>

                {project.link && (
                  <FadeInScale delay={0.3}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 sm:mt-4 text-xs sm:text-sm text-harmony-green hover:text-harmony-green-light transition-colors group/link"
                    >
                      Ver demo
                      <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </FadeInScale>
                )}
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
