'use client'

import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'

const services = [
  {
    key: 'customSoftware',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'webpages',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'softwareSystems',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'iosApps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'androidApps',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'aiImplementation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
  }
]

export default function Services({ params: { locale } }: { params: { locale: string } }) {
  const { t } = useTranslation(locale)
  return (
    <div className="bg-white pt-40 min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              {t('services.heroTitle')}
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-8">
              {t('services.heroSubtitle')}
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('services.heroDescription')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.weDesign')}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.weDesignSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={t(`services.items.${service.key}.name`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-xl font-bold text-white">
                    {t(`services.items.${service.key}.name`)}
                  </h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {t(`services.items.${service.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="bg-gradient-to-br from-gray-900 to-black py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-2xl text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              {t('services.contactTitle')}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {t('services.contactDescription')}
            </p>
            <div className="flex items-center justify-center space-x-4 bg-blue-50 rounded-xl p-6">
              <span className="text-3xl">📧</span>
              <a 
                href="mailto:hologramview@gmail.com"
                className="text-2xl text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
              >
                hologramview@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
