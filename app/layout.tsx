import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Revienta el Casino en Vivo',
  description: 'Multiplica tu plata x4 junto al experto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}


