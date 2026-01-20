import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  onClick,
}: ButtonProps) {
  const variants = {
    primary: 'bg-harmony-navy text-white hover:bg-harmony-navy-light',
    secondary: 'border border-harmony-navy/20 text-harmony-navy hover:border-harmony-navy/40 hover:bg-harmony-cream-dark',
    ghost: 'text-harmony-navy hover:text-harmony-green',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const baseStyles = twMerge(
    clsx(
      'inline-flex items-center justify-center gap-2',
      'rounded-full font-medium',
      'transition-all duration-300',
      variants[variant],
      sizes[size],
      className
    )
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  )
}
