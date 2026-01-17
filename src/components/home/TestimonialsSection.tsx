'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote: "We would like to extend our sincere appreciation to Dwarka Fasteners for their excellent service and timely delivery of SS 304 Fasteners on our ongoing projects. We look forward to continuing this successful business relationship.",
    author: "Mr. Sharma",
    rating: 5,
  },
  {
    quote: "Dwarka Fasteners has successfully fulfilled our requirement for stainless steel fasteners. The materials were of excellent quality, delivered as per the technical specifications and on time. Their service standards and responsiveness are commendable.",
    author: "Mr. Ashish",
    rating: 5,
  },
  {
    quote: "Dwarka Fasteners consistently delivers top-grade SS fasteners, meeting specifications and deadlines without compromise. Their dedication to quality is unmatched in the industry.",
    author: "Mr. Solanki",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-white font-semibold uppercase tracking-widest text-sm">
            Hear It From Our Clients
          </h2>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`text-center transition-opacity duration-300 ${
                index === currentSlide ? 'opacity-100' : 'opacity-70'
              }`}
            >
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 uppercase tracking-wider text-xs">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
