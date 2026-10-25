import { useEffect, useRef, useState } from 'react';
import { Users, Package, HeartHandshake, Award, type LucideIcon } from 'lucide-react';
import { useCountUp } from '@/hooks/useReveal';
import { useReveal } from '@/hooks/useReveal';

function StatItem({ icon: Icon, target, suffix, label, start }: { icon: LucideIcon; target: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(target, 2000, start);
  return (
    <div className="text-center group">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
        <Icon size={26} className="text-emerald-600" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-[#1a2e35]">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, active } = useReveal<HTMLDivElement>();
  const [statsStart, setStatsStart] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, target: 5000, suffix: '+', label: 'Happy Customers' },
    { icon: Package, target: 1200, suffix: '+', label: 'Products Available' },
    { icon: HeartHandshake, target: 10, suffix: '+', label: 'Years of Service' },
    { icon: Award, target: 100, suffix: '%', label: 'Genuine Products' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left image */}
        <div className={`relative reveal ${active ? 'active' : ''}`} ref={ref}>
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10">
            <img
              src="https://images.pexels.com/photos/14797855/pexels-photo-14797855.jpeg?auto=compress&cs=tinysrgb&h=500&w=700"
              alt="Pharmacist at Nitish Medical Store"
              className="w-full h-[380px] object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass rounded-2xl px-6 py-3 shadow-xl whitespace-nowrap animate-float">
            <div className="text-2xl font-bold gradient-text">10+ Years</div>
            <div className="text-xs text-gray-500 text-center">Serving the Community</div>
          </div>
        </div>

        {/* Right content */}
        <div className={`space-y-5 reveal ${active ? 'active' : ''}`} style={{ transitionDelay: '150ms' }}>
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e35] leading-tight">
            Your Neighborhood Pharmacy with a Digital Touch
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nitish Medical Store, located infront of Jarapada Medical, has been serving the community
            for over a decade. We combine the trust of a local pharmacy with the convenience of online
            ordering. Whether you need prescription medicines, wellness products, or health consultations,
            we are here for you — day and night.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our front-and-online service ensures you get your medicines when you need them most.
            Walk in, or order from the comfort of your home.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} start={statsStart} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
