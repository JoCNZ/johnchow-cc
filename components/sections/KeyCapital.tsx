'use client'

import { useTranslations } from 'next-intl'

export default function KeyCapital() {
  const t = useTranslations('keycapital')
  const highlights = t.raw('highlights') as string[]

  return (
    <section id="keycapital" className="py-24 px-4 bg-[#002030]">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-0.5 bg-[#B1BB36] mb-8"></div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F1F1] mb-4">{t('title')}</h2>
            <p className="text-[#B1BB36] text-xl mb-8">{t('subtitle')}</p>
            <p className="text-[#F1F1F1]/70 leading-relaxed">{t('body')}</p>
          </div>
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#001B29] border border-[#B1BB36]/20 rounded-lg p-5">
                <div className="w-2 h-2 rounded-full bg-[#B1BB36] flex-shrink-0"></div>
                <span className="text-[#F1F1F1]/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
