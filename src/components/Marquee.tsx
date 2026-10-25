import { Sparkles } from 'lucide-react';

export default function Marquee() {
  const messages = [
    'Free home delivery on orders above Rs. 500',
    '24/7 Online Service Available',
    '100% Genuine Medicines',
    'Upload prescription & get medicines delivered',
    'Expert consultation from certified pharmacists',
    'Front and online service available',
  ];

  return (
    <div className="bg-emerald-600 py-2.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-6 text-sm text-emerald-50 font-medium">
            <Sparkles size={14} className="text-emerald-200" />
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
