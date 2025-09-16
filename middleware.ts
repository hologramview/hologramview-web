import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from '@/lib/constants'

function getLocale(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Get locale from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language')
    let detectedLocale = defaultLocale

    if (acceptLanguage) {
      const languages = acceptLanguage
        .split(',')
        .map(lang => lang.split(';')[0].trim().toLowerCase())
      
      // Find the first supported locale
      detectedLocale = languages.find(lang => 
        locales.includes(lang) || 
        locales.includes(lang.split('-')[0])
      ) || defaultLocale

      // Handle country-specific locales (e.g., 'en-US' -> 'en')
      if (!locales.includes(detectedLocale) && detectedLocale.includes('-')) {
        const baseLang = detectedLocale.split('-')[0]
        if (locales.includes(baseLang)) {
          detectedLocale = baseLang
        }
      }
    }

    // Redirect to locale-prefixed path
    const newPathname = detectedLocale === defaultLocale && pathname === '/' 
      ? `/${defaultLocale}` 
      : `/${detectedLocale}${pathname}`
      
    return NextResponse.redirect(
      new URL(newPathname, request.url)
    )
  }
}

export function middleware(request: NextRequest) {
  // Handle API routes and static files
  if (
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  return getLocale(request)
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}