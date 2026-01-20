interface SectionHeaderProps {
  number: string
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeader({ number, title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <span className="section-number mb-4 block">
        ({number}) {title.toUpperCase()}
      </span>
      <h2 className="text-4xl sm:text-5xl font-light text-harmony-navy leading-tight">
        {subtitle || title}
      </h2>
    </div>
  )
}
