'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const currentLocale = pathname.startsWith('/zh') ? 'zh' : 'en'
  const otherLocale = currentLocale === 'en' ? 'zh' : 'en'
  const otherLocalePath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`)

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#journey', label: t('journey') },
    { href: '#stonewood', label: t('stonewood') },
    { href: '#keycapital', label: t('keycapital') },
    { href: '#philosophy', label: t('philosophy') },
    { href: '#vision', label: t('vision') },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#001B29]/90 backdrop-blur-sm border-b border-[#B1BB36]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-[#B1BB36] font-semibold text-lg tracking-wide">
            John Chow
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#F1F1F1]/70 hover:text-[#B1BB36] text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={otherLocalePath}
              className="ml-4 px-3 py-1 border border-[#B1BB36]/50 rounded text-[#B1BB36] text-sm hover:bg-[#B1BB36] hover:text-[#001B29] transition-all duration-200"
            >
              {otherLocale === 'zh' ? '中文' : 'EN'}
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <a
              href={otherLocalePath}
              className="px-3 py-1 border border-[#B1BB36]/50 rounded text-[#B1BB36] text-sm"
            >
              {otherLocale === 'zh' ? '中文' : 'EN'}
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#F1F1F1] p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#001B29] border-t border-[#B1BB36]/20 px-4 py-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-[#F1F1F1]/70 hover:text-[#B1BB36] text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
