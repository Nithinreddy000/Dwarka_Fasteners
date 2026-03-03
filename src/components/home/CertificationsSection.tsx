'use client';

import Image from 'next/image';

const certifications = [
  {
    name: 'ISO',
    subtitle: 'Quality Management',
    image: '/images/iso_logo.png',
  },
  {
    name: 'MSME',
    subtitle: 'Registered',
    image: '/images/msme_logo.png',
  },
  {
    name: 'RoHS',
    subtitle: 'Compliant',
    image: '/images/rohs_logo.png',
  },
];

export function CertificationsSection() {
  return (
    <section className="py-10 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-steel-900">
            Our Certifications
          </h2>
        </div>

        {/* Certifications Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={cert.image}
                alt={cert.name}
                width={100}
                height={60}
                className="object-contain h-14 sm:h-16 lg:h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
