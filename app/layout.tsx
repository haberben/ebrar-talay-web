import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fzt. Ebrar Talay | Sakarya Fizyoterapist & Klinik Pilates',
  description: 'Sakarya\'da lüks ve profesyonel fizyoterapi hizmetleri.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
