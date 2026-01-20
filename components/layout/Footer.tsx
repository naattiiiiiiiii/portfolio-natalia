import { personalInfo, footerSections } from '@/components/data/portfolio-data'
import Button from '@/components/ui/Button'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-harmony-navy text-white">
      {/* CTA Section */}
      <div className="px-6 lg:px-8 py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/60 mb-4 max-w-xl">
            ¿Buscas incorporar talento a tu equipo?
          </p>
          <Button
            href={`mailto:${personalInfo.email}`}
            variant="secondary"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
          >
            Contactar
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Navigation */}
            <div>
              <h4 className="text-xs tracking-wider text-white/40 mb-6">
                {footerSections.navigation.title}
              </h4>
              <ul className="space-y-3">
                {footerSections.navigation.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs tracking-wider text-white/40 mb-6">
                {footerSections.social.title}
              </h4>
              <ul className="space-y-3">
                {footerSections.social.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-xs tracking-wider text-white/40 mb-6">
                {footerSections.projects.title}
              </h4>
              <ul className="space-y-3">
                {footerSections.projects.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-white/40 text-sm">
              Natalia Cuadrado © {new Date().getFullYear()}
            </span>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
