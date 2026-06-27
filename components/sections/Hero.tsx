'use client'

import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#001B29] via-[#002a40] to-[#001B29]"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, #B1BB36 0%, transparent 50%), radial-gradient(circle at 70% 20%, #B1BB36 0%, transparent 40%)'
        }}
      ></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1 border border-[#B1BB36]/40 rounded-full text-[#B1BB36] text-sm tracking-widest uppercase mb-8">
          Stonewood Group · Key Capital Management
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F1F1F1] mb-4 leading-tight">
          {t('name')}
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-[#B1BB36] font-light mb-6">
          {t('tagline')}
        </p>
        <p className="text-lg sm:text-xl text-[#F1F1F1]/70 mb-12 max-w-2xl mx-auto">
          {t('subheadline')}
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-[#B1BB36] text-[#001B29] px-8 py-4 rounded font-semibold text-lg hover:bg-[#c9d440] transition-colors duration-200"
        >
          {t('cta')}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F1F1F1]/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-[#F1F1F1]/30 to-transparent"></div>
      </div>
    </section>
  )
}
