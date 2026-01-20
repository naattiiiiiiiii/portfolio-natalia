import SectionHeader from '@/components/ui/SectionHeader'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-harmony-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          title="Sobre mí"
          subtitle="Perfil híbrido: desarrollo y datos"
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Main content */}
          <div className="space-y-6">
            <p className="text-lg text-harmony-navy leading-relaxed">
              Soy una <strong>Ingeniera de Software con perfil híbrido</strong>, combinando una sólida base de desarrollo Full Stack (Next.js, React, TypeScript) con formación especializada en Inteligencia Artificial y Big Data.
            </p>
            <p className="text-lg text-harmony-navy-muted leading-relaxed">
              Me enfoco en la integración de modelos LLM en entornos empresariales, el diseño de arquitecturas para IA Generativa (RAG) y el desarrollo de pipelines de datos con Python.
            </p>
            <p className="text-lg text-harmony-navy-muted leading-relaxed">
              Desarrollo continuamente Pruebas de Concepto (PoCs) funcionales para validar nuevas arquitecturas y mantenerme a la vanguardia tecnológica. Mi proyecto más reciente es <strong>Harmony App</strong>, una plataforma de bienestar laboral que fundé y desarrollo.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-8">
            <div className="p-6 bg-harmony-cream-dark rounded-xl">
              <h3 className="text-sm tracking-wider text-harmony-navy-muted uppercase mb-4">
                Enfoque actual
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-harmony-navy">
                  <span className="w-1.5 h-1.5 bg-harmony-green rounded-full mt-2.5 flex-shrink-0" />
                  Integración de LLMs en aplicaciones web
                </li>
                <li className="flex items-start gap-3 text-harmony-navy">
                  <span className="w-1.5 h-1.5 bg-harmony-green rounded-full mt-2.5 flex-shrink-0" />
                  Arquitecturas RAG para IA Generativa
                </li>
                <li className="flex items-start gap-3 text-harmony-navy">
                  <span className="w-1.5 h-1.5 bg-harmony-green rounded-full mt-2.5 flex-shrink-0" />
                  Pipelines de datos con Python
                </li>
                <li className="flex items-start gap-3 text-harmony-navy">
                  <span className="w-1.5 h-1.5 bg-harmony-green rounded-full mt-2.5 flex-shrink-0" />
                  Desarrollo Full Stack con Next.js
                </li>
              </ul>
            </div>

            <div className="p-6 border border-harmony-navy/10 rounded-xl">
              <h3 className="text-sm tracking-wider text-harmony-navy-muted uppercase mb-4">
                Idiomas
              </h3>
              <div className="flex flex-wrap gap-6">
                <div>
                  <span className="text-harmony-navy font-medium">Español</span>
                  <span className="text-harmony-navy-muted ml-2">Nativo</span>
                </div>
                <div>
                  <span className="text-harmony-navy font-medium">Inglés</span>
                  <span className="text-harmony-navy-muted ml-2">C2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
