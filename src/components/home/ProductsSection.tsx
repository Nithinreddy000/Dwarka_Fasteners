'use client';

import Image from 'next/image';
import { useState } from 'react';

// All products from the catalog
const allProducts = [
  // Bolts
  { name: 'Foundation Bolt', category: 'Bolts', image: '/products/foundation-bolt.jpg' },
  { name: 'Carriage Bolt', category: 'Bolts', image: '/products/carriage-bolt.jpg' },
  { name: 'Flange Bolt', category: 'Bolts', image: '/products/flange-bolt.jpg' },
  { name: 'Hex Bolt', category: 'Bolts', image: '/products/hex-bolt.jpg' },
  // Screws
  { name: 'Self Drilling Screws', category: 'Screws', image: '/products/self-drilling-screw.jpg' },
  { name: 'Socket Screw', category: 'Screws', image: '/products/socket-screw.jpg' },
  { name: 'Pan Phillips CSK Screw', category: 'Screws', image: '/products/pan-phillips-screw.jpg' },
  { name: 'Sheet Metal Screw', category: 'Screws', image: '/products/sheet-metal-screw.jpg' },
  { name: 'Truss Head Screw', category: 'Screws', image: '/products/truss-head-screw.jpg' },
  { name: 'Button Head Screw', category: 'Screws', image: '/products/button-head-screw.jpg' },
  // Nuts
  { name: 'Wing Nut', category: 'Nuts', image: '/products/wing-nut.jpg' },
  { name: 'Hex Nut', category: 'Nuts', image: '/products/hex-nut.jpg' },
  { name: 'Nylock Nut', category: 'Nuts', image: '/products/nylock-nut.jpg' },
  { name: 'Flange Nut', category: 'Nuts', image: '/products/flange-nut.jpg' },
  { name: 'Insert Nut', category: 'Nuts', image: '/products/insert-nut.jpg' },
  { name: 'Square Nut', category: 'Nuts', image: '/products/square-nut.jpg' },
  { name: 'Square Weld Nut', category: 'Nuts', image: '/products/square-weld-nut.jpg' },
  // Washers
  { name: 'Spring Washer', category: 'Washers', image: '/products/spring-washer.jpg' },
  { name: 'Plain Washer', category: 'Washers', image: '/products/plain-washer.jpg' },
  // Rivets & Others
  { name: 'Wedge Anchor', category: 'Others', image: '/products/wedge-anchor.jpg' },
  { name: 'Pop Rivets', category: 'Rivets', image: '/products/pop-rivets.jpg' },
  { name: 'Hollow Rivet', category: 'Rivets', image: '/products/hollow-rivet.jpg' },
  // Fastener Sets
  { name: 'SS 304 Fasteners', category: 'Sets', image: '/products/ss-304-fasteners.jpg' },
  { name: 'SS 202 Fasteners', category: 'Sets', image: '/products/ss-202-fasteners.jpg' },
  { name: 'Hot Dip Galvanised Fasteners Set', category: 'Sets', image: '/products/hdg-fasteners.jpg' },
  // Others
  { name: 'Metal Edge Protector', category: 'Others', image: '/products/metal-edge-protector.jpg' },
  { name: 'Load Springs', category: 'Others', image: '/products/load-springs.jpg' },
];

// Featured products (first 5 for homepage)
const featuredProducts = [
  {
    name: 'Bolts',
    description: 'Foundation bolts, carriage bolts, flange bolts, hex bolts - manufactured to highest standards.',
    image: '/products/bolts.jpg',
    fallbackGradient: 'from-orange-500 to-amber-500',
    items: ['Foundation Bolt', 'Carriage Bolt', 'Flange Bolt', 'Hex Bolt'],
  },
  {
    name: 'Nuts',
    description: 'Complete range including wing nuts, hex nuts, nylock nuts, flange nuts and specialty nuts.',
    image: '/products/nuts.jpg',
    fallbackGradient: 'from-blue-500 to-cyan-500',
    items: ['Wing Nut', 'Hex Nut', 'Nylock Nut', 'Flange Nut', 'Insert Nut'],
  },
  {
    name: 'Screws',
    description: 'Self drilling screws, socket screws, pan phillips, sheet metal screws and more.',
    image: '/products/screws.jpg',
    fallbackGradient: 'from-emerald-500 to-teal-500',
    items: ['Self Drilling', 'Socket Screw', 'Sheet Metal', 'Truss Head'],
  },
  {
    name: 'Washers',
    description: 'Premium spring washers and plain washers for optimal load distribution.',
    image: '/products/washers.jpg',
    fallbackGradient: 'from-purple-500 to-violet-500',
    items: ['Spring Washer', 'Plain Washer', 'Lock Washer'],
  },
  {
    name: 'Rivets & Others',
    description: 'Pop rivets, hollow rivets, wedge anchors, load springs and metal edge protectors.',
    image: '/products/rivets.jpg',
    fallbackGradient: 'from-rose-500 to-red-500',
    items: ['Pop Rivets', 'Hollow Rivet', 'Wedge Anchor', 'Load Springs'],
  },
];

const categories = ['All', 'Bolts', 'Screws', 'Nuts', 'Washers', 'Rivets', 'Sets', 'Others'];

export function ProductsSection() {
  const [showFullCatalog, setShowFullCatalog] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (key: string) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-steel-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-500/20 text-accent-400 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-accent-500/30">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Premium Quality <span className="text-accent-400">Fasteners</span>
          </h2>
          <p className="text-steel-300 text-lg max-w-2xl mx-auto">
            Available in MS, SS 304, SS 202, and Hot-dip Galvanized finishes. Trusted quality since 1994.
          </p>
        </div>

        {!showFullCatalog ? (
          <>
            {/* Featured Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredProducts.map((product, index) => (
                <div 
                  key={index}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer bg-steel-800"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ aspectRatio: index < 3 ? '1' : '1.2' }}
                >
                  {/* Product Image or Gradient Fallback */}
                  <div className="absolute inset-0">
                    {!imageErrors[`featured-${index}`] ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => handleImageError(`featured-${index}`)}
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${product.fallbackGradient} flex items-center justify-center`}>
                        <div className="text-white/50 text-center">
                          <svg className="w-20 h-20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                          <span className="text-lg font-bold">{product.name}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900 via-steel-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                      {product.name}
                    </h3>

                    <p className={`text-steel-200 text-sm leading-relaxed mb-4 transform transition-all duration-300 ${
                      hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {product.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-300 ${
                      hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {product.items.slice(0, 4).map((item, itemIndex) => (
                        <span 
                          key={itemIndex}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs rounded-full border border-white/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-3xl border-2 border-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Material Types */}
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-steel-800/50 backdrop-blur-sm rounded-full border border-steel-700/50">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <span className="text-steel-200 font-medium">Mild Steel (MS)</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-steel-800/50 backdrop-blur-sm rounded-full border border-steel-700/50">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-300 to-gray-100"></div>
                <span className="text-steel-200 font-medium">SS 304 / SS 202</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-steel-800/50 backdrop-blur-sm rounded-full border border-steel-700/50">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-zinc-400 to-zinc-300"></div>
                <span className="text-steel-200 font-medium">Hot-dip Galvanized</span>
              </div>
            </div>

            {/* View Full Catalog Button */}
            <div className="text-center mt-12">
              <button
                onClick={() => setShowFullCatalog(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 text-white font-semibold uppercase tracking-wide rounded-full hover:bg-accent-400 transition-all duration-300 shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 hover:scale-105"
              >
                <span>View Full Catalog</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Full Catalog View */}
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                    activeCategory === category
                      ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30'
                      : 'bg-steel-800/50 text-steel-300 border border-steel-700/50 hover:bg-steel-700/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Full Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Product Image */}
                  <div className="aspect-square relative bg-gradient-to-br from-gray-100 to-gray-200">
                    {!imageErrors[`catalog-${index}`] ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                        onError={() => handleImageError(`catalog-${index}`)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Product Name */}
                  <div className="p-4 text-center bg-white">
                    <span className="text-xs text-accent-500 font-semibold uppercase tracking-wider">{product.category}</span>
                    <h3 className="text-sm font-bold text-steel-800 mt-1 group-hover:text-accent-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Back & Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <button
                onClick={() => setShowFullCatalog(false)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-steel-800 text-white font-semibold rounded-full hover:bg-steel-700 transition-all border border-steel-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 text-white font-semibold uppercase tracking-wide rounded-full hover:bg-accent-400 transition-all shadow-lg shadow-accent-500/30"
              >
                <span>Get Quote for Products</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
