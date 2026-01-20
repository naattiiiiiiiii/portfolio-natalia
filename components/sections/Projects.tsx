import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '@/components/data/portfolio-data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

export default function Projects() {
  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-harmony-cream-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          title="Proyectos"
          subtitle="Trabajo destacado"
        />

        {/* Featured Project - Harmony App */}
        {featuredProject && (
          <div className="mb-16">
            <div className="p-8 lg:p-12 bg-harmony-navy rounded-2xl text-white">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <Badge variant="outline" className="border-white/20 text-white/80 mb-6">
                    {featuredProject.status || 'Proyecto Destacado'}
                  </Badge>
                  <h3 className="text-3xl lg:text-4xl font-light mb-2">
                    {featuredProject.title}
                  </h3>
                  <p className="text-white/60 mb-6">
                    {featuredProject.subtitle}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {featuredProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className="group p-6 bg-white rounded-2xl border border-harmony-navy/5 hover:border-harmony-green/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs text-harmony-navy-muted">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-medium text-harmony-navy mt-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-harmony-navy-muted">
                    {project.subtitle}
                  </p>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-harmony-navy-muted hover:text-harmony-navy transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>

              <p className="text-harmony-navy-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-harmony-cream text-harmony-navy-muted text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-sm text-harmony-green hover:text-harmony-green-light transition-colors"
                >
                  Ver demo
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
