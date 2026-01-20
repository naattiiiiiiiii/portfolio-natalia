import { Code2, Brain, Wrench } from 'lucide-react'
import { skills } from '@/components/data/portfolio-data'
import SectionHeader from '@/components/ui/SectionHeader'

const icons = {
  fullstack: Code2,
  aiData: Brain,
  tools: Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-harmony-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          title="Skills"
          subtitle="Stack tecnológico"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, skill]) => {
            const Icon = icons[key as keyof typeof icons]
            return (
              <div
                key={key}
                className="group p-8 bg-white rounded-2xl border border-harmony-navy/5 hover:border-harmony-green/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-harmony-green-pale rounded-xl group-hover:bg-harmony-green/20 transition-colors">
                    <Icon className="w-6 h-6 text-harmony-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-harmony-navy">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-harmony-navy-muted">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between text-harmony-navy"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-harmony-green rounded-full" />
                        {item.name}
                      </span>
                      <span className="text-xs text-harmony-navy-muted px-2 py-0.5 bg-harmony-cream rounded">
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
