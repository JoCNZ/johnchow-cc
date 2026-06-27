'use client'

import { useTranslations } from 'next-intl'

export default function Timeline() {
  const t = useTranslations('timeline')
  const items = t.raw('items') as Array<{ year: string; event: string }>

  return (
    <section id="journey" className="py-24 px-4 bg-[#002030]">
      <div className="max-w-4xl mx-auto">
        <div className="w-16 h-0.5 bg-[#B1BB36] mb-8 mx-auto"></div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F1F1] mb-16 text-center">
          {t('title')}
        </h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#B1BB36]/20 -translate-x-1/2"></div>
          <div className="space-y-12">
            {items.map((item, i) => (
              <div key={i} className={`relative flex gap-8 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#B1BB36] border-4 border-[#002030] z-10 top-1"></div>
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <div className="text-[#B1BB36] font-bold text-xl mb-2">{item.year}</div>
                  <p className="text-[#F1F1F1]/70">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
