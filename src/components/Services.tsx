import { Truck, Clock, BadgeCheck, Stethoscope, RefreshCw, FileText, ArrowRight, type LucideIcon } from 'lucide-react';
import { services } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, LucideIcon> = {
  Truck,
  Clock,
  BadgeCheck,
  Stethoscope,
  RefreshCw,
  FileText,
};

export default function Services() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-20 bg-[#1a2e35] relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-900/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 reveal ${active ? 'active' : ''}`} ref={ref}>
          <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">What We Offer</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Comprehensive healthcare services to keep you and your family healthy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-400 hover:-translate-y-2"
                style={{ animation: `fadeInUp 0.5s ease-out ${i * 100}ms both` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-emerald-900/30">
                  {Icon && <Icon size={26} className="text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
