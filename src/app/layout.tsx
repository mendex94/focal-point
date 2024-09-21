import type { Metadata } from 'next'
import { Inter_Tight as InterTight } from 'next/font/google'
import Providers from '@/components/Providers'
import { Header } from '@/components/header'
import './_styles/globals.scss'

const InterTightFont = InterTight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter-tight',
})

export const metadata: Metadata = {
  title: 'FocalPoint - Organize suas tarefas.',
  description:
    'FocalPoint é o seu app para organziar suas tarefas e focar no que realmente precisa.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <html lang="pt-BR">
        <body className={InterTightFont.variable}>
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  )
}
