interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'featured' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-harmony-green-pale text-harmony-green',
    featured: 'bg-harmony-green text-white',
    outline: 'border border-harmony-navy/20 text-harmony-navy-muted',
  }

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-4 py-1.5
        rounded-full text-sm font-medium
        transition-all duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}
