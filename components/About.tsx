export default function About() {
  return (
    <section id="hakkimda" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Lüks bir çerçeve efekti */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-brand-gold/30 rounded-2xl"></div>
            <div className="relative h-[500px] bg-gray-200 rounded-2xl overflow-hidden">
              {/* Buraya Ebrar Hanım'ın fotoğrafı gelecek */}
              <div className="w-full h-full flex items-center justify-center text-gray-400 italic">
                [Ebrar Talay Fotoğrafı]
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-3">Uzman Fizyoterapist</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6 leading-tight">
              Fzt. Ebrar Talay <br /> <span className="text-2xl italic">Sağlıklı Hareketin Adresi</span>
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Sakarya'da profesyonel fizyoterapi ve klinik pilates alanında hizmet veren kliniğimizde, 
                kişiye özel tedavi yaklaşımlarını modern teknoloji ile birleştiriyoruz.
              </p>
              <p>
                Amacımız sadece ağrıyı gidermek değil, vücudun fonksiyonel kapasitesini en üst düzeye 
                çıkararak sürdürülebilir bir iyilik hali sağlamaktır. <strong>Sakarya Klinik Pilates</strong> 
                seanslarımızla duruş bozuklukları ve bel-boyun problemlerine kalıcı çözümler sunuyoruz.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-brand-gold/10 pt-10">
              <div>
                <p className="text-3xl font-serif text-brand-dark">500+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Mutlu Danışan</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-brand-dark">5+ Yıl</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Klinik Tecrübe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}