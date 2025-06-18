import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { GoogleAnalytics } from '@next/third-parties/google'

let yearsOfExperience = new Date().getFullYear() - 2020

export const metadata: Metadata = {
  title: {
    template: '%s - Clifford Anang',
    default: 'Clifford Anang - Full Stack Engineer, and builder.',
  },
  description: `I’m Clifford, a Full Stack Engineer with ${yearsOfExperience} years of experience. I enjoy building both front-end and backend applications.`,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-7J4D8TZ2J0" />
    </html>
  )
}
