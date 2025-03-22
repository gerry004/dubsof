import Image from 'next/image';

const LOGOS = [
  { src: '/images/logos/coke.png', alt: 'Coke Logo' },
  { src: '/images/logos/gsk.jpg', alt: 'GSK Logo' },
  { src: '/images/logos/jandj.png', alt: 'J&J Logo' },
  { src: '/images/logos/pandg.svg', alt: 'P&G Logo' },
  { src: '/images/logos/pepsi.svg', alt: 'Pepsi Logo' },
  { src: '/images/logos/goliath.jpg', alt: 'Goliath Logo' },
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Clients Work With</h2>
        
        {/* Infinite scrolling logo container */}
        <div className="mx-auto relative w-3/4">
          <div className="flex overflow-hidden">
            {/* First set of logos */}
            <div className="flex animate-marquee whitespace-nowrap">
              {LOGOS.map((logo, i) => (
                <div key={i} className="mx-4 w-32 h-16 flex items-center justify-center">
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    width={100} 
                    height={50} 
                    className="object-contain max-h-full"
                  />
                </div>
              ))}
            </div>
            
            {/* Second set of logos */}
            <div className="flex animate-marquee whitespace-nowrap">
              {LOGOS.map((logo, i) => (
                <div key={`dup-${i}`} className="mx-4 w-32 h-16 flex items-center justify-center">
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    width={100} 
                    height={50} 
                    className="object-contain max-h-full"
                  />
                </div>
              ))}
            </div>
            
            {/* Third set of logos for seamless looping */}
            <div className="flex animate-marquee whitespace-nowrap">
              {LOGOS.map((logo, i) => (
                <div key={`tri-${i}`} className="mx-4 w-32 h-16 flex items-center justify-center">
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    width={100} 
                    height={50} 
                    className="object-contain max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 