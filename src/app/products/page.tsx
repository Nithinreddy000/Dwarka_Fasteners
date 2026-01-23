'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = [
  {
    id: 'bolts',
    name: 'BOLTS',
    icon: '/bolt.png',
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
    icon: '/nut.png',
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
    icon: '/joint.png',
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
    icon: '/washer.png',
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
        {/* Category Tabs - Simple horizontal on mobile */}
        <div className="flex flex-wrap gap-2 mb-6 lg:hidden">
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveCategory(category.id);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                activeCategory === category.id
                  ? 'bg-accent-500 text-white'
                  : 'bg-steel-800 text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Sidebar - Category Buttons (Desktop only) */}
          <div className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="flex flex-col gap-3 sticky top-24">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category.id}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveCategory(category.id);
                  }}
                  className={`flex items-center justify-between gap-4 px-5 py-3 rounded-full font-bold uppercase tracking-wide transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-accent-500 text-white'
                      : 'bg-steel-800 text-white hover:bg-steel-700'
                  }`}
                >
                  <span className="text-sm">{category.name}</span>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 p-1.5">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 min-w-0">
            {/* Category Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-steel-800 mb-4 lg:mb-6">
              {currentCategory.name}
            </h1>

            {/* Specs Table */}
            <div className="mb-6 lg:mb-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-steel-700 text-white">
                    <th className="px-3 py-2 lg:px-4 lg:py-3 text-left font-semibold uppercase tracking-wide text-xs lg:text-sm">
                      Grade
                    </th>
                    <th className="px-3 py-2 lg:px-4 lg:py-3 text-left font-semibold uppercase tracking-wide text-xs lg:text-sm">
                      Range
                    </th>
                    <th className="px-3 py-2 lg:px-4 lg:py-3 text-left font-semibold uppercase tracking-wide text-xs lg:text-sm">
                      Length
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="px-3 py-2 lg:px-4 lg:py-3 text-steel-700 font-medium text-xs lg:text-sm">
                      {currentCategory.specs.grade}
                    </td>
                    <td className="px-3 py-2 lg:px-4 lg:py-3 text-steel-700 text-xs lg:text-sm">
                      {currentCategory.specs.range}
                    </td>
                    <td className="px-3 py-2 lg:px-4 lg:py-3 text-steel-700 text-xs lg:text-sm">
                      {currentCategory.specs.length}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
              {currentCategory.products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image Area with DIN Badge */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 p-3 lg:p-6">
                    {/* DIN Badge */}
                    {product.din !== '-' && (
                      <div className="absolute top-2 left-2 lg:top-3 lg:left-3 bg-gray-600 text-white text-[10px] lg:text-xs font-bold px-2 py-0.5 lg:px-3 lg:py-1 rounded">
                        {product.din}
                      </div>
                    )}

                    {/* Placeholder Icon */}
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 lg:w-24 lg:h-24 text-gray-400"
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
                  <div className="bg-steel-700 py-2 px-2 lg:py-4 lg:px-4">
                    <h3 className="text-white text-center font-semibold uppercase text-[10px] lg:text-sm tracking-wide leading-tight">
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
