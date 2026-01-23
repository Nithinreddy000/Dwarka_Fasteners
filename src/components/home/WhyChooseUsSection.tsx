'use client';

const certifications = [
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'ISO 9001',
    subtitle: 'Certified',
    description: 'International quality management certification ensuring consistent product excellence.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'ROHS',
    subtitle: 'Compliant',
    description: 'Environmentally responsible manufacturing free from hazardous substances.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Wide Range',
    subtitle: 'of Fasteners',
    description: 'Comprehensive catalog covering bolts, nuts, screws, washers, and specialty fasteners.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Competitive',
    subtitle: 'Prices',
    description: 'Factory-direct pricing without compromising on quality or service standards.',
    color: 'from-orange-500 to-amber-600',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-steel-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/10 text-accent-400 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-gradient">2000+ Clients</span>
          </h2>
          <p className="text-steel-300 text-lg max-w-2xl mx-auto">
            Since 1994, we have built our reputation on quality, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent-500/50 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              {/* Gradient Glow on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {cert.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-3">
                {cert.subtitle}
              </p>

              {/* Description */}
              <p className="text-steel-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Section Below */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-steel-800 to-steel-700 rounded-2xl overflow-hidden relative">
              {/* Factory/Manufacturing Visual Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-steel-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <p className="text-steel-500 text-sm">Advanced Manufacturing Facility</p>
                </div>
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/80 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent-500 rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-3xl font-bold text-white">30+</div>
              <div className="text-white/80 text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              About <span className="text-gradient">Dwarka Fasteners</span>
            </h3>
            <p className="text-steel-300 leading-relaxed mb-4">
              We are pleased to introduce ourselves as <strong className="text-white">Dwarka Fasteners</strong>, a trusted name in the fastener industry. We are one of the prominent manufacturers and suppliers of screws, nuts, bolts, plain washers, spring washers, rivets, load springs, metal edge protectors and all types of fasteners and press components.
            </p>
            <p className="text-steel-400 leading-relaxed mb-4">
              With a strong commitment to quality, precision, and customer satisfaction, we stand out as a reliable partner for our clients across various industries. Our products are manufactured with utmost attention to detail and industry standards.
            </p>
            <p className="text-steel-400 leading-relaxed mb-6">
              Over the past <strong className="text-accent-400">30 years</strong>, we have built lasting relationships by delivering not just fasteners, but also trust, strength, and reliability. At Dwarka Fasteners, we believe that <em>every connection matters</em> — and our mission is to provide fastening solutions that ensure strength, durability, and performance.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-accent-500">9+</div>
                <div className="text-steel-400 text-xs uppercase tracking-wider">Industries</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-accent-500">500+</div>
                <div className="text-steel-400 text-xs uppercase tracking-wider">Products</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-accent-500">2000+</div>
                <div className="text-steel-400 text-xs uppercase tracking-wider">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
