import {
  Pill,
  ShieldCheck,
  Truck,
  ArrowRight,
  Stethoscope,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-white pt-12 pb-20 dot-pattern"
    >
      {/* Floating decorative shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-teal-200/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-amber-200/20 rounded-full blur-3xl animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium animate-fade-in-down">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Open Now — 24/7 Online Service Available
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1a2e35] animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Your Trusted
            <br />
            <span className="gradient-text">Medicine Store</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-600">
              at Your Service
            </span>
          </h1>

          <p
            className="text-lg text-gray-600 max-w-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Nitish Medical Store brings you genuine medicines, wellness
            products, and healthcare essentials delivered right to your
            doorstep. Quality you can trust, service you can rely on.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#products"
              className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300"
            >
              Shop Now <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300"
            >
              <Stethoscope size={18} /> Our Services
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-3 pt-4 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            {[
              { icon: ShieldCheck, label: "100% Genuine" },
              { icon: Truck, label: "Free Delivery" },
              { icon: Pill, label: "Licensed Pharmacy" },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <badge.icon className="text-emerald-600" size={18} />
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div
          className="relative animate-fade-in-right"
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20">
            <img
              src="https://images.pexels.com/photos/8657359/pexels-photo-8657359.jpeg?auto=compress&cs=tinysrgb&h=600&w=800"
              alt="Pharmacist serving customer at Nitish Medical Store"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
          </div>

          {/* Floating cards */}
          <div className="absolute -top-5 -left-5 glass rounded-2xl p-4 shadow-xl animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                <Truck className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-[#1a2e35]">
                  Fast Delivery
                </div>
                <div className="text-xs text-gray-500">Within 30 mins</div>
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-5 -right-5 glass rounded-2xl p-4 shadow-xl animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-[#1a2e35]">Verified</div>
                <div className="text-xs text-gray-500">Authentic Products</div>
              </div>
            </div>
          </div>

          {/* Rotating ring decoration */}
          <div className="absolute -top-10 -right-10 w-24 h-24 border-4 border-dashed border-emerald-200 rounded-full animate-rotate-slow opacity-60" />
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,50 C360,100 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
