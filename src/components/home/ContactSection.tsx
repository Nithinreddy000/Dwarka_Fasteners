'use client';

import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`;
    const body = `Name: ${formData.name}\nCompany: ${formData.company || 'N/A'}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:dilip.dwarkafasteners@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2">
            <span className="inline-block px-4 py-1 bg-accent-500/10 text-accent-500 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-steel-900 mb-4">
              Let&apos;s Start <span className="text-accent-500">Building Together</span>
            </h2>
            <p className="text-steel-600 mb-8 leading-relaxed">
              Partner with us for precision, quality, and reliability. Reach out 
              and let&apos;s discuss your fastening requirements.
            </p>

            {/* Address with Map */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=A-7+CIE+Balanagar+Hyderabad+500037"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-steel-500 text-sm font-medium mb-1">Address</p>
                  <p className="text-steel-800 font-semibold">A-7, CIE, Balanagar, Hyderabad-37</p>
                </div>
                <svg className="w-5 h-5 text-steel-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              {/* Google Maps Embed */}
              <div className="h-48 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4398736661783!2d78.44373!3d17.464167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918d9e8bce3b%3A0x7c99b0c0e7c9e2f3!2sCIE%2C%20Balanagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1706012345678!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dwarka Fasteners Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-steel-800 mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-steel-700 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-steel-800 placeholder-steel-400 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-steel-700 text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-steel-800 placeholder-steel-400 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-steel-700 text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-steel-800 placeholder-steel-400 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-steel-700 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-steel-800 placeholder-steel-400 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-steel-700 text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-steel-800 placeholder-steel-400 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-accent-500 text-white font-semibold uppercase tracking-wide rounded-lg hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-glow-orange btn-shine"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
