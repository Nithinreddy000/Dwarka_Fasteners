'use client';

import { useState } from 'react';

const categories = ['BOLTS', 'NUTS', 'SCREWS', 'WASHERS'];

const products = {
  BOLTS: [
    { name: 'Hex Head Screw', din: 'DIN 933' },
    { name: 'Socket Head Allen Cap Screw', din: 'DIN 912' },
    { name: 'Hex Head Bolt Half Thread', din: 'DIN 931' },
  ],
  NUTS: [
    { name: 'Hex Nut', din: 'DIN 934' },
    { name: 'Nylock Nut', din: 'DIN 985' },
    { name: 'Flange Nut', din: 'DIN 6923' },
  ],
  SCREWS: [
    { name: 'Self Tapping Screw', din: 'DIN 7981' },
    { name: 'Wood Screw', din: 'DIN 571' },
    { name: 'Machine Screw', din: 'DIN 84' },
  ],
  WASHERS: [
    { name: 'Plain Washer', din: 'DIN 125' },
    { name: 'Spring Washer', din: 'DIN 127' },
    { name: 'Flat Washer', din: 'DIN 9021' },
  ],
};

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('BOLTS');

  const currentProducts = products[activeCategory as keyof typeof products];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-steel-900">
            Our <span className="text-accent-500 italic">Products</span>
          </h2>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-steel-800 text-white'
                  : 'bg-steel-700 text-white hover:bg-steel-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Container */}
        <div className="border-2 border-dashed border-accent-500/50 rounded-2xl p-4 sm:p-6">
          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Area */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 p-4">
                  {/* Placeholder Icon */}
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-right mt-8">
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
