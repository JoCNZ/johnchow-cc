'use client'

import { useTranslations } from 'next-intl'

export default function Stonewood() {
  const t = useTranslations('stonewood')
  const pillars = t.raw('pillars') as Array<{ icon: string; title: string; body: string }>

  return (
    <section id="stonewood" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-0.5 bg-[#B1BB36] mb-8 mx-auto"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F1F1] mb-4">{t('title')}</h2>
          <p className="text-[#F1F1F1]/60 text-xl">{t('subtitle')}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-[#002030] border border-[#B1BB36]/20 rounded-xl p-8 hover:border-[#B1BB36]/60 transition-colors duration-300">
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-[#B1BB36] font-semibold text-xl mb-3">{pillar.title}</h3>
              <p className="text-[#F1F1F1]/60 text-sm leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
