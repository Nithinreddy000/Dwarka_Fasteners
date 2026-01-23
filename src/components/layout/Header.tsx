'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/', section: 'home' },
  { name: 'Products', href: '/products', section: 'products' },
  { name: 'Industries', href: '/#industries', section: 'industries' },
  { name: 'About Us', href: '/#about', section: 'about' },
  { name: 'Contact', href: '/#contact', section: 'contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // If on products page, set products as active
    if (pathname === '/products') {
      setActiveSection('products');
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Only detect active section on home page
      if (isHomePage) {
        const sections = ['contact', 'about', 'industries', 'products', 'home'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navigation[0]) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // If clicking Home, go to home page
    if (item.section === 'home') {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/');
      }
      return;
    }

    // If clicking Products, go to products page
    if (item.section === 'products') {
      router.push('/products');
      return;
    }

    // For other sections (Industries, About, Contact)
    if (isHomePage) {
      // On home page, scroll to section
      const element = document.getElementById(item.section);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to home with hash
      router.push(`/#${item.section}`);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-steel-900 ${
      scrolled 
        ? 'shadow-xl border-b border-steel-700/50' 
        : ''
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 overflow-visible">
          {/* Logo + Company Name */}
          <a 
            href="/" 
            onClick={(e) => handleNavClick(e, navigation[0])}
            className="flex items-center gap-2 lg:gap-4 py-2 shrink-0 relative z-50"
            style={{ maxHeight: '5rem' }}
          >
            <div 
              className="relative pointer-events-none" 
              style={{ width: '12rem', height: '12rem', marginTop: '0.95rem', marginLeft: '-3rem' }}
            >
              <Image
                src="/logo.png"
                alt="Dwarka Fasteners"
                fill
                priority
                className="object-contain pointer-events-none"
              />
            </div>
            <div className="hidden xl:block">
              <h1 className="text-lg xl:text-2xl font-bold text-white tracking-wide">
                DWARKA FASTENERS
              </h1>
              <p className="text-xs xl:text-sm text-steel-300 tracking-wider">
                Manufacturers of SS Fasteners
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-steel-800/50 backdrop-blur-sm rounded-full px-2 py-1 border border-steel-700/30">
            {navigation.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-3 lg:px-4 xl:px-5 py-2 font-medium text-sm tracking-wide transition-all rounded-full ${
                    isActive
                      ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30'
                      : 'text-steel-200 hover:text-white hover:bg-steel-700/50'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919849108501"
              className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-400 hover:scale-110 transition-all shadow-lg shadow-green-500/30"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            {/* Get Quote Button */}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, navigation[4])}
              className="px-6 py-2.5 bg-accent-500 text-white font-semibold text-sm rounded-full hover:bg-accent-400 transition-all shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 hover:scale-105"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2.5 text-white hover:bg-steel-700/50 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-4 right-4 top-20 py-4 bg-steel-800/95 backdrop-blur-lg rounded-2xl border border-steel-700/50 animate-fade-in z-50 shadow-xl">
            <div className="flex flex-col gap-1 px-2">
              {navigation.map((item) => {
                const isActive = activeSection === item.section;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`block px-4 py-3 font-medium text-sm tracking-wide rounded-xl transition-all ${
                      isActive
                        ? 'bg-accent-500 text-white'
                        : 'text-steel-200 hover:text-white hover:bg-steel-700/50'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-steel-700/50 flex gap-2 px-2">
                <a
                  href="https://wa.me/919849108501"
                  className="flex-1 py-3 bg-green-500 text-white text-center font-semibold text-sm rounded-xl hover:bg-green-400 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+919849108501"
                  className="flex-1 py-3 bg-steel-700 text-white text-center font-semibold text-sm rounded-xl hover:bg-steel-600 transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
