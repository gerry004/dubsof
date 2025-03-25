'use client';

import Image from 'next/image';
import ScrollButton from '@/components/ScrollButton';
import PartnersSection from './PartnersSection';

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
      className={`min-h-screen flex flex-col justify-between ${isSecondary ? 'bg-gray-50' : 'bg-[#0a1e0a]'}`}
      style={bgStyle}
    >
      <div className="flex flex-col md:flex-row h-full min-h-[80vh]">
        {/* Left side with logo */}
        <div className="w-full md:w-[35%] flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-[400px] aspect-square relative">
            <Image 
              src="/images/logo-square.png" 
              alt="The Dublin Software Company Logo" 
              width={400} 
              height={400}
              className="w-full h-full"
              priority
            />
          </div>
        </div>
        
        {/* Vertical divider with more spacing */}
        <div className="hidden md:flex flex-col items-center px-6">
          <div className="w-px bg-gray-500 h-full"></div>
        </div>
        
        {/* Right side with content */}
        <div className="w-full md:w-[60%] flex flex-col justify-between p-8 md:p-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              The Dublin<br />Software Co.
            </h1>
            <p className="text-lg md:text-xl mb-4">
              Empowering large-scale<br />
              organizations with <span className="text-yellow-400">AI expertise</span>
            </p>
            
            <div className="h-px bg-gray-500 w-full my-8"></div>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              AI is changing at a blistering pace.
              Our team partners with you to find
              the best opportunities for AI-driven
              value and to build solutions that
              integrate seamlessly with your
              operations.
            </p>
          </div>
          
          {/* Former clients section */}
          <div className="mt-auto">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              FORMERLY OF
            </p>
            <div className="w-full">
              <PartnersSection variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 