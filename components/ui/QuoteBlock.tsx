interface QuoteBlockProps {
  children: React.ReactNode
  className?: string
}

export default function QuoteBlock({ children, className = '' }: QuoteBlockProps) {
  return (
    <blockquote
      className={`
        border-l-[3px] border-harmony-green
        pl-6 py-2
        italic text-harmony-navy-light
        text-lg leading-relaxed
        ${className}
      `}
    >
      "{children}"
    </blockquote>
  )
}
