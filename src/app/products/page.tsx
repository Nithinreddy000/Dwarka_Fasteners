import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our complete range of industrial fasteners including bolts, nuts, screws, washers, and more.',
};

const categories = [
  {
    name: 'Bolts',
    description: 'Hex bolts, carriage bolts, flange bolts, and more',
    count: 250,
    href: '/products/bolts',
  },
  {
    name: 'Nuts',
    description: 'Hex nuts, lock nuts, wing nuts, and specialized nuts',
    count: 180,
    href: '/products/nuts',
  },
  {
    name: 'Screws',
    description: 'Machine screws, self-tapping screws, wood screws',
    count: 320,
    href: '/products/screws',
  },
  {
    name: 'Washers',
    description: 'Flat washers, spring washers, lock washers',
    count: 120,
    href: '/products/washers',
  },
  {
    name: 'Anchors',
    description: 'Expansion anchors, wedge anchors, drop-in anchors',
    count: 85,
    href: '/products/anchors',
  },
  {
    name: 'Studs',
    description: 'Threaded studs, stud bolts, double-end studs',
    count: 95,
    href: '/products/studs',
  },
];

export default function ProductsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-secondary-900">
            Industrial Fasteners
          </h1>
          <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality fasteners for all your 
            industrial and construction needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group bg-white rounded-2xl border border-secondary-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                {category.name}
              </h2>
              <p className="text-secondary-600 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-500">{category.count}+ Products</span>
                <span className="text-primary-600 font-medium flex items-center gap-1">
                  Browse
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-secondary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-secondary-600 mb-6">
            We can source or manufacture custom fasteners to meet your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
