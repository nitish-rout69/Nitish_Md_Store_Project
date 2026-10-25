import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, active } = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: 'Infront of Jarapada Medical, Bihar, India' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
    { icon: Mail, label: 'Email', value: 'contact@nitishmedical.com' },
    { icon: Clock, label: 'Hours', value: 'Open 24/7 — Always Available' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-12 reveal ${active ? 'active' : ''}`} ref={ref}>
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e35] mt-2">Contact Us</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Have a question? Need a medicine? Reach out — we are here 24/7.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border-2 border-gray-50 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
                style={{ animation: `fadeInLeft 0.5s ease-out ${i * 100}ms both` }}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <item.icon className="text-emerald-600" size={22} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{item.label}</div>
                  <div className="text-[#1a2e35] font-medium mt-0.5">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border-2 border-gray-50 h-48 bg-emerald-100 flex items-center justify-center relative">
              <div className="absolute inset-0 dot-pattern opacity-50" />
              <div className="text-center relative z-10">
                <MapPin className="mx-auto text-emerald-600 animate-bounce-soft" size={40} />
                <p className="text-sm text-gray-600 mt-2 font-medium">Infront of Jarapada Medical</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-600 font-semibold mt-1 inline-block hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-emerald-100 border-2 border-gray-50" style={{ animation: 'fadeInRight 0.6s ease-out both' }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-[#1a2e35] mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-400 focus:outline-none transition-colors text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#1a2e35] mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-400 focus:outline-none transition-colors text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#1a2e35] mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-400 focus:outline-none transition-colors text-sm resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className={`btn-shine w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  submitted
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-200 hover:scale-[1.02]'
                }`}
              >
                {submitted ? (
                  <>
                    <MessageCircle size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
