import { useEffect, useState } from 'react';
import { Menu, X, ShoppingCart, Search, Phone, MapPin, Clock, Pill } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

export default function Navbar({ cartCount, onCartClick, onSearch }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Categories', href: '#categories' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#066b48] text-white text-xs sm:text-sm py-2 hidden sm:block animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> Infront of Jarapada Medical
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> Open 24/7
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} /> +91 98765 43210
            </span>
          </div>
          <span className="text-emerald-200 font-medium">Front and online service available</span>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass header-shadow py-2' : 'bg-white py-3'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Pill className="text-white" size={24} />
              </div>
              <div className="absolute inset-0 rounded-xl bg-emerald-400 animate-pulse-ring" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold text-[#1a2e35]">
                Nitish <span className="text-emerald-600">Medical</span>
              </div>
              <div className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Store & Online Service</div>
            </div>
          </a>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md relative">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for medicines, wellness products..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full border-2 border-gray-100 focus:border-emerald-400 focus:outline-none text-sm transition-all duration-300 bg-gray-50"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </form>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-[#1a2e35] hover:text-emerald-600 transition-colors duration-200 group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Cart + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCartClick}
              className="relative w-11 h-11 rounded-xl bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ShoppingCart className="text-emerald-600" size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden animate-fade-in-down">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search medicines..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-full border-2 border-gray-100 focus:border-emerald-400 focus:outline-none text-sm bg-gray-50"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </form>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 px-4 rounded-lg hover:bg-emerald-50 text-[#1a2e35] font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
