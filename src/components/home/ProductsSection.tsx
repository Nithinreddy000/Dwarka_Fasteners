import Link from 'next/link';

const products = [
  {
    name: 'WASHERS',
    description: 'Premium-grade stainless steel washers engineered for optimal load distribution, vibration resistance, and long-term durability in demanding environments.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    name: 'NUTS',
    description: 'Precision-manufactured stainless steel nuts designed to ensure strong, secure fastening and exceptional performance across industrial and structural applications.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    name: 'BOLTS & SCREWS',
    description: 'Comprehensive range of high-strength hex bolts and screws, manufactured to meet rigorous industry standards for mechanical integrity and corrosion resistance.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h4v12H4zM8 4h2v4H8zM12 10h8M12 14h8M12 18h6" />
      </svg>
    ),
  },
  {
    name: 'SOCKET SCREWS',
    description: 'Precision-engineered socket screws available in a wide range of lengths and diameters—ideal for high-strength fastening across diverse industrial applications.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 4h4v6H6zM8 10v10M6 12h4M6 16h4" />
      </svg>
    ),
  },
  {
    name: 'MACHINE SCREWS',
    description: 'Manufactured from corrosion-resistant stainless steel, our machine screws are suitable for both indoor and outdoor use. Available in multiple sizes and head types.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 4h4v4h-4zM12 8v12M8 10l8 0M8 14l8 0M8 18l6 0" />
      </svg>
    ),
  },
  {
    name: 'SELF TAPPING SCREWS',
    description: 'Designed to cut their own threads into pre-drilled materials, these high-performance self-tapping screws ensure secure fastening in metal, plastic, and wood.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4l2 4h-4l2-4zM12 8v12M9 12h6M9 16h6M10 20h4" />
      </svg>
    ),
  },
  {
    name: 'THREADED RODS',
    description: 'High-tensile threaded rods manufactured for structural integrity and corrosion resistance. Suitable for construction, fabrication, and heavy-duty fastening applications.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20M8 4h8M8 8h8M8 12h8M8 16h8M8 20h8" />
      </svg>
    ),
  },
  {
    name: 'ANCHOR FASTENERS',
    description: 'Engineered for secure, long-lasting hold, our anchor fasteners are easy to install and built to endure harsh environments, including marine and industrial settings.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v6M12 8l4 4M12 8l-4 4M12 12v8M8 18h8M6 22h12" />
      </svg>
    ),
  },
  {
    name: 'SPECIAL MATERIAL FASTENERS',
    description: 'Crafted from premium-grade stainless steel and alloys, our specialty fasteners offer enhanced strength, durability, and resistance to extreme conditions.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" />
      </svg>
    ),
  },
];

export function ProductsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <h2 className="text-accent-600 font-semibold uppercase tracking-widest text-sm section-title">
            Our Product Range
          </h2>
          <Link
            href="/products"
            className="px-6 py-3 bg-accent-600 text-white font-semibold uppercase tracking-wide text-sm rounded hover:bg-accent-700 transition-colors btn-shine"
          >
            Explore All
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              {/* Icon */}
              <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                {product.icon}
              </div>

              {/* Title with underline */}
              <h3 className="text-primary-700 font-bold uppercase tracking-wide text-sm mb-2 section-title">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-secondary-600 text-sm leading-relaxed mt-4">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
