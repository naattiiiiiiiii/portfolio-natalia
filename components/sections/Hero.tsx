import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { personalInfo } from '@/components/data/portfolio-data'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import QuoteBlock from '@/components/ui/QuoteBlock'

export default function Hero() {
  return (
    <section className="min-h-screen bg-harmony-cream pt-28 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <Badge variant="featured" className="mb-8">
              Full Stack & AI Developer
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-harmony-navy leading-[1.1] mb-6">
              {personalInfo.name}
            </h1>

            <p className="text-xl sm:text-2xl text-harmony-navy-muted font-light mb-8">
              {personalInfo.title}
            </p>

            <QuoteBlock className="mb-10 max-w-lg">
              {personalInfo.quote}
            </QuoteBlock>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button href="#projects">
                Ver proyectos
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button href="#contact" variant="secondary">
                Contactar
              </Button>
            </div>

            {/* Quick info */}
            <div className="mt-12 pt-8 border-t border-harmony-navy/10 flex flex-wrap gap-8 text-sm text-harmony-navy-muted">
              <div>
                <span className="block text-harmony-navy font-medium">Ubicación</span>
                {personalInfo.location}
              </div>
              <div>
                <span className="block text-harmony-navy font-medium">Especialización</span>
                Full Stack + IA
              </div>
              <div>
                <span className="block text-harmony-navy font-medium">Disponibilidad</span>
                Inmediata
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-96 sm:w-96 sm:h-[480px] relative overflow-hidden rounded-2xl">
                <Image
                  src="/natalia.jpg"
                  alt="Natalia Cuadrado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-harmony-green/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-harmony-green/5 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
