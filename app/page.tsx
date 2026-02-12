import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Sessions from '../components/Sessions';
import AppointmentForm from '../components/AppointmentForm';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  const whatsappNumber = "905XXXXXXXXX"; 

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Sessions />
        <section id="iletisim" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6 text-brand-dark">Randevu Alın</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Sakarya'daki kliniğimizde size en uygun programı planlayalım.</p>
            </div>
            <AppointmentForm />
          </div>
        </section>
      </main>
      <FloatingWhatsApp number={whatsappNumber} />
    </>
  );
}
