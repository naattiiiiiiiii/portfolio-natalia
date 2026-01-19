import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Brain, Sparkles, ArrowRight, Terminal, Palette, Server } from 'lucide-react'
import Link from 'next/link'

const skills = [
  {
    category: 'Frontend',
    icon: Palette,
    color: 'bg-blue-500',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'bg-green-500',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'IA & Data',
    icon: Brain,
    color: 'bg-purple-500',
    items: ['Python', 'Machine Learning', 'APIs de IA', 'Data Analysis']
  },
  {
    category: 'Herramientas',
    icon: Terminal,
    color: 'bg-orange-500',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Docker']
  }
]

const projects = [
  {
    title: 'StickerAI',
    description: 'Generador de stickers con IA para WhatsApp. Utiliza inteligencia artificial para crear stickers personalizados a partir de descripciones de texto. 100% gratuito y sin registro.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'IA Generativa', 'Vercel'],
    link: 'https://sticker-ai-natalia-s-projects-29dfd446.vercel.app',
    github: 'https://github.com/naattiiiiiiiii/sticker-ai',
    image: '/sticker-ai-preview.png',
    featured: true
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <Code2 className="w-6 h-6 text-indigo-600 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold text-slate-800">NC</span>
            </Link>
            <div className="hidden sm:flex items-center gap-8">
              <a href="#about" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Sobre mí</a>
              <a href="#skills" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Skills</a>
              <a href="#projects" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Proyectos</a>
              <a href="#contact" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Contacto</a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/naattiiiiiiiii/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/natalia-cuadrado-hidalgo-213482358/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Disponible para proyectos</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Hola, soy{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Natalia Cuadrado
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl">
                Desarrolladora Full Stack apasionada por crear experiencias web modernas e innovadoras.
                Especializada en <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong> y <strong>Python</strong>.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Ver proyectos
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all font-medium"
                >
                  Contactar
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 animate-slide-up">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="text-6xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600">
                      NC
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-float">
                  <Code2 className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Sobre mí</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-8 sm:p-10">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Soy una desarrolladora Full Stack junior con una fuerte pasión por la tecnología y el aprendizaje continuo.
                Me especializo en el desarrollo de aplicaciones web modernas utilizando las últimas tecnologías del ecosistema JavaScript.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Mi enfoque se centra en crear soluciones que no solo funcionen bien, sino que también ofrezcan
                una excelente experiencia de usuario. Me encanta explorar nuevas tecnologías, especialmente
                en el campo de la <strong>inteligencia artificial</strong> y cómo esta puede integrarse en aplicaciones web.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Cuando no estoy programando, me gusta mantenerme actualizada con las últimas tendencias
                en desarrollo web y contribuir a proyectos que me apasionan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Habilidades</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo para crear soluciones web completas
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-indigo-100 transition-all group"
              >
                <div className={`inline-flex p-3 rounded-lg ${skill.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform`}>
                  <skill.icon className={`w-6 h-6 ${skill.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-slate-600 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Proyectos</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Algunos de los proyectos en los que he trabajado
            </p>
          </div>
          <div className="grid gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl overflow-hidden ${
                  project.featured ? 'border-2 border-indigo-200' : 'border border-slate-100'
                }`}
              >
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full mb-4">
                          <Sparkles className="w-3 h-3" />
                          Proyecto Destacado
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                        >
                          Ver proyecto
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-white transition-all text-sm font-medium"
                        >
                          <Github className="w-4 h-4" />
                          Código
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Contacto</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 sm:p-10 text-center text-white">
              <Mail className="w-12 h-12 mx-auto mb-6 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">¡Hablemos!</h3>
              <p className="text-indigo-100 mb-8">
                Estoy abierta a nuevas oportunidades y colaboraciones.
                Puedes encontrarme en las siguientes plataformas:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://github.com/naattiiiiiiiii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium w-full sm:w-auto justify-center"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/natalia-cuadrado-hidalgo-213482358/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors font-medium w-full sm:w-auto justify-center"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-600" />
            <span className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Natalia Cuadrado. Todos los derechos reservados.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/naattiiiiiiiii/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/natalia-cuadrado-hidalgo-213482358/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
