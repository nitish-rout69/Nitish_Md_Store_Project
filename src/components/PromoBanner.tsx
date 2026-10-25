import { Upload, ArrowRight, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function PromoBanner() {
  const { ref, active } = useReveal<HTMLDivElement>();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 animate-gradient p-8 sm:p-12 reveal ${active ? 'active' : ''}`}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3" />
          <div className="absolute top-1/2 right-20 w-20 h-20 border-4 border-white/20 rounded-full animate-rotate-slow" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-white space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                <ShieldCheck size={16} /> Prescription Required?
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Upload Your Prescription
                <br />
                <span className="text-emerald-100">We Deliver Medicines to Your Door</span>
              </h3>
              <p className="text-emerald-50 text-sm max-w-md">
                Simply upload your doctor's prescription and our pharmacists will prepare and deliver
                your medicines — fast, safe, and hassle-free.
              </p>
            </div>
            <button className="btn-shine shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-semibold hover:scale-105 transition-transform duration-300 shadow-xl">
              <Upload size={18} /> Upload Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
