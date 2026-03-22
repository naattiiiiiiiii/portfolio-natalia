'use client'

import { Mail, MapPin, ArrowUpRight, Download } from 'lucide-react'
import { personalInfo } from '@/components/data/portfolio-data'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import QuoteBlock from '@/components/ui/QuoteBlock'
import { useLanguage } from '@/components/context/LanguageContext'

export default function Contact() {
  const { lang } = useLanguage()
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-harmony-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="06"
          title={lang === 'es' ? 'Contacto' : 'Contact'}
          subtitle={lang === 'es' ? 'Hablemos' : "Let's talk"}
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Message */}
          <div>
            <QuoteBlock className="mb-8 text-xl">
              {personalInfo.quote[lang]}
            </QuoteBlock>

            <p className="text-lg text-harmony-navy-muted leading-relaxed mb-8">
              {lang === 'es'
                ? 'Estoy buscando nuevas oportunidades laborales donde pueda aportar mi experiencia en desarrollo Full Stack e Inteligencia Artificial. Disponible para reubicación en Australia (Work & Holiday Visa subclass 462). Si buscas incorporar talento a tu equipo, no dudes en contactarme.'
                : "I'm looking for new opportunities where I can bring my experience in Full Stack development and Artificial Intelligence. Available to relocate to Australia (Work & Holiday Visa subclass 462). If you're looking for talent to join your team, feel free to reach out."
              }
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
              <Button href={`mailto:${personalInfo.email}`}>
                {lang === 'es' ? 'Enviar email' : 'Send email'}
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button href={personalInfo.linkedin} external variant="secondary">
                LinkedIn
              </Button>
              <Button href={personalInfo.github} external variant="secondary">
                GitHub
              </Button>
              <Button href="/cv-natalia.pdf" external variant="secondary">
                <Download className="w-4 h-4" />
                {lang === 'es' ? 'Descargar CV' : 'Download CV'}
              </Button>
            </div>
          </div>

          {/* Right side - Availability */}
          <div className="flex items-center justify-center">
            <div className="p-8 bg-harmony-cream-dark rounded-2xl max-w-md w-full">
              <h3 className="text-sm tracking-wider text-harmony-navy-muted uppercase mb-6">
                {lang === 'es' ? 'Información' : 'Info'}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-harmony-green rounded-full mt-1.5" />
                  <div>
                    <h4 className="font-medium text-harmony-navy">{lang === 'es' ? 'Modalidad' : 'Work mode'}</h4>
                    <p className="text-sm text-harmony-navy-muted">
                      {lang === 'es' ? 'Remoto, híbrido o presencial' : 'Remote, hybrid or on-site'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-harmony-green rounded-full mt-1.5" />
                  <div>
                    <h4 className="font-medium text-harmony-navy">{lang === 'es' ? 'Ubicación' : 'Location'}</h4>
                    <p className="text-sm text-harmony-navy-muted">
                      {lang === 'es'
                        ? 'Lanzarote, España · Disponible para reubicación en Australia'
                        : 'Lanzarote, Spain · Available to relocate to Australia'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-harmony-green rounded-full mt-1.5" />
                  <div>
                    <h4 className="font-medium text-harmony-navy">{lang === 'es' ? 'Visa Australia' : 'Australian Visa'}</h4>
                    <p className="text-sm text-harmony-navy-muted">
                      Work &amp; Holiday Visa (subclass 462)
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
