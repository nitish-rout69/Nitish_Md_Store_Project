import { Truck, Clock, BadgeCheck, Phone } from 'lucide-react';

export default function InfoBar() {
  const items = [
    { icon: Truck, label: 'Free Delivery', sub: 'Above Rs. 500' },
    { icon: Clock, label: '24/7 Service', sub: 'Always Open' },
    { icon: BadgeCheck, label: 'Genuine Products', sub: '100% Authentic' },
    { icon: Phone, label: 'Call to Order', sub: '+91 98765 43210' },
  ];

  return (
    <div className="bg-white border-y border-gray-100 -mt-2 relative z-20">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 group cursor-default"
            style={{ animation: `fadeInUp 0.5s ease-out ${i * 100}ms both` }}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center transition-colors duration-300 group-hover:scale-110 transition-transform">
              <item.icon className="text-emerald-600" size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#1a2e35]">{item.label}</div>
              <div className="text-xs text-gray-500">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
