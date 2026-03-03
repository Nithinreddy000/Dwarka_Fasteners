'use client';

import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-30"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 sm:pt-28 sm:pb-12 lg:pt-40 lg:pb-20">

        {/* ===== MOBILE / TABLET LAYOUT (below lg) ===== */}
        <div className="lg:hidden relative flex flex-col items-center">
          {/* Logo - Big and centered, absolutely positioned so it doesn't push content */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-14 md:-top-16 z-10">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60">
              <Image
                src="/logo.png"
                alt="Dwarka Fasteners"
                fill
                priority
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Text Content — pt to clear the absolutely positioned logo */}
          <div className="text-center animate-fade-in pt-32 sm:pt-36 md:pt-44">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-200 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></div>
              <span className="text-accent-600 text-sm font-medium tracking-wider">SINCE 1994</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span className="text-steel-900">A Complete Range</span>
              <br />
              <span className="text-steel-900">of </span>
              <span className="text-gradient">Fasteners</span>
            </h1>

            <p className="text-base sm:text-lg text-steel-500 mb-5 max-w-md mx-auto leading-relaxed">
              Precision-engineered bolts, nuts, screws & washers. Trusted by industries across India for over 30 years.
            </p>

            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 text-steel-600">
              <span className="text-sm font-medium">MS</span>
              <span className="text-steel-300">|</span>
              <span className="text-sm font-medium">SS</span>
              <span className="text-steel-300">|</span>
              <span className="text-sm font-medium">Hot-dip Galvanized</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="#products"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-glow-red btn-shine"
              >
                <span>Explore Products</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>


          </div>
        </div>

        {/* ===== DESKTOP LAYOUT (lg and above) ===== */}
        <div className="hidden lg:block relative">
          {/* Big centered logo — absolutely positioned so it doesn't push content down */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-20 z-10">
            <div className="relative w-80 h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem]">
              <Image
                src="/logo.png"
                alt="Dwarka Fasteners"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        <div className="grid grid-cols-2 gap-12 items-center min-h-[70vh]">

          {/* LEFT COLUMN - Hero Text */}
          <div className="text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-200 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></div>
              <span className="text-accent-600 text-sm font-medium tracking-wider">SINCE 1994</span>
            </div>

            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight mb-5">
              <span className="text-steel-900">A Complete</span>
              <br />
              <span className="text-steel-900">Range</span>
              <br />
              <span className="text-steel-900">of </span>
              <span className="text-gradient">Fasteners</span>
            </h1>

            <p className="text-lg text-steel-500 mb-6 leading-relaxed max-w-md">
              Precision-engineered bolts, nuts, screws & washers. Trusted by industries across India for over 30 years.
            </p>

            <div className="flex items-center gap-3 mb-8 text-steel-600">
              <span className="text-base font-medium">MS</span>
              <span className="text-steel-300">|</span>
              <span className="text-base font-medium">SS</span>
              <span className="text-steel-300">|</span>
              <span className="text-base font-medium">Hot-dip Galvanized</span>
            </div>

            <div className="flex gap-4">
              <Link
                href="#products"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-500 text-white font-semibold uppercase tracking-wide text-sm rounded-lg hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-glow-red btn-shine"
              >
                <span>Explore Products</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN - Product Image */}
          <div className="relative animate-fade-in -ml-12 xl:-ml-16 -mr-4">
            <div className="relative w-[120%] aspect-[5/3]">
              <Image
                src="/hero-fasteners-v4.png"
                alt="Stack of premium bolts, nuts, screws and washers – Dwarka Fasteners"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
}
