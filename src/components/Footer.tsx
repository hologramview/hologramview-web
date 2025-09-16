'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'
import { usePathname, useRouter } from 'next/navigation'
import { getLocaleFromPathname } from '@/lib/i18n'

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()
  const locale = getLocaleFromPathname(pathname)
  const { t } = useTranslation(locale)
  
  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Check if we're on the home page
    const isHomePage = pathname === `/${locale}`
    
    if (isHomePage) {
      // If we're already on home page, just scroll to products
      const productsSection = document.getElementById('products')
      if (productsSection) {
        productsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      // If we're on a different page, navigate to home page with hash
      router.push(`/${locale}#products`)
    }
  }
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 relative mr-3">
                <Image
                  src="/images/logo.png"
                  alt="Hologramview"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">{t('footer.company')}</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex items-center">
              <span className="text-2xl mr-2">📧</span>
              <a 
                href="mailto:hologramview@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                hologramview@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}`} 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}#products`} 
                  onClick={handleProductsClick}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/services`} 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('nav.services')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}/terms`} 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.termsOfService')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/privacy`} 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} {t('footer.company')}. {t('footer.copyright')}
          </div>
          <div className="text-gray-400 text-sm">
            {t('footer.builtWith')}
          </div>
        </div>
      </div>
    </footer>
  )
}