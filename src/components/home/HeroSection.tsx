import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-primary-600">India&apos;s Leading Manufacturer</span>
              <br />
              <span className="text-primary-600">of Stainless Steel Fasteners</span>
            </h1>
            <p className="text-lg text-secondary-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Precision-engineered bolts, nuts, screws & washers, delivering 
              excellence across industries for 40+ years.
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-accent-600 text-white font-semibold uppercase tracking-wide rounded hover:bg-accent-700 transition-colors btn-shine"
            >
              Explore Our Product Range
            </Link>
          </div>

          {/* Product Visual */}
          <div className="relative animate-slide-up">
            <div className="relative flex justify-center items-end gap-4 h-80">
              {/* Bolt Icons */}
              <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0s' }}>
                <div className="w-20 h-32 bg-gradient-to-b from-secondary-200 to-secondary-300 rounded-t-lg relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-secondary-300 to-secondary-400 rounded-sm"></div>
                </div>
                <div className="w-16 h-40 bg-gradient-to-b from-secondary-300 to-secondary-400 rounded-b-sm relative">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="absolute w-full h-0.5 bg-secondary-500/30" style={{ top: `${i * 8 + 4}%` }}></div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0.2s' }}>
                <div className="w-24 h-36 bg-gradient-to-b from-secondary-200 to-secondary-300 rounded-t-lg relative">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-28 h-9 bg-gradient-to-b from-secondary-300 to-secondary-400 rounded-sm"></div>
                </div>
                <div className="w-18 h-44 bg-gradient-to-b from-secondary-300 to-secondary-400 rounded-b-sm relative">
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="absolute w-full h-0.5 bg-secondary-500/30" style={{ top: `${i * 7 + 3}%` }}></div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0.4s' }}>
                <div className="w-20 h-32 bg-gradient-to-b from-secondary-200 to-secondary-300 rounded-t-lg relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-secondary-300 to-secondary-400 rounded-sm"></div>
                </div>
                <div className="w-16 h-40 bg-gradient-to-b from-secondary-300 to-secondary-400 rounded-b-sm relative">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="absolute w-full h-0.5 bg-secondary-500/30" style={{ top: `${i * 8 + 4}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
