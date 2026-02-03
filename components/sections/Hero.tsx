'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { personalInfo } from '@/components/data/portfolio-data'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

// Dynamic imports for React Bits components (SSR disabled)
const SplitText = dynamic(() => import('@/components/react-bits/SplitText'), {
  ssr: false,
  loading: () => <span className="text-4xl sm:text-5xl lg:text-7xl font-light text-harmony-navy leading-[1.1]">{personalInfo.name}</span>
})

const DecryptedText = dynamic(() => import('@/components/react-bits/DecryptedText'), {
  ssr: false,
  loading: () => <span className="text-lg sm:text-xl lg:text-2xl text-harmony-navy-muted font-light">{personalInfo.title}</span>
})

const BlurText = dynamic(() => import('@/components/react-bits/BlurText'), {
  ssr: false,
  loading: () => <span>{personalInfo.quote}</span>
})

const TiltedCard = dynamic(() => import('@/components/react-bits/TiltedCard'), {
  ssr: false,
  loading: () => null
})

const Magnetic = dynamic(() => import('@/components/react-bits/Magnetic'), {
  ssr: false,
})

const FadeInScale = dynamic(() => import('@/components/react-bits/FadeInScale'), {
  ssr: false,
})

export default function Hero() {
  return (
    <section className="min-h-screen bg-harmony-cream pt-24 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <FadeInScale delay={0}>
              <Badge variant="featured" className="mb-6 sm:mb-8">
                Full Stack & AI Developer
              </Badge>
            </FadeInScale>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-harmony-navy leading-[1.1] mb-4 sm:mb-6">
              <SplitText
                text={personalInfo.name}
                delay={50}
              />
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-harmony-navy-muted font-light mb-6 sm:mb-8">
              <DecryptedText
                text={personalInfo.title}
                speed={30}
              />
            </p>

            <FadeInScale delay={0.5}>
              <div className="mb-8 sm:mb-10 max-w-lg pl-4 border-l-2 border-harmony-green/30">
                <p className="text-sm sm:text-base text-harmony-navy-muted italic">
                  <BlurText
                    text={personalInfo.quote}
                    delay={800}
                    duration={1}
                  />
                </p>
              </div>
            </FadeInScale>

            <FadeInScale delay={0.7}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
                <Magnetic strength={0.2}>
                  <Button href="#projects" className="w-full sm:w-auto justify-center">
                    Ver proyectos
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Button href="#contact" variant="secondary" className="w-full sm:w-auto justify-center">
                    Contactar
                  </Button>
                </Magnetic>
              </div>
            </FadeInScale>

            {/* Quick info */}
            <FadeInScale delay={0.9}>
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-harmony-navy/10 flex flex-wrap gap-6 sm:gap-8 text-sm text-harmony-navy-muted">
                <div>
                  <span className="block text-harmony-navy font-medium text-xs sm:text-sm">Ubicación</span>
                  <span className="text-xs sm:text-sm">{personalInfo.location}</span>
                </div>
                <div>
                  <span className="block text-harmony-navy font-medium text-xs sm:text-sm">Especialización</span>
                  <span className="text-xs sm:text-sm">Full Stack + IA</span>
                </div>
              </div>
            </FadeInScale>
          </div>

          {/* Photo with TiltedCard effect */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <FadeInScale delay={0.3} scale={0.9}>
              <div className="relative">
                <TiltedCard className="w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px]" tiltAmount={8}>
                  <div className="w-full h-full relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                    <Image
                      src="/natalia.jpg"
                      alt="Natalia Cuadrado"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </TiltedCard>
                {/* Decorative elements */}
                <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-16 sm:w-24 h-16 sm:h-24 bg-harmony-green/10 rounded-xl sm:rounded-2xl -z-10" />
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-20 sm:w-32 h-20 sm:h-32 bg-harmony-green/5 rounded-full -z-10" />
              </div>
            </FadeInScale>
          </div>
        </div>
      </div>
    </section>
  )
}
