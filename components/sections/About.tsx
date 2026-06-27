'use client'

import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-0.5 bg-[#B1BB36] mb-8"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F1F1] mb-8 leading-tight">
              {t('title')}
            </h2>
            <p className="text-[#F1F1F1]/70 text-lg leading-relaxed">
              {t('body')}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#002a40] to-[#001B29] border border-[#B1BB36]/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-[#B1BB36] mb-2">40+</div>
                <div className="text-[#F1F1F1]/60 text-sm uppercase tracking-widest">Years building</div>
                <div className="mt-8 text-5xl font-bold text-[#B1BB36] mb-2">$1B+</div>
                <div className="text-[#F1F1F1]/60 text-sm uppercase tracking-widest">Portfolio</div>
                <div className="mt-8 text-5xl font-bold text-[#B1BB36] mb-2">2</div>
                <div className="text-[#F1F1F1]/60 text-sm uppercase tracking-widest">Nations bridged</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
