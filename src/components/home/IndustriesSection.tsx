const industries = [
  { name: 'Chemical & Petrochemical', icon: '🏭' },
  { name: 'Engineering & Construction', icon: '🏗️' },
  { name: 'Energy & Power Generation', icon: '⚡' },
  { name: 'Automotive Manufacturing', icon: '🚗' },
  { name: 'Medical & Pharmaceutical', icon: '🏥' },
  { name: 'Electrical', icon: '🔌' },
  { name: 'Aviation', icon: '✈️' },
  { name: 'Shipping', icon: '🚢' },
  { name: 'Robotics & Automation', icon: '🤖' },
  { name: 'Manufacturing', icon: '⚙️' },
];

export function IndustriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-accent-600 font-semibold uppercase tracking-widest text-sm mb-10 section-title">
          Some of the Key Industries We Serve
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-secondary-100 rounded-lg overflow-hidden aspect-square flex flex-col items-center justify-center p-4 hover:bg-primary-600 transition-all duration-300 card-hover"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <div className="w-10 h-1 bg-accent-600 mb-3"></div>
              <p className="text-sm font-medium text-secondary-700 group-hover:text-white text-center transition-colors">
                {industry.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent-600 text-white font-semibold uppercase tracking-wide rounded hover:bg-accent-700 transition-colors btn-shine"
          >
            Request A Quote Today
          </a>
        </div>
      </div>
    </section>
  );
}
