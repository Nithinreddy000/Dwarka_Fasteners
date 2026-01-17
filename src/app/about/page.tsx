import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Dwarka Fasteners - Your trusted partner for quality industrial fasteners since 1995.',
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-secondary-900">
            Your Trusted Partner Since 1995
          </h1>
          <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
            For over 30 years, Dwarka Fasteners has been providing premium quality 
            industrial fasteners to manufacturing and construction industries across India.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Story</h2>
            <p className="text-secondary-600 mb-4">
              Founded in 1995, Dwarka Fasteners started as a small family business 
              with a vision to provide the highest quality fasteners to local industries. 
              Today, we have grown into one of the most trusted names in the fastener 
              industry.
            </p>
            <p className="text-secondary-600 mb-4">
              Our commitment to quality, competitive pricing, and exceptional customer 
              service has helped us build long-lasting relationships with over 1000 
              clients across the country.
            </p>
            <p className="text-secondary-600">
              We take pride in our extensive inventory of over 5000 products, ensuring 
              that our customers always find what they need, when they need it.
            </p>
          </div>
          <div className="bg-secondary-100 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center text-secondary-400">
              <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <p>Company Image</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-secondary-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Quality</h3>
              <p className="text-secondary-600">
                We never compromise on quality. Every fastener meets international standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Customer First</h3>
              <p className="text-secondary-600">
                Our customers are at the heart of everything we do. Their success is our success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Reliability</h3>
              <p className="text-secondary-600">
                Consistent quality and on-time delivery you can always count on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
