'use client';

import { useState } from 'react';

const filters = [
  {
    id: 'bolts-screws',
    name: 'Bolts & Screws',
    products: [
      { name: 'Foundation Bolt', image: '/productimages/FOUNDATION%20Bolt.png' },
      { name: 'Carriage Bolt', image: '/productimages/Carriage%20Bolt.png' },
      { name: 'Self Drilling Screw', image: '/productimages/selfdrillingscrews.png' },
      { name: 'Hex Bolt', image: '/productimages/hexbolt.png' },
      { name: 'Socket Screw', image: '/productimages/socketscrew.png' },
      { name: 'Pan Phillips CSK Screw', image: '/productimages/panphilipscskscrew.png' },
      { name: 'Sheet Metal Screw', image: '/productimages/Steelmetalscrew.png' },
      { name: 'Flange Bolt', image: '/productimages/flangebolt.png' },
      { name: 'Truss Head Screw', image: '/productimages/TrussHeadScrew.png' },
    ],
  },
  {
    id: 'nuts-washers',
    name: 'Nuts & Washers',
    products: [
      { name: 'Wing Nut', image: '/productimages/WING%20NUT.png' },
      { name: 'Hex Nut', image: '/productimages/HEX%20NUT.png' },
      { name: 'Nylock Nut', image: '/productimages/NYLOCK%20NUT.png' },
      { name: 'Flange Nut', image: '/productimages/FLANGE%20NUT.png' },
      { name: 'Insert Nut', image: '/productimages/INSERT%20NUT.png' },
      { name: 'Square Nut', image: '/productimages/squarenut.png' },
      { name: 'Square Weld Nut', image: '/productimages/SQUARE%20WELD%20NUT.png' },
      { name: 'Spring Washer', image: '/productimages/SPRING%20WASHER.png' },
      { name: 'Plain Washer', image: '/productimages/PLAIN%20WASHER.png' },
    ],
  },
  {
    id: 'anchors-others',
    name: 'Rivets & Others',
    products: [
      { name: 'Wedge Anchor', image: '/productimages/WEDGE%20ANCHOR.png' },
      { name: 'Pop Rivets', image: '/productimages/POP%20RIVETS.png' },
      { name: 'Hollow Rivet', image: '/productimages/HOLLOW%20RIVET.png' },
      { name: 'SS 304 Fasteners', image: '/productimages/SS%20304%20Fasteners.png' },
      { name: 'SS 202 Fasteners', image: '/productimages/SS%20202%20Fasteners.png' },
      { name: 'Hot Dip Galvanised Set', image: '/productimages/HOT%20DIP%20GALVANISED%20FASTENERS%20SET.png' },
      { name: 'Button Head Screw', image: '/productimages/buttonheadscrew.png' },
      { name: 'Metal Edge Protector', image: '/productimages/metaledgeprotector.png' },
    ],
  },
];

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState('bolts-screws');

  const currentFilter = filters.find((f) => f.id === activeFilter)!;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-steel-900">
            Our <span className="text-accent-500 italic">Products</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                  : 'bg-steel-800 text-white hover:bg-steel-700'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Products Grid - 2 cols mobile (only 2 items), 3 cols desktop (all items) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {currentFilter.products.map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group ${
                index >= 6 ? 'hidden lg:block' : ''
              }`}
            >
              {/* Image Area */}
              <div className="relative h-28 sm:h-32 bg-gradient-to-br from-gray-50 to-gray-100 p-1 flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-300 group-hover:text-gray-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Product Name */}
              <div className="px-3 py-3 bg-white border-t border-gray-100">
                <h3 className="text-xs sm:text-sm font-semibold text-steel-800 text-center leading-tight">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button - mobile/tablet only */}
        <div className="text-center mt-8 lg:hidden">
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-steel-700 text-white font-semibold uppercase text-sm tracking-wide rounded hover:bg-steel-600 transition-all duration-300"
          >
            View More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
