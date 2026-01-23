'use client';

const industries = [
  { 
    name: 'Automotive',
    description: 'Precision fasteners for vehicle assembly',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M16 17h.01M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11M5 11h14M5 11v6a1 1 0 001 1h1m12-7v6a1 1 0 01-1 1h-1M8 17a1 1 0 100 2 1 1 0 000-2zM16 17a1 1 0 100 2 1 1 0 000-2z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
  },
  { 
    name: 'Renewable Energy - Solar',
    description: 'Durable mounting solutions for solar panels',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: 'from-orange-400 to-yellow-500',
  },
  { 
    name: 'Refrigeration',
    description: 'Corrosion-resistant fasteners for cooling systems',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
  },
  { 
    name: 'Fans and Coolers',
    description: 'High-performance fasteners for fan assemblies',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: 'from-teal-500 to-emerald-500',
  },
  { 
    name: 'Elevators',
    description: 'Safety-critical fasteners for lift systems',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v12z" />
      </svg>
    ),
    color: 'from-violet-500 to-purple-600',
  },
  { 
    name: 'Electricals',
    description: 'Reliable connections for electrical systems',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-yellow-500 to-orange-500',
  },
  { 
    name: 'Power Equipments',
    description: 'Heavy-duty fasteners for power machinery',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: 'from-red-500 to-rose-600',
  },
  { 
    name: 'Toy Manufacturing',
    description: 'Safe and reliable fasteners for toy assembly',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-pink-500 to-rose-500',
  },
  { 
    name: 'Steel Plants',
    description: 'Industrial-grade fasteners for steel manufacturing',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-slate-500 to-gray-600',
  },
];

export function IndustriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-steel-900 to-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-500/20 text-accent-400 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-accent-500/30">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Powering <span className="text-accent-400">Every Industry</span>
          </h2>
          <p className="text-steel-300 text-lg max-w-2xl mx-auto">
            From automotive assembly lines to solar installations, our fasteners are trusted across diverse sectors.
          </p>
        </div>

        {/* Industries Grid - 9 items in 3x3 grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-steel-800/50 backdrop-blur-sm rounded-2xl p-6 border border-steel-700/50 hover:border-accent-500/50 transition-all duration-500 overflow-hidden hover:-translate-y-1"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {industry.icon}
                </div>

                <div>
                  {/* Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-400 transition-colors duration-300 mb-1">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-steel-400 group-hover:text-steel-300 transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 text-white font-semibold uppercase tracking-wide rounded-full hover:bg-accent-400 transition-all duration-300 shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 hover:scale-105"
          >
            <span>Request A Quote Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
