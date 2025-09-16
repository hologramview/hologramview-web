'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { focusAreas, products, companyInfo } from '@/constants/content'
import { useTranslation } from '@/lib/i18n'
import { useEffect } from 'react'

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t } = useTranslation(locale)
  
  // Handle scrolling to products section when page loads with hash
  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#products') {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        const productsSection = document.getElementById('products')
        if (productsSection) {
          productsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 500)
    }
  }, [])
  
  return (
    <div className="bg-white pt-40 overflow-x-hidden">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-6 sm:py-32 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {t('home.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t('home.subtitle')}
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              {t('home.mission')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Focus Areas section */}
      <div className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">{t('home.ourFocus')}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('home.focusTitle')}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {focusAreas.map((area, index) => {
                const focusAreaKeys = ['aiTechnology', 'travel', 'music', 'education', 'productivity']
                const focusKey = focusAreaKeys[index] || 'aiTechnology'
                return (
                  <motion.div
                    key={area.title}
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={area.image}
                        alt={t(`focusAreas.${focusKey}.title`)}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      {t(`focusAreas.${focusKey}.title`)}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{t(`focusAreas.${focusKey}.description`)}</p>
                    </dd>
                  </motion.div>
                )
              })}
            </dl>
          </div>
        </div>
      </div>

      {/* Products section */}
      <div id="products" className="relative z-10 bg-gray-900 py-24 sm:py-32" style={{ scrollMarginTop: '120px' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">{t('home.ourProducts')}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('home.productsTitle')}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 px-4 sm:px-0">
            {products.map((product, index) => {
              const productKeys = ['aiStudioChain', 'dynamicWorldExplorer', 'floatlearn', 'spaceChoices', 'tigerSimfoniPortal', 'scholare']
              const productKey = productKeys[index] || 'aiStudioChain'
              return (
                <motion.article
                  key={product.name}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-48 h-80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Coming Soon Stamp */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-blue-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-md transform rotate-12 shadow-lg">
                      {t('home.comingSoon')}
                    </div>
                  </div>
                  
                  <Image
                    src={product.image}
                    alt={t(`products.${productKey}.name`)}
                    fill
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  
                  <div className="relative flex-1 flex flex-col justify-end">
                    <h3 className="text-lg font-semibold leading-6 text-white h-14 flex items-center mb-2">
                      {t(`products.${productKey}.name`)}
                    </h3>
                    <p className="text-sm leading-6 text-gray-300 line-clamp-3">
                      {t(`products.${productKey}.description`)}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden mb-10">
                <Image
                  src={companyInfo.teamImage}
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gray-900/20" />
              </div>
              <p className="text-lg leading-8 text-gray-600 italic text-center">
                "{t('about.teamQuote')}"
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
