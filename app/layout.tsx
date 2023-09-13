import './globals.css'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Fast Music',
  description: 'Aulas online de música',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
