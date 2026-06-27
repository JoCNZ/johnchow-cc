'use client'

import { useTranslations } from 'next-intl'

export default function Vision() {
  const t = useTranslations('vision')

  return (
    <section id="vision" className="py-24 px-4 bg-[#002030]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-0.5 bg-[#B1BB36] mb-8 mx-auto"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F1F1] mb-4">{t('title')}</h2>
          <p className="text-[#F1F1F1]/60 text-xl italic">{t('subtitle')}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-[#001B29] border border-[#B1BB36]/20 rounded-xl p-10">
            <div className="text-[#B1BB36] text-4xl font-bold mb-6">2035</div>
            <p className="text-[#F1F1F1]/70 leading-relaxed">{t('body2035')}</p>
          </div>
          <div className="bg-[#001B29] border border-[#B1BB36]/20 rounded-xl p-10">
            <div className="text-[#B1BB36] text-4xl font-bold mb-6">2045</div>
            <p className="text-[#F1F1F1]/70 leading-relaxed">{t('body2045')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
