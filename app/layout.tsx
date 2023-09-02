import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Head from 'next/head'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Service',
  description: 'AI prompts to data convertor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <html lang="en">
          <CrispProvider />
          <body className={inter.className}>
            <ToasterProvider />
            {children}
          </body>
        </html>
      
    </ClerkProvider>
  )
}
