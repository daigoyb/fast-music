import './globals.css'
import { Montserrat } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'

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
    <ClerkProvider localization={ptBR} >
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
