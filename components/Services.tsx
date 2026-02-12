import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Klinik Pilates',
    description: 'Sakarya Klinik Pilates hizmetimizle, omurga sağlığınızı koruyor ve vücut farkındalığınızı artırıyoruz.',
    icon: '🧘‍♀️'
  },
  {
    title: 'Reformer Pilates',
    description: 'Reformer Pilates Sakarya seanslarımızda, aletli pilates ile kaslarınızı uzatırken güçlenmenizi sağlıyoruz.',
    icon: '💎'
  },
  {
    title: 'Manuel Terapi',
    description: 'Uzman dokunuşlarla eklem ve kas ağrılarınıza kalıcı ve doğal çözümler üretiyoruz.',
    icon: '👐'
  },
  {
    title: 'Nörolojik Rehabilitasyon',
    description: 'Nörolojik rahatsızlıklar sonrası fonksiyonel bağımsızlığınızı geri kazanmanıza yardımcı oluyoruz.',
    icon: '🧠'
  }
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-3">Uzmanlık Alanlarımız</h2>
          <p className="font-serif text-4xl md:text-5xl text-brand-dark">Size Özel Tedavi Çözümleri</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}