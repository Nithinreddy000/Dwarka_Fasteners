'use client';

import Image from 'next/image';

const industries = [
  { 
    name: 'Automotive',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h.01M16 17h.01M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11M5 11h14M5 11v6a1 1 0 001 1h1m12-7v6a1 1 0 01-1 1h-1M8 17a1 1 0 100 2 1 1 0 000-2zM16 17a1 1 0 100 2 1 1 0 000-2z" />
      </svg>
    ),
  },
  { 
    name: 'Renewable Energy-Solar',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  { 
    name: 'Refrigeration',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  { 
    name: 'Fans and Coolers',
    icon: (
      <Image src="/images/Fan_Cooler.png" alt="Fans and Coolers" width={48} height={48} className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
    ),
  },
  { 
    name: 'Transformers',
    icon: (
      <Image src="/images/transformers.png" alt="Transformers" width={48} height={48} className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
    ),
  },
  { 
    name: 'Elevators',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  { 
    name: 'Electricals',
    icon: (
      <Image src="/images/electricity.png" alt="Electricals" width={48} height={48} className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
    ),
  },
  { 
    name: 'Power Equipments',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  { 
    name: 'Toy Manufacturing',
    icon: (
      <Image src="/images/toy_manu.png" alt="Toy Manufacturing" width={56} height={56} className="w-10 h-10 sm:w-11 sm:h-11 object-contain" />
    ),
  },
  { 
    name: 'Steel Plants',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M12 7v.01M12 11v.01M12 15v.01" />
      </svg>
    ),
  },
];

export function IndustriesSection() {
  return (
    <section className="py-10 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-steel-900">
            Industries We Serve
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-2 text-steel-600 group-hover:text-accent-500 group-hover:border-accent-500/50 transition-all duration-300 shadow-sm">
                {industry.icon}
              </div>
              {/* Name */}
              <span className="text-[10px] sm:text-xs font-medium text-steel-700 group-hover:text-accent-500 transition-colors leading-tight">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
