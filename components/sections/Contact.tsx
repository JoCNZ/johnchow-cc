'use client'

import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-0.5 bg-[#B1BB36] mb-8 mx-auto"></div>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F1F1] mb-6">{t('title')}</h2>
        <p className="text-[#F1F1F1]/60 text-xl mb-16 max-w-2xl mx-auto">{t('subtitle')}</p>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-[#002030] border border-[#B1BB36]/20 rounded-xl p-8 hover:border-[#B1BB36]/60 transition-colors">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-[#B1BB36] font-semibold mb-2">{t('investor')}</h3>
            <a href="mailto:ir@stonewoodgroup.co.nz" className="text-[#F1F1F1]/60 text-sm hover:text-[#B1BB36] transition-colors">
              ir@stonewoodgroup.co.nz
            </a>
          </div>
          <div className="bg-[#002030] border border-[#B1BB36]/20 rounded-xl p-8 hover:border-[#B1BB36]/60 transition-colors">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-[#B1BB36] font-semibold mb-2">{t('business')}</h3>
            <a href="mailto:hello@stonewoodgroup.co.nz" className="text-[#F1F1F1]/60 text-sm hover:text-[#B1BB36] transition-colors">
              hello@stonewoodgroup.co.nz
            </a>
          </div>
          <div className="bg-[#002030] border border-[#B1BB36]/20 rounded-xl p-8 hover:border-[#B1BB36]/60 transition-colors">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-[#B1BB36] font-semibold mb-2">{t('email')}</h3>
            <a href="mailto:john.chow@stonewoodgroup.co.nz" className="text-[#F1F1F1]/60 text-sm hover:text-[#B1BB36] transition-colors">
              john.chow@stonewoodgroup.co.nz
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#F1F1F1]/10">
          <p className="text-[#F1F1F1]/30 text-sm">
            © 2026 John Chow. Stonewood Group · Key Capital Management · New Zealand
          </p>
        </div>
      </div>
    </section>
  )
}
