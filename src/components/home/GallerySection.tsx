export function GallerySection() {
  const images = [
    { icon: '⚙️', label: 'Nuts Collection' },
    { icon: '🔩', label: 'Screws & Bolts' },
    { icon: '🔧', label: 'Hex Nuts' },
  ];

  return (
    <section className="py-16 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] bg-white rounded-lg shadow-sm border border-secondary-200 flex flex-col items-center justify-center hover:shadow-lg transition-shadow card-hover"
            >
              <div className="text-6xl mb-4">{image.icon}</div>
              <p className="text-secondary-600 font-medium">{image.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
