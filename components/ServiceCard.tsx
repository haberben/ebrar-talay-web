interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceProps) {
  return (
    <div className="group p-8 bg-white border border-brand-gold/10 rounded-2xl hover:border-brand-gold/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
        {icon}
      </div>
      <h3 className="font-serif text-2xl text-brand-dark mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>
      <div className="w-10 h-[2px] bg-brand-gold group-hover:w-full transition-all duration-500"></div>
    </div>
  );
}