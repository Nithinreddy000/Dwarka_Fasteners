'use client';

import Link from 'next/link';
import { useState } from 'react';

const materials = [
  { id: 'ms', name: 'MS', fullName: 'Mild Steel', description: 'Cost-effective & versatile' },
  { id: 'ss', name: 'SS', fullName: 'Stainless Steel', description: 'Corrosion resistant' },
  { id: 'galvanized', name: 'Hot-dip Galvanized', fullName: 'Hot-dip Galvanized', description: 'Maximum durability' },
];

export function HeroSection() {
  const [activeMaterial, setActiveMaterial] = useState('ss');

  return (
    <section className="relative min-h-[90vh] bg-steel-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-30"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Since 1994 Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></div>
              <span className="text-white/80 text-sm font-medium tracking-wider">SINCE 1994</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">A Complete Range</span>
              <br />
              <span className="text-white">of </span>
              <span className="text-gradient">Fasteners</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-steel-300 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              Precision-engineered bolts, nuts, screws & washers. Trusted by industries across India for over 30 years.
            </p>

            {/* Material Type Tabs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8 sm:mb-10">
              {materials.map((material) => (
                <button
                  key={material.id}
                  onClick={() => setActiveMaterial(material.id)}
                  className={`group relative px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 ${
                    activeMaterial === material.id
                      ? 'bg-accent-500 text-white shadow-glow-orange'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10'
                  }`}
                >
                  <span>{material.name}</span>
                  {activeMaterial === material.id && (
                    <span className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-steel-300 whitespace-nowrap">
                      {material.description}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-10 sm:mt-12 px-2 sm:px-0">
              <Link
                href="#products"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 text-white font-semibold uppercase tracking-wide text-sm sm:text-base rounded-lg hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-glow-orange btn-shine"
              >
                <span>Explore Products</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold uppercase tracking-wide text-sm sm:text-base rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Get a Quote</span>
              </Link>
            </div>
          </div>

          {/* Product Visual - 3D Fasteners Display */}
          <div className="relative animate-slide-up hidden lg:block">
            <div className="relative">
              {/* Glowing Ring Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border border-accent-500/30 animate-pulse-slow"></div>
                <div className="absolute w-96 h-96 rounded-full border border-white/10"></div>
              </div>

              {/* Main Fastener Display */}
              <div className="relative flex justify-center items-center h-[500px]">
                {/* Large Hex Bolt */}
                <div className="absolute animate-float" style={{ animationDelay: '0s' }}>
                  <div className="relative transform rotate-12">
                    {/* Bolt Head */}
                    <div className="w-32 h-14 bg-gradient-to-b from-steel-200 to-steel-400 relative" 
                         style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                    {/* Bolt Shaft */}
                    <div className="w-16 h-48 mx-auto bg-gradient-to-r from-steel-300 via-steel-100 to-steel-300 relative rounded-b-sm">
                      {/* Thread Lines */}
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="absolute w-full h-[2px] bg-steel-400/50" style={{ top: `${i * 6 + 10}%` }}></div>
                      ))}
                      {/* Shine */}
                      <div className="absolute left-1/4 top-0 w-2 h-full bg-gradient-to-b from-white/40 via-white/20 to-white/40"></div>
                    </div>
                  </div>
                </div>

                {/* Hex Nut - Left */}
                <div className="absolute -left-10 top-1/3 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-20 h-20 bg-gradient-to-br from-metal-chrome to-steel-400 relative transform -rotate-12"
                       style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                    <div className="absolute inset-4 bg-steel-800 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"></div>
                  </div>
                </div>

                {/* Washer - Right */}
                <div className="absolute -right-5 top-1/2 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-metal-chrome to-steel-400 flex items-center justify-center shadow-xl transform rotate-45">
                    <div className="w-10 h-10 rounded-full bg-steel-800"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>

                {/* Small Screws - Floating */}
                <div className="absolute right-20 bottom-20 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="transform -rotate-45">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-b from-steel-200 to-steel-400 mx-auto"></div>
                    <div className="w-3 h-16 bg-gradient-to-r from-steel-300 via-steel-100 to-steel-300 mx-auto rounded-b-full">
                      <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white/30 -translate-x-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* Pop Rivet - Top Right */}
                <div className="absolute right-10 top-16 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-metal-silver to-steel-400"></div>
                    <div className="w-4 h-12 bg-gradient-to-b from-steel-300 to-steel-500 rounded-b-sm"></div>
                  </div>
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8">
                <div className="glass-dark rounded-xl px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-accent-500">30+</div>
                  <div className="text-xs text-steel-300 uppercase tracking-wider">Years</div>
                </div>
                <div className="glass-dark rounded-xl px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-accent-500">2000+</div>
                  <div className="text-xs text-steel-300 uppercase tracking-wider">Clients</div>
                </div>
                <div className="glass-dark rounded-xl px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-accent-500">12+</div>
                  <div className="text-xs text-steel-300 uppercase tracking-wider">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="lg:hidden flex justify-center gap-4 mt-8">
            <div className="glass-dark rounded-xl px-5 py-3 text-center">
              <div className="text-2xl font-bold text-accent-500">30+</div>
              <div className="text-xs text-steel-300 uppercase tracking-wider">Years</div>
            </div>
            <div className="glass-dark rounded-xl px-5 py-3 text-center">
              <div className="text-2xl font-bold text-accent-500">2000+</div>
              <div className="text-xs text-steel-300 uppercase tracking-wider">Clients</div>
            </div>
            <div className="glass-dark rounded-xl px-5 py-3 text-center">
              <div className="text-2xl font-bold text-accent-500">12+</div>
              <div className="text-xs text-steel-300 uppercase tracking-wider">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade - Seamless transition to Products */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-steel-900"></div>
    </section>
  );
}
