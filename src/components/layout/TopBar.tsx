export function TopBar() {
  return (
    <div className="bg-steel-800 text-white py-1.5 hidden sm:block fixed top-0 left-0 right-0 z-[60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-6 text-sm">
        {/* Phone */}
        <a
          href="tel:+919121285022"
          className="flex items-center gap-1.5 hover:text-accent-400 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>+91-9121285022</span>
        </a>

        <span className="text-steel-500">|</span>

        {/* Email */}
        <a
          href="mailto:dilip.dwarkafasteners@gmail.com"
          className="flex items-center gap-1.5 hover:text-accent-400 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>dilip.dwarkafasteners@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
