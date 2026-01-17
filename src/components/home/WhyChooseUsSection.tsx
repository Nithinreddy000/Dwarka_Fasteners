const features = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'CUSTOMER-FIRST PHILOSOPHY',
    description: 'At Dwarka, every client is a partner. We offer tailored fastening solutions based on specific project needs, be it size, grade, or application. Our commitment to timely service, transparent communication, and fair pricing ensures customer satisfaction at every step.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'DECADES OF EXPERTISE',
    description: 'With over four decades of experience, our team brings deep technical knowledge and problem-solving capabilities across industries. From construction to petrochemicals, we understand the unique fastening demands of each sector, and deliver with precision.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'UNCOMPROMISED QUALITY CONTROL',
    description: 'Every product undergoes rigorous quality checks to meet global standards. From raw material inspection to final packaging, we ensure consistency, reliability, and performance that lives up to the Dwarka promise.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'ADVANCED IN-HOUSE MANUFACTURING',
    description: 'Our state-of-the-art cold-forming units are fully integrated and managed in-house. This allows us to maintain tight control over production timelines, quality benchmarks, and custom manufacturing requirements for critical applications.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side - About & Title */}
          <div className="lg:col-span-1">
            <div className="bg-secondary-100 rounded-lg h-64 mb-8 flex items-center justify-center">
              <div className="text-center text-secondary-400">
                <svg className="w-20 h-20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm">Manufacturing Excellence</p>
              </div>
            </div>

            <h2 className="text-accent-600 font-semibold uppercase tracking-widest text-sm mb-4 section-title">
              About Us
            </h2>
            <p className="text-secondary-600 text-sm leading-relaxed mb-6">
              Established in 1985, Dwarka Fasteners is a trusted name in stainless steel fasteners, 
              delivering precision, strength, and reliability for over four decades. With a robust 
              portfolio of bolts, screws, nuts, washers, and custom fasteners, we cater to diverse 
              industries including petrochemicals, construction, and automotive.
            </p>

            <h3 className="text-accent-600 font-semibold uppercase tracking-widest text-sm section-title">
              Why Choose Us
            </h3>
          </div>

          {/* Right Side - Features */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 items-start pb-8 border-b border-secondary-100 last:border-0">
                  <div className="text-accent-600 shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-primary-700 font-bold uppercase tracking-wide text-sm mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
