const galleryItems = [
  { id: 1, label: 'Klinik Seanslar' },
  { id: 2, label: 'Reformer Pilates' },
  { id: 3, label: 'Modern Klinik' },
  { id: 4, label: 'Ekipmanlar' },
];

export default function Sessions() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-3">Galeri</h2>
            <p className="font-serif text-4xl text-brand-dark">Kliniğimizden Görüntüler</p>
          </div>
          <button className="text-brand-dark font-medium border-b border-brand-gold hover:text-brand-gold transition pb-1">
            Tüm Fotoğrafları Gör
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="aspect-[3/4] bg-gray-300 rounded-xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium tracking-widest text-xs uppercase">{item.label}</span>
              </div>
              {/* Buraya gerçek görsel eklenecek */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}