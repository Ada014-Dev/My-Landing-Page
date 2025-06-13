import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blessing Uche',
  description: 'Created by Blessing Uche'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
