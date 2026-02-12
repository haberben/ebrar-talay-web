import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Sessions from '@/components/Sessions';
import AppointmentForm from '@/components/AppointmentForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  // Not: Numara ileride Sanity Admin panelinden gelecek, 
  // şimdilik test için buraya kendi numaranı (905...) yazabilirsin.
  const whatsappNumber = "905XXXXXXXXX"; 

  return (
    <>
      {/* Üst Menü */}
      <Navbar />

      <main>
        {/* Karşılama Ekranı (H1 ve SEO Odağı) */}
        <Hero />

        {/* Hakkımda Bölümü (Güven ve Uzmanlık) */}
        <About />

        {/* Hizmetler Bölümü (Klinik Pilates, Reformer vb.) */}
        <Services />

        {/* Galeri ve Seanslar (Görsel Kanıtlar) */}
        <Sessions />

        {/* Randevu ve İletişim Bölümü */}
        <section id="iletisim" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6 text-brand-dark">
                Kişiye Özel Tedavi Planı İçin Randevu Alın
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Sakarya'daki kliniğimizde size en uygun fizik tedavi veya pilates programını birlikte planlayalım. 
                Modern ekipmanlarımız ve uzman kadromuzla sağlığınız için yanınızdayız.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-light border border-brand-gold/20 rounded-full flex items-center justify-center text-xl shadow-sm">📍</div>
                  <div>
                    <p className="text-brand-dark font-bold">Adres</p>
                    <p className="text-gray-500 text-sm">Serdivan, Sakarya</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-light border border-brand-gold/20 rounded-full flex items-center justify-center text-xl shadow-sm">📞</div>
                  <div>
                    <p className="text-brand-dark font-bold">Telefon & WhatsApp</p>
                    <p className="text-gray-500 text-sm">+90 (5xx) xxx xx xx</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dinamik WhatsApp Yönlendirmeli Form */}
            <AppointmentForm />
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="py-12 bg-brand-light border-t border-brand-gold/10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-serif text-xl text-brand-dark mb-4">EBRAR <span className="text-brand-gold">TALAY</span></p>
          <p className="text-gray-400 text-sm">© 2026 Ebrar Talay. Tüm Hakları Saklıdır.</p>
          <p className="text-gray-400 text-[10px] mt-4 uppercase tracking-[0.2em]">Sakarya Fizyoterapist & Klinik Pilates</p>
        </div>
      </footer>

      {/* Sabit WhatsApp Butonu */}
      <FloatingWhatsApp number={whatsappNumber} />
    </>
  );
}