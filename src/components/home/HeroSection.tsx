'use client';

import ScrollButton from '@/components/ScrollButton';

interface HeroSectionProps {
  backgroundImage?: string;
  variant?: 'primary' | 'secondary';
}

export default function HeroSection({ 
  backgroundImage, 
  variant = 'primary' 
}: HeroSectionProps) {
  const bgStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  const isSecondary = variant === 'secondary';
  
  return (
    <section 
      className={`min-h-[90vh] flex items-center py-20 md:py-32 ${isSecondary ? 'bg-gray-50' : 'bg-blue-50'}`}
      style={bgStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`inline-block px-4 py-1 rounded-full font-medium text-sm mb-6 ${isSecondary ? 'bg-gray-200 text-gray-700' : 'bg-blue-100 text-blue-600'}`}>
            The Dublin Software Company
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Businesses<br />
            Through <span className={isSecondary ? 'text-gray-800' : 'text-blue-600'}>Custom<br />
            Software</span> Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            We don't just build software—we eliminate inefficiency.
            Our custom solutions are built specifically for each
            client, ensuring you only pay once for powerful software.
          </p>
          <div className="flex justify-center">
            <ScrollButton 
              href="#what-we-do" 
              className={`px-8 py-3 font-medium rounded-md shadow-md transition-colors duration-300 ${
                isSecondary 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              Tell Me More
            </ScrollButton>
          </div>
        </div>
      </div>
    </section>
  );
} 