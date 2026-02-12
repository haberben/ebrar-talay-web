export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Arka Plan Yazısı (Estetik amaçlı) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <h2 className="text-[20vw] font-bold select-none">SAKARYA</h2>
      </div>

      <div className="relative z-10 text-center px-6">
        <span className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4 block animate-fade-in">
          Uzman Fizyoterapist
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-brand-dark mb-6 max-w-4xl mx-auto leading-tight">
          Hareketin Özgürlüğünü <br /> 
          <span className="italic">Yeniden Keşfedin</span>
        </h1>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
          Sakarya'da klinik pilates ve modern fizyoterapi yöntemleriyle ağrılarınızdan kurtulun, yaşam kalitenizi artırın.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#iletisim" className="bg-brand-dark text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-brand-gold transition-all duration-300 shadow-xl">
            Ücretsiz Ön Görüşme
          </a>
          <a href="#hizmetler" className="border border-brand-dark text-brand-dark px-10 py-4 rounded-full text-lg font-medium hover:bg-brand-dark hover:text-white transition-all duration-300">
            Hizmetlerimizi İnceleyin
          </a>
        </div>
      </div>
    </section>
  );
}