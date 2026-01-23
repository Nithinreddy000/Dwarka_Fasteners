'use client';

const certifications = [
  {
    name: 'ISO',
    number: '9001',
    subtitle: 'Quality Management',
  },
  {
    name: 'MSME',
    number: '',
    subtitle: 'Registered',
  },
  {
    name: 'RoHS',
    number: '',
    subtitle: 'Compliant',
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
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Certification Badge */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-xl border-2 border-gray-200 flex flex-col items-center justify-center mb-2 group-hover:border-accent-500/50 transition-all duration-300">
                <span className="text-lg sm:text-xl font-bold text-steel-800">{cert.name}</span>
                {cert.number && (
                  <span className="text-sm sm:text-base font-semibold text-accent-500">{cert.number}</span>
                )}
              </div>
              {/* Subtitle */}
              <span className="text-xs sm:text-sm font-medium text-steel-600">
                {cert.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
