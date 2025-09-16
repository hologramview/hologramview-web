'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
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
              <h3 className="text-xl font-bold">Hologramview Technologies</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              We create innovative digital solutions tailored to your needs. From custom software to AI implementation, we build technology that transforms businesses.
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
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/#products" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Hologramview Technologies. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Built with ❤️ by Hologramview Technologies
          </div>
        </div>
      </div>
    </footer>
  )
}