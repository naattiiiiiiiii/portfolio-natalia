import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Natalia Cuadrado | Desarrolladora Full Stack',
  description: 'Portfolio de Natalia Cuadrado - Desarrolladora Full Stack especializada en React, Next.js, Node.js, TypeScript y Python. Creando soluciones web modernas e innovadoras.',
  keywords: ['desarrolladora', 'full stack', 'react', 'next.js', 'node.js', 'typescript', 'python', 'portfolio', 'web developer'],
  authors: [{ name: 'Natalia Cuadrado' }],
  creator: 'Natalia Cuadrado',
  openGraph: {
    title: 'Natalia Cuadrado | Desarrolladora Full Stack',
    description: 'Portfolio de Natalia Cuadrado - Desarrolladora Full Stack especializada en React, Next.js, Node.js y Python.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natalia Cuadrado | Desarrolladora Full Stack',
    description: 'Portfolio de Natalia Cuadrado - Desarrolladora Full Stack',
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
