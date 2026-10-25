import { Pill, MapPin, Phone, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = ['Home', 'Categories', 'Products', 'Services', 'About', 'Contact'];
  const categories = ['Prescription Medicine', 'Wellness & Fitness', 'Vitamins & Supplements', 'Baby Care', 'Personal Care', 'Covid Essentials'];

  return (
    <footer className="bg-[#0d1e26] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                <Pill className="text-white" size={24} />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-bold text-white">
                  Nitish <span className="text-emerald-400">Medical</span>
                </div>
                <div className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Store & Online Service</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted neighborhood pharmacy with 24/7 online service. Genuine medicines,
              wellness products, and healthcare essentials delivered to your doorstep.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm hover:text-emerald-400 transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-emerald-400 group-hover:w-3 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#products" className="text-sm hover:text-emerald-400 transition-colors duration-200">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Reach Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Infront of Jarapada Medical, Bihar, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-emerald-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-emerald-400 shrink-0" />
                <span>contact@nitishmedical.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 Nitish Medical Store. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1.5">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500 animate-blink" /> for a healthier community
          </p>
        </div>
      </div>
    </footer>
  );
}
