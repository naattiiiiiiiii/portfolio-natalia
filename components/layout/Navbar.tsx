'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navigation, personalInfo } from '@/components/data/portfolio-data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                key={item.label}
                href={item.href}
                className="text-sm text-harmony-navy-muted hover:text-harmony-navy transition-colors link-underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
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
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg text-harmony-navy hover:text-harmony-green transition-colors"
              >
                {item.label}
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
