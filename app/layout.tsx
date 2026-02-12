import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fzt. Ebrar Talay | Sakarya Fizyoterapist & Klinik Pilates',
  description: 'Sakarya\'da lüks ve profesyonel fizyoterapi, reformer pilates ve klinik pilates hizmetleri. Ebrar Talay ile sağlığınıza kavuşun.',
  keywords: ['Sakarya Fizyoterapist', 'Sakarya Klinik Pilates', 'Reformer Pilates Sakarya', 'Ebrar Talay'],
  openGraph: {
    title: 'Fzt. Ebrar Talay | Sakarya Fizyoterapist',
    description: 'Modern tekniklerle kişiye özel tedavi yöntemleri.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-brand-light text-brand-dark antialiased">
        {/* Navbar buraya gelecek */}
        <main>{children}</main>
        {/* Footer buraya gelecek */}
      </body>
    </html>
  )
}