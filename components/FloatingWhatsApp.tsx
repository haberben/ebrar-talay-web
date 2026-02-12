export default function FloatingWhatsApp({ number }: { number: string }) {
  return (
    <a 
      href={`https://wa.me/${number}`}
      target="_blank"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="WhatsApp Randevu"
    >
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.991-.51-5.759-1.474l-6.335 1.692zm6.733-4.039l.485.288c1.42.844 3.063 1.29 4.747 1.29 5.453 0 9.891-4.438 9.891-9.891 0-2.637-1.03-5.116-2.9-6.985-1.871-1.868-4.35-2.899-6.991-2.899-5.454 0-9.891 4.438-9.891 9.891 0 1.905.541 3.754 1.562 5.352l.334.524-.993 3.628 3.765-.998z"/>
      </svg>
    </a>
  );
}