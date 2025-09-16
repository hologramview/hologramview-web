'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { languages } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  // Extract current locale from pathname or default to 'en'
  const currentLocale = pathname.startsWith('/') ? pathname.split('/')[1] : 'en'
  const locale = languages.find(lang => lang.code === currentLocale)?.code || 'en'
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  const handleLanguageChange = (langCode: string) => {
    const newPath = langCode === 'en' ? pathname.replace(/^\/[a-z]{2}/, '') || '/' : `/${langCode}${pathname.replace(/^\/[a-z]{2}/, '') || ''}`
    window.location.href = newPath
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-gray-700">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                locale === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg mr-3">{language.flag}</span>
              <span>{language.name}</span>
              {locale === language.code && (
                <svg className="ml-auto w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}