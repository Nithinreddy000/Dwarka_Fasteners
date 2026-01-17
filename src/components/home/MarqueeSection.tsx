export function MarqueeSection() {
  const features = [
    'In-House Manufacturing',
    'Marine Grade Quality',
    'Rapid Turnaround',
    'Custom Solutions',
    'Premium Materials',
    'Quality Tested',
    'ISO Certified',
    'Pan India Delivery',
  ];

  return (
    <section className="py-6 bg-secondary-100 overflow-hidden">
      <div className="marquee-container">
        <div className="inline-flex animate-marquee">
          {[...features, ...features].map((feature, index) => (
            <span
              key={index}
              className="mx-8 text-2xl font-light text-secondary-400 whitespace-nowrap"
            >
              {feature} <span className="text-accent-600 mx-4">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
