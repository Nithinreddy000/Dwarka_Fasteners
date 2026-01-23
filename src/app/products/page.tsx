'use client';

import { useState } from 'react';

const categories = [
  {
    id: 'bolts',
    name: 'BOLTS',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    specs: {
      grade: 'SS 304 & 316',
      range: 'M3 to M36 | 1/8" to 1.5" INCHES',
      length: 'UPTO 500MM | UPTO 20" INCHES',
    },
    products: [
      { name: 'Hex Head Bolt', din: 'DIN 933' },
      { name: 'Hex Head Bolt Half Thread', din: 'DIN 931' },
      { name: 'Carriage Bolt', din: 'DIN 603' },
      { name: 'Foundation Bolt', din: 'IS 5624' },
      { name: 'Flange Bolt', din: 'DIN 6921' },
      { name: 'Eye Bolt', din: 'DIN 580' },
    ],
  },
  {
    id: 'nuts',
    name: 'NUTS',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    specs: {
      grade: 'SS 304 & 316',
      range: 'M3 to M36 | 1/8" to 1.5" INCHES',
      length: '-',
    },
    products: [
      { name: 'Hex Nut', din: 'DIN 934' },
      { name: 'Nylock Nut', din: 'DIN 985' },
      { name: 'Flange Nut', din: 'DIN 6923' },
      { name: 'Wing Nut', din: 'DIN 315' },
      { name: 'Dome Nut / Cap Nut', din: 'DIN 1587' },
      { name: 'Coupling Nut', din: 'DIN 6334' },
    ],
  },
  {
    id: 'screws',
    name: 'SCREWS',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    specs: {
      grade: 'SS 304 & 316',
      range: 'M2 to M20 | 1/16" to 3/4" INCHES',
      length: 'UPTO 150MM | UPTO 6" INCHES',
    },
    products: [
      { name: 'Socket Head Allen Cap Screw', din: 'DIN 912' },
      { name: 'CSK Phillips Head Screw', din: 'DIN 965' },
      { name: 'Pan Head Phillips Screw', din: 'DIN 7985' },
      { name: 'Self Tapping Screw', din: 'DIN 7981' },
      { name: 'Self Drilling Screw', din: 'DIN 7504' },
      { name: 'Set Screw / Grub Screw', din: 'DIN 913' },
    ],
  },
  {
    id: 'washers',
    name: 'WASHERS',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      </svg>
    ),
    specs: {
      grade: 'SS 304 & 316',
      range: 'DIAMETER M2 to M30 | 1/8" to 1" INCHES',
      length: 'UPTO 300MM | UPTO 12" INCHES',
    },
    products: [
      { name: 'Plain Washer', din: 'DIN 125' },
      { name: 'Spring Lock Washer', din: 'DIN 127' },
      { name: 'P.B. Spring Washer', din: 'DIN 128' },
      { name: 'Star Washer', din: 'DIN 6797' },
      { name: 'Belleville Washer', din: 'DIN 6796' },
      { name: 'Fender Washer', din: '-' },
    ],
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('bolts');

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Category Buttons */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 lg:sticky lg:top-24">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center justify-between gap-4 px-5 py-3 rounded-full font-bold uppercase tracking-wide transition-all duration-300 whitespace-nowrap min-w-fit ${
                    activeCategory === category.id
                      ? 'bg-accent-500 text-white'
                      : 'bg-steel-800 text-white hover:bg-steel-700'
                  }`}
                >
                  <span className="text-sm">{category.name}</span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-steel-800 flex-shrink-0">
                    {category.icon}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 min-w-0">
            {/* Category Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-steel-800 mb-6">
              {currentCategory.name}
            </h1>

            {/* Specs Table */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-steel-700 text-white">
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-sm">
                      Grade
                    </th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-sm">
                      Range
                    </th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-sm">
                      Length
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3 text-steel-700 font-medium">
                      {currentCategory.specs.grade}
                    </td>
                    <td className="px-4 py-3 text-steel-700">
                      {currentCategory.specs.range}
                    </td>
                    <td className="px-4 py-3 text-steel-700">
                      {currentCategory.specs.length}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image Area with DIN Badge */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 p-6">
                    {/* DIN Badge */}
                    {product.din !== '-' && (
                      <div className="absolute top-3 left-3 bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded">
                        {product.din}
                      </div>
                    )}

                    {/* Placeholder Icon */}
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className="w-24 h-24 text-gray-400"
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
                  </div>

                  {/* Product Name Footer */}
                  <div className="bg-steel-700 py-4 px-4">
                    <h3 className="text-white text-center font-semibold uppercase text-sm tracking-wide leading-tight">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-steel-800 mb-2">
                Need Custom Specifications?
              </h3>
              <p className="text-steel-600 mb-4">
                Contact us for custom sizes, grades, and bulk orders.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white font-semibold uppercase text-sm tracking-wide rounded-full hover:bg-accent-400 transition-all duration-300"
              >
                Get Quote
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
