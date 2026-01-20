import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Natalia Cuadrado | Full Stack Developer & AI Specialist',
  description: 'Portfolio de Natalia Cuadrado - Ingeniera de Software con perfil híbrido: Full Stack (Next.js, React, TypeScript) + IA y Big Data. Fundadora de Harmony App. Especializada en integración de LLMs y arquitecturas RAG.',
  keywords: [
    'full stack developer',
    'AI specialist',
    'next.js',
    'react',
    'typescript',
    'python',
    'machine learning',
    'big data',
    'harmony app',
    'LLM integration',
    'RAG architecture',
    'desarrolladora',
    'inteligencia artificial',
  ],
  authors: [{ name: 'Natalia Cuadrado' }],
  creator: 'Natalia Cuadrado',
  openGraph: {
    title: 'Natalia Cuadrado | Full Stack Developer & AI Specialist',
    description: 'Ingeniera de Software con perfil híbrido: Full Stack + IA. Fundadora de Harmony App.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Natalia Cuadrado Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natalia Cuadrado | Full Stack Developer & AI Specialist',
    description: 'Ingeniera de Software con perfil híbrido: Full Stack + IA. Fundadora de Harmony App.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
