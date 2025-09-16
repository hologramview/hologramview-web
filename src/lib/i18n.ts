'use client'

import { usePathname } from 'next/navigation'

// Import all translation files
import en from '@/locales/en.json'
import es from '@/locales/es.json'
import fr from '@/locales/fr.json'
import de from '@/locales/de.json'
import ja from '@/locales/ja.json'
import zh from '@/locales/zh.json'
import pt from '@/locales/pt.json'
import it from '@/locales/it.json'
import ru from '@/locales/ru.json'
import pl from '@/locales/pl.json'

const translations = {
  en,
  es,
  fr,
  de,
  ja,
  zh,
  pt,
  it,
  ru,
  pl,
}

import { locales, defaultLocale, languages, type Locale } from './constants'

export { locales, defaultLocale, languages }

export function getLocaleFromPathname(pathname: string): Locale {
  const pathParts = pathname.split('/').filter(Boolean)
  const potentialLocale = pathParts[0]
  return locales.includes(potentialLocale as Locale) ? potentialLocale as Locale : defaultLocale
}

export function useTranslation(locale?: string) {
  const pathname = usePathname()
  const currentLocale = locale || getLocaleFromPathname(pathname)
  
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[currentLocale as keyof typeof translations] || translations.en
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  return { t, locale: currentLocale, languages }
}

// Server-side translation function
export function getTranslation(locale: string = defaultLocale) {
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations] || translations.en
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  return { t, locale, languages }
}
