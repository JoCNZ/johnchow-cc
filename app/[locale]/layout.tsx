import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Chow — Building Bridges',
  description: 'Founder & Managing Director of Stonewood Group and Key Capital Management. Building bridges between New Zealand and China.',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  const messages = await getMessages()

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={workSans.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
