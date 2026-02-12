'use client'
import { useState } from 'react'

export default function AppointmentForm() {
  const [name, setName] = useState('')
  const [service, setService] = useState('Klinik Pilates')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const phone = "905XXXXXXXXX" // Burası Admin'den gelecek
    const message = `Merhaba, ben ${name}. ${service} hizmetiniz için randevu almak istiyorum.`
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="p-8 bg-white border border-brand-gold/20 rounded-2xl shadow-sm">
      <h2 className="font-serif text-3xl mb-6 text-brand-dark">Randevu Oluştur</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Adınız Soyadınız"
          className="w-full p-4 border rounded-lg focus:outline-brand-gold"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select 
          className="w-full p-4 border rounded-lg focus:outline-brand-gold"
          onChange={(e) => setService(e.target.value)}
        >
          <option>Sakarya Klinik Pilates</option>
          <option>Manuel Terapi</option>
          <option>Reformer Pilates</option>
        </select>
        <button className="w-full bg-brand-dark text-white p-4 rounded-lg font-bold hover:bg-opacity-90 transition">
          WhatsApp ile Randevu Al
        </button>
      </form>
    </section>
  )
}