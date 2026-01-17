import Link from 'next/link';

export function TopBar() {
  return (
    <div className="bg-primary-600 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-wider">EST 1985</span>
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="tel:+911234567890" 
            className="hover:text-accent-300 transition-colors font-medium tracking-wide"
          >
            011-40464146
          </a>
        </div>
      </div>
    </div>
  );
}
