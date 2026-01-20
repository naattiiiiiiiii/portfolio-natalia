import { experiences } from '@/components/data/portfolio-data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-harmony-cream-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          title="Experiencia"
          subtitle="Trayectoria profesional"
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`
                p-8 rounded-2xl transition-all duration-300
                ${exp.featured
                  ? 'bg-harmony-navy text-white'
                  : 'bg-white border border-harmony-navy/5 hover:border-harmony-green/30'
                }
              `}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left side - Company info */}
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4">
                    <span className={`text-sm ${exp.featured ? 'text-white/40' : 'text-harmony-navy-muted'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className={`text-xl font-medium ${exp.featured ? 'text-white' : 'text-harmony-navy'}`}>
                        {exp.company}
                      </h3>
                      <p className={`text-sm ${exp.featured ? 'text-white/60' : 'text-harmony-navy-muted'}`}>
                        {exp.role}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-sm ${exp.featured ? 'text-white/40' : 'text-harmony-navy-muted'}`}>
                          {exp.period}
                        </span>
                        {exp.type && (
                          <Badge variant={exp.featured ? 'outline' : 'default'} className={exp.featured ? 'border-white/20 text-white/60' : ''}>
                            {exp.type}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Description */}
                <div className="lg:w-2/3">
                  <p className={`leading-relaxed mb-6 ${exp.featured ? 'text-white/80' : 'text-harmony-navy-muted'}`}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`
                          px-3 py-1 rounded-full text-sm
                          ${exp.featured
                            ? 'bg-white/10 text-white/80'
                            : 'bg-harmony-cream text-harmony-navy-muted'
                          }
                        `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
