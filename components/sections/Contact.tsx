import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '@/components/data/portfolio-data'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import QuoteBlock from '@/components/ui/QuoteBlock'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-harmony-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="06"
          title="Contacto"
          subtitle="Hablemos"
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Message */}
          <div>
            <QuoteBlock className="mb-8 text-xl">
              {personalInfo.quote}
            </QuoteBlock>

            <p className="text-lg text-harmony-navy-muted leading-relaxed mb-8">
              Estoy buscando nuevas oportunidades laborales donde pueda aportar mi experiencia
              en desarrollo Full Stack e Inteligencia Artificial. Si buscas incorporar talento
              a tu equipo, no dudes en contactarme.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-harmony-navy hover:text-harmony-green transition-colors group"
              >
                <div className="p-2 bg-harmony-green-pale rounded-lg group-hover:bg-harmony-green/20 transition-colors">
                  <Mail className="w-5 h-5 text-harmony-green" />
                </div>
                <span>{personalInfo.email}</span>
              </a>

              <div className="flex items-center gap-3 text-harmony-navy-muted">
                <div className="p-2 bg-harmony-cream-dark rounded-lg">
                  <MapPin className="w-5 h-5 text-harmony-navy-muted" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                href={`mailto:${personalInfo.email}`}
              >
                Enviar email
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button
                href={personalInfo.linkedin}
                external
                variant="secondary"
              >
                LinkedIn
              </Button>
              <Button
                href={personalInfo.github}
                external
                variant="secondary"
              >
                GitHub
              </Button>
            </div>
          </div>

          {/* Right side - Availability */}
          <div className="flex items-center justify-center">
            <div className="p-8 bg-harmony-cream-dark rounded-2xl max-w-md w-full">
              <h3 className="text-sm tracking-wider text-harmony-navy-muted uppercase mb-6">
                Disponibilidad actual
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-harmony-green rounded-full mt-1.5 animate-pulse-subtle" />
                  <div>
                    <h4 className="font-medium text-harmony-navy">Disponibilidad inmediata</h4>
                    <p className="text-sm text-harmony-navy-muted">
                      Lista para incorporarme a nuevos retos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-harmony-green rounded-full mt-1.5" />
                  <div>
                    <h4 className="font-medium text-harmony-navy">Modalidad</h4>
                    <p className="text-sm text-harmony-navy-muted">
                      Remoto, híbrido o presencial
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-harmony-green rounded-full mt-1.5" />
                  <div>
                    <h4 className="font-medium text-harmony-navy">Ubicación</h4>
                    <p className="text-sm text-harmony-navy-muted">
                      Lanzarote, España (CET)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
