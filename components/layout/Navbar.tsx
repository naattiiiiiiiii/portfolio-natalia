'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navigation, personalInfo } from '@/components/data/portfolio-data'
import { useLanguage } from '@/components/context/LanguageContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { lang, toggleLang } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300
        ${isScrolled
          ? 'bg-harmony-cream/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="tracking-ultra-wide text-harmony-navy font-light text-sm hover:text-harmony-green transition-colors"
          >
            NATALIA CUADRADO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-harmony-navy-muted hover:text-harmony-navy transition-colors link-underline"
              >
                {item.label[lang]}
              </a>
            ))}
          </div>

          {/* Social Links + Lang Toggle - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-xs font-medium border border-harmony-navy/20 rounded-full px-3 py-1 text-harmony-navy-muted hover:text-harmony-navy hover:border-harmony-navy/40 transition-all"
              aria-label="Toggle language"
            >
              <span className={lang === 'es' ? 'text-harmony-navy font-semibold' : ''}>ES</span>
              <span className="text-harmony-navy/30">/</span>
              <span className={lang === 'en' ? 'text-harmony-navy font-semibold' : ''}>EN</span>
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-harmony-navy-muted hover:text-harmony-navy transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-harmony-navy-muted hover:text-harmony-navy transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Lang Toggle - Mobile */}
          <button
            onClick={toggleLang}
            className="lg:hidden flex items-center gap-1 text-xs font-medium border border-harmony-navy/20 rounded-full px-2.5 py-1 text-harmony-navy-muted"
          >
            <span className={lang === 'es' ? 'text-harmony-navy font-semibold' : ''}>ES</span>
            <span className="text-harmony-navy/30">/</span>
            <span className={lang === 'en' ? 'text-harmony-navy font-semibold' : ''}>EN</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-harmony-navy"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-harmony-cream border-t border-harmony-cream-dark">
          <div className="px-6 py-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg text-harmony-navy hover:text-harmony-green transition-colors"
              >
                {item.label[lang]}
              </a>
            ))}
            <div className="pt-4 border-t border-harmony-cream-dark flex gap-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-harmony-navy-muted hover:text-harmony-navy transition-colors"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-harmony-navy-muted hover:text-harmony-navy transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
