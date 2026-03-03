import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT US', href: '#about' },
  { name: 'OUR PRODUCTS', href: '#products' },
  { name: 'INDUSTRIES', href: '#industries' },
  { name: 'CONTACT US', href: '#contact' },
];

const products = [
  { name: 'Bolts', href: '#products' },
  { name: 'Nuts', href: '#products' },
  { name: 'Screws', href: '#products' },
  { name: 'Washers', href: '#products' },
  { name: 'Pop Rivets', href: '#products' },
  { name: 'SS 304 Fasteners', href: '#products' },
  { name: 'Hot Dip Galvanized', href: '#products' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white text-steel-800 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-2 -ml-2">
              <Image
                src="/logo.png"
                alt="Dwarka Fasteners"
                width={120}
                height={120}
                priority
                className="object-contain"
              />
            </div>
            <p className="text-steel-500 text-sm leading-relaxed mb-6">
              Premium quality industrial fasteners since 1994.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-steel-900 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-steel-500 hover:text-accent-500 text-sm transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-steel-900 font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-steel-500 hover:text-accent-500 text-sm transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-steel-900 font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-steel-500 text-sm">A-7, CIE, Balanagar,<br />Hyderabad-37</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-steel-500 text-sm">
                  <a href="tel:+919121285022" className="hover:text-accent-500 transition-colors">+91 91212 85022</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:dilip.dwarkafasteners@gmail.com" className="text-steel-500 text-sm hover:text-accent-500 transition-colors">
                  dilip.dwarkafasteners@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-steel-400 text-sm">
              © {currentYear} Dwarka Fasteners™. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-steel-400 hover:text-accent-500 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-steel-400 hover:text-accent-500 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Large Brand Watermark */}
      <div className="relative overflow-hidden py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold text-gray-100 leading-none tracking-tight whitespace-nowrap text-center">
            DWARKA FASTENERS
          </p>
        </div>
      </div>
    </footer>
  );
}
