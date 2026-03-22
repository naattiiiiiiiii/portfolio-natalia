'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'es' | 'en'

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es')

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

// Helper to pick the right language from a bilingual field
export function t(field: { es: string; en: string }, lang: Lang): string {
  return field[lang]
}
