import { stats } from '@/components/data/portfolio-data'

export default function Stats() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-harmony-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center lg:text-left">
              <span className="text-xs text-harmony-navy-muted tracking-wider">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="mt-2">
                <span className="text-5xl sm:text-6xl font-light text-harmony-navy">
                  {stat.number}
                </span>
              </div>
              <p className="mt-2 text-harmony-navy-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
