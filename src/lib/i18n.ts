import { useRouter } from 'next/router'

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
}

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
]

export function useTranslation() {
  const router = useRouter()
  const { locale = 'en' } = router
  
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