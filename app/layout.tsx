import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zness E-commerce',
  description: 'E-commerce test application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
