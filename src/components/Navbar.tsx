import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-40">
            {/* Replace with actual logo */}
            <div className="font-bold text-xl">Dublin Software</div>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#what-we-do" className="text-gray-700 hover:text-primary transition-colors">
            What We Do
          </Link>
          <Link href="/team" className="text-gray-700 hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="/#contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
        
        {/* Mobile menu button - would need to implement mobile menu functionality */}
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
} 