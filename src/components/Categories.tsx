import { Pill, HeartPulse, Zap, Baby, Sparkles, Activity, ShieldCheck, Stethoscope, type LucideIcon } from 'lucide-react';
import { categories } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, LucideIcon> = {
  Pill,
  HeartPulse,
  Zap,
  Baby,
  Sparkles,
  Activity,
  ShieldCheck,
  Stethoscope,
};

export default function Categories() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className={`text-center mb-12 reveal ${active ? 'active' : ''}`} ref={ref}>
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Shop by Category</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e35] mt-2">Browse Our Categories</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            From prescription medicines to wellness products, find everything you need for a healthier life.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <a
                key={cat.id}
                href="#products"
                className="card-glow group relative bg-white rounded-2xl p-6 border-2 border-gray-50 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100 transition-all duration-400 cursor-pointer text-center"
                style={{ animation: `fadeInUp 0.5s ease-out ${i * 80}ms both` }}
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl ${cat.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {Icon && <Icon size={28} className={cat.color} />}
                </div>
                <h3 className="text-sm font-semibold text-[#1a2e35] group-hover:text-emerald-600 transition-colors">
                  {cat.name}
                </h3>
                <div className="mt-3 flex items-center justify-center gap-1 text-xs text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
