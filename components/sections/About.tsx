'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import { useLanguage } from '@/components/context/LanguageContext'

export default function About() {
  const { lang } = useLanguage()

  const content = {
    es: {
      title: 'Sobre mí',
      subtitle: 'Perfil híbrido: desarrollo y datos',
      p1: (<>Soy una <strong>Ingeniera de Software con perfil híbrido</strong>, combinando una sólida base de desarrollo Full Stack (Next.js, React, TypeScript) con formación especializada en Inteligencia Artificial y Big Data.</>),
      p2: 'Me enfoco en la integración de modelos LLM en entornos empresariales, el diseño de arquitecturas para IA Generativa (RAG) y el desarrollo de pipelines de datos con Python.',
      p3: (<>Desarrollo continuamente Pruebas de Concepto (PoCs) funcionales para validar nuevas arquitecturas y mantenerme a la vanguardia tecnológica. Mi proyecto más reciente es <a href="https://www.theharmonyapp.es" target="_blank" rel="noopener noreferrer" className="text-harmony-green hover:text-harmony-green-light underline underline-offset-2 transition-colors"><strong>Harmony App</strong></a>, una plataforma de bienestar laboral que fundé y desarrollo.</>),
      focus: 'Enfoque actual',
      items: ['Integración de LLMs en aplicaciones web', 'Arquitecturas RAG para IA Generativa', 'Pipelines de datos con Python', 'Desarrollo Full Stack con Next.js'],
      langs: 'Idiomas',
      spanish: 'Español',
      native: 'Nativo',
      english: 'Inglés',
    },
    en: {
      title: 'About',
      subtitle: 'Hybrid profile: development & data',
      p1: (<>I am a <strong>Software Engineer with a hybrid profile</strong>, combining a solid Full Stack development background (Next.js, React, TypeScript) with specialised training in Artificial Intelligence and Big Data.</>),
      p2: 'I focus on integrating LLM models into enterprise environments, designing Generative AI architectures (RAG) and building data pipelines with Python.',
      p3: (<>I continuously develop functional Proof of Concepts (PoCs) to validate new architectures and stay at the cutting edge of technology. My most recent project is <a href="https://www.theharmonyapp.es" target="_blank" rel="noopener noreferrer" className="text-harmony-green hover:text-harmony-green-light underline underline-offset-2 transition-colors"><strong>Harmony App</strong></a>, an employee wellbeing platform I founded and built.</>),
      focus: 'Current focus',
      items: ['LLM integration into web applications', 'RAG architectures for Generative AI', 'Data pipelines with Python', 'Full Stack development with Next.js'],
      langs: 'Languages',
      spanish: 'Spanish',
      native: 'Native',
      english: 'English',
    },
  }

  const c = content[lang]

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-harmony-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          title={c.title}
          subtitle={c.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Main content */}
          <div className="space-y-6">
            <p className="text-lg text-harmony-navy leading-relaxed">{c.p1}</p>
            <p className="text-lg text-harmony-navy-muted leading-relaxed">{c.p2}</p>
            <p className="text-lg text-harmony-navy-muted leading-relaxed">{c.p3}</p>
          </div>

          {/* Highlights */}
          <div className="space-y-8">
            <div className="p-6 bg-harmony-cream-dark rounded-xl">
              <h3 className="text-sm tracking-wider text-harmony-navy-muted uppercase mb-4">
                {c.focus}
              </h3>
              <ul className="space-y-3">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-harmony-navy">
                    <span className="w-1.5 h-1.5 bg-harmony-green rounded-full mt-2.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border border-harmony-navy/10 rounded-xl">
              <h3 className="text-sm tracking-wider text-harmony-navy-muted uppercase mb-4">
                {c.langs}
              </h3>
              <div className="flex flex-wrap gap-6">
                <div>
                  <span className="text-harmony-navy font-medium">{c.spanish}</span>
                  <span className="text-harmony-navy-muted ml-2">{c.native}</span>
                </div>
                <div>
                  <span className="text-harmony-navy font-medium">{c.english}</span>
                  <span className="text-harmony-navy-muted ml-2">C1/C2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
