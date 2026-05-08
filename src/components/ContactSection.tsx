'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const seedOptions = [
  'G-20', 'G-22', 'G-32', 'G-24', 'No. 37', 'No. 38', 'No. 39', 'Sona', 'Girnar 4', 'Girnar 5', 'Not Sure',
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  variety: string;
  quantity: string;
  message: string;
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    location: '',
    variety: '',
    quantity: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Build mailto link as fallback for client-side email
    const subject = encodeURIComponent(`Seed Enquiry from ${formData.name} - ${formData.variety}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nLocation: ${formData.location}\nVariety Interested: ${formData.variety}\nQuantity Required: ${formData.quantity}\n\nMessage:\n${formData.message}`
    );

    // Simulate brief delay then open email client
    await new Promise((r) => setTimeout(r, 800));

    window.location.href = `mailto:hetbhalodi8907@gmail.com?subject=${subject}&body=${body}`;
    setStatus('sent');

    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', phone: '', email: '', location: '', variety: '', quantity: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f9fafb 0%, #f1f8e9 100%)' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, #e8f5e9, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 -translate-x-1/2 translate-y-1/2"
          style={{ background: 'radial-gradient(circle, #c8e6c9, transparent)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border"
            style={{ background: '#e8f5e9', borderColor: '#c8e6c9', color: '#1a5c2a' }}>
            <Mail className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#0d3d1a' }}>
            Send Us Your <span style={{ color: '#d4a017' }}>Enquiry</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg" style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.8 }}>
            Ready to invest in the best seeds for your farm? Fill in the form below and our expert team will reach out to guide you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Info card */}
            <div className="p-7 rounded-2xl text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0d3d1a 0%, #1a5c2a 100%)' }}>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #d4a017, transparent)', transform: 'translate(30%, -30%)' }} />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  Shubham Agri Seeds
                </h3>
                <p className="text-white/60 text-xs mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Your trusted seed partner since 2006
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(212,160,23,0.2)' }}>
                      <MapPin className="w-4 h-4" style={{ color: '#f5c842' }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: '#d4a017', fontFamily: 'system-ui, sans-serif' }}>Address</div>
                      <div className="text-sm text-white/80 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                        Opp. Ganesh Weighbridge,<br />
                        Veraval Road, Sondarada,<br />
                        Keshod, Gujarat, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(212,160,23,0.2)' }}>
                      <Mail className="w-4 h-4" style={{ color: '#f5c842' }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: '#d4a017', fontFamily: 'system-ui, sans-serif' }}>Email</div>
                      <a href="mailto:hetbhalodi8907@gmail.com" className="text-sm text-white/80 hover:text-white transition-colors" style={{ fontFamily: 'system-ui, sans-serif' }}>
                        hetbhalodi8907@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(212,160,23,0.2)' }}>
                      <Phone className="w-4 h-4" style={{ color: '#f5c842' }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: '#d4a017', fontFamily: 'system-ui, sans-serif' }}>WhatsApp / Call</div>
                      <div className="text-sm text-white/80" style={{ fontFamily: 'system-ui, sans-serif' }}>Available on WhatsApp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="p-6 rounded-2xl bg-white" style={{ border: '1.5px solid #e8f5e9', boxShadow: '0 4px 20px rgba(13,61,26,0.06)' }}>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-wide" style={{ color: '#0d3d1a', fontFamily: 'system-ui, sans-serif' }}>
                Business Hours
              </h4>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
                {[
                  { day: 'Monday – Saturday', time: '8:00 AM – 7:00 PM' },
                  { day: 'Sunday', time: '9:00 AM – 2:00 PM' },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid #f1f8e9' }}>
                    <span className="text-gray-600">{h.day}</span>
                    <span className="font-semibold" style={{ color: '#1a5c2a' }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/?text=Hello%20Shubham%20Agri%20Seeds%2C%20I%20am%20interested%20in%20your%20seeds.%20My%20location%3A%20https%3A%2F%2Fmaps.google.com%2F%3Fq%3D7793%2B8Q%2BSondarda%2CGujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)', color: 'white', boxShadow: '0 6px 20px rgba(37,211,102,0.3)' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.2)' }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm">Chat on WhatsApp</div>
                <div className="text-white/80 text-xs">Quick response guaranteed</div>
              </div>
            </a>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-7 sm:p-8"
              style={{ boxShadow: '0 8px 40px rgba(13,61,26,0.1)', border: '1.5px solid #e8f5e9' }}>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Georgia, serif', color: '#0d3d1a' }}>
                Seed Enquiry Form
              </h3>
              <p className="text-gray-500 text-sm mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Fill in the details below and we'll get back to you within 24 hours.
              </p>

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: '#e8f5e9' }}>
                    <CheckCircle className="w-10 h-10" style={{ color: '#1a5c2a' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif', color: '#0d3d1a' }}>
                    Enquiry Sent!
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    Your email client should have opened. Our team will reach out within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#1a5c2a', fontFamily: 'system-ui, sans-serif' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#1a5c2a', fontFamily: 'system-ui, sans-serif' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your mobile number"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#1a5c2a', fontFamily: 'system-ui, sans-serif' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#1a5c2a', fontFamily: 'system-ui, sans-serif' }}>
                        Village / Town *
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Your location"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#1a5c2a', fontFamily: 'system-ui, sans-serif' }}>
                        Seed Variety Interested
                      </label>
                      <select
                        name="variety"
                        value={formData.variety}
                        onChange={handleChange}
                        className="form-input"
                        style={{ appearance: 'auto', cursor: 'pointer' }}
                      >
                        <option value="">Select variety...</option>
                        {seedOptions.map((v) => <option key={v} value={v}>{v}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#1a5c2a', fontFamily: 'system-ui, sans-serif' }}>
                        Quantity Required (Kg)
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 100 kg"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#1a5c2a', fontFamily: 'system-ui, sans-serif' }}>
                      Message / Additional Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your farm size, soil type, or any specific requirements..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
                    style={{
                      background: 'linear-gradient(135deg, #1a5c2a, #2e7d32)',
                      color: 'white',
                      boxShadow: '0 8px 25px rgba(26,92,42,0.3)',
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: '15px',
                    }}
                  >
                    {status === 'sending' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Enquiry to Shubham Agri Seeds</>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    Your enquiry will be sent to hetbhalodi8907@gmail.com
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
