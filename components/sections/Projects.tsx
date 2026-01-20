import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '@/components/data/portfolio-data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-harmony-cream-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          title="Proyectos"
          subtitle="Trabajo destacado"
        />

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group p-6 bg-white rounded-2xl border border-harmony-navy/5 hover:border-harmony-green/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs text-harmony-navy-muted">
                    {String(index + 1).padStart(2, '0')}
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
