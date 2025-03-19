import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-2">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative">
            {/* Logo image */}
            <Image 
              src="/images/logo.png" 
              alt="Dublin Software Company Logo" 
              width={140} 
              height={40} 
              className="h-auto w-auto"
              priority
            />
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/#what-we-do" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
            Our Approach
          </Link>
          <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
            Team
          </Link>
          <Link href="/#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-5 rounded-md transition-colors duration-300">
            Contact Us
          </Link>
        </div>
        
        {/* Mobile menu button - would need to implement mobile menu functionality */}
        <button className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
} 