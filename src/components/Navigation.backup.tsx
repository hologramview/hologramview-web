'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { products } from '@/constants/content'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from '@/lib/i18n'
import { usePathname, useRouter } from 'next/navigation'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Support', href: '/support' },
]

export default function Navigation({ locale }: { locale: string }) {
  const { t } = useTranslation(locale)
  const pathname = usePathname()
  const router = useRouter()

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

  const handleProductsClick = (e: React.MouseEvent) => {
    // Close the dropdown immediately when Products is clicked
    setIsProductsOpen(false)
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-8">
          <Link href={`/${locale}`} className="flex items-center">
            {/* 3D Cube Logo */}
            <div className="w-24 h-24" style={{ perspective: '400px' }}>
              <div
                className="w-full h-full relative hover:scale-105 transition-all duration-300"
                style={{ 
                  transformStyle: 'preserve-3d',
                  animation: 'rotateY 20s linear infinite'
                }}
              >
                {/* Front face */}
                <div 
                  className="absolute w-24 h-24"
                  style={{ transform: 'translateZ(48px)', backfaceVisibility: 'hidden' }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Hologramview"
                    width={96}
                    height={96}
                    priority
                    className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]"
                  />
                </div>
                {/* Back face */}
                <div 
                  className="absolute w-24 h-24"
                  style={{ transform: 'rotateY(180deg) translateZ(48px)', backfaceVisibility: 'hidden' }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Hologramview"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]"
                  />
                </div>
                {/* Right face */}
                <div 
                  className="absolute w-24 h-24"
                  style={{ transform: 'rotateY(90deg) translateZ(48px)', backfaceVisibility: 'hidden' }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Hologramview"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]"
                  />
                </div>
                {/* Left face */}
                <div 
                  className="absolute w-24 h-24"
                  style={{ transform: 'rotateY(270deg) translateZ(48px)', backfaceVisibility: 'hidden' }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Hologramview"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]"
                  />
                </div>
              </div>
            </div>
            <span className="ml-10 text-3xl font-semibold text-gray-900">
              Hologramview Technologies
            </span>
          </Link>
          
          <div className="flex items-center space-x-8">
            {/* About Link */}
            <Link
              href={`/${locale}/about`}
              className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              {t('nav.about')}
            </Link>
            
            {/* Products Link - Dropdown temporarily disabled */}
            <Link
              href={`/${locale}#products`}
              onClick={handleProductsClick}
              className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              {t('nav.products')}
            </Link>
            
            {/* Products Dropdown - HIDDEN FOR NOW (uncomment entire section when ready)
            <div 
              className="relative"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <Link
                href={`/${locale}#products`}
                onClick={handleProductsClick}
                className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                {t('nav.products')}
              </Link>
              
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-1 w-80 max-w-[90vw] bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transform -translate-x-0 lg:-translate-x-1/2"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={`/${locale}/products/${product.name.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-4 py-3 hover:bg-blue-50 hover:border-l-4 hover:border-blue-500 transition-all duration-200 rounded-r-lg"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 relative rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
                          <p className="text-xs text-gray-600 mt-1">{product.shortDesc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
            */
            
            {/* Remaining Navigation Items */}
            <Link
              href={`/${locale}/services`}
              className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              {t('nav.services')}
            </Link>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}
