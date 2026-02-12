import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-brand-light/80 backdrop-blur-md border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-brand-dark">
          EBRAR <span className="text-brand-gold">TALAY</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          <Link href="#hizmetler" className="hover:text-brand-gold transition">Hizmetler</Link>
          <Link href="#hakkimda" className="hover:text-brand-gold transition">Hakkımda</Link>
          <Link href="#blog" className="hover:text-brand-gold transition">Blog</Link>
          <Link href="#iletisim" className="bg-brand-dark text-white px-5 py-2 rounded-full hover:bg-brand-gold transition">Randevu Al</Link>
        </div>
      </div>
    </nav>
  );
}