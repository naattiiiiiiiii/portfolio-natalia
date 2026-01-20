import { GraduationCap, Award } from 'lucide-react'
import { education, certifications } from '@/components/data/portfolio-data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-8 bg-harmony-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          title="Educación"
          subtitle="Formación académica"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.title}
                className="p-8 bg-white rounded-2xl border border-harmony-navy/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-harmony-green-pale rounded-xl">
                    <GraduationCap className="w-6 h-6 text-harmony-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-medium text-harmony-navy">
                        {edu.title}
                      </h3>
                      {edu.status === 'En curso' && (
                        <Badge variant="featured">En curso</Badge>
                      )}
                    </div>
                    <p className="text-harmony-navy-muted mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-harmony-navy-muted mb-4">
                      {edu.period}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-harmony-navy"
                        >
                          <span className="w-1 h-1 bg-harmony-green rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-1">
            <div className="p-8 bg-harmony-cream-dark rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5 text-harmony-green" />
                <h3 className="text-lg font-medium text-harmony-navy">
                  Certificaciones
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 bg-white rounded-xl"
                  >
                    <div>
                      <h4 className="font-medium text-harmony-navy">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-harmony-navy-muted">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
