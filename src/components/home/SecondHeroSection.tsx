'use client';

import ScrollButton from '@/components/ScrollButton';
import Image from 'next/image';

export default function SecondHeroSection() {
  return (
    <section 
      className="min-h-[100vh] flex items-center py-20 md:py-32 relative text-white"
      style={{
        backgroundImage: 'url(/images/background2.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto md:mx-0 md:ml-12 lg:ml-24 text-left">
          {/* Larger logo with animation */}
          <div className="mb-8">
            <Image 
              src="/images/logo.png" 
              alt="Dublin Software Co." 
              width={240} 
              height={240} 
              className="w-auto h-auto"
              priority
            />
          </div>
          
          {/* Colored divider */}
          <div className="flex mb-8">
            <div className="h-1 w-60 bg-sunset-peach rounded"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Take Your SME<br />
            To The <span className="text-twilight-blue relative">
              Next Level
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-sunset-peach rounded-full opacity-70"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl leading-relaxed">
            Our team of experts leverages cutting-edge technologies to create
            scalable, efficient, and future-proof software solutions for your business.
          </p>
          
          <div className="flex space-x-4">
            <ScrollButton 
              href="#what-we-do" 
              className="px-8 py-4 bg-silhouette text-white font-medium rounded-md shadow-lg"
            >
              Tell Me More
            </ScrollButton>
          </div>
        </div>
      </div>
      
      {/* Optional floating elements for visual interest */}
      <div className="hidden md:block absolute bottom-20 right-20 w-32 h-32 bg-twilight-blue bg-opacity-20 rounded-full blur-xl"></div>
      <div className="hidden md:block absolute top-40 right-40 w-24 h-24 bg-warm-orange bg-opacity-20 rounded-full blur-xl"></div>
    </section>
  );
} 