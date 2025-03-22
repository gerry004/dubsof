import Image from 'next/image';

export default function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Clients Work With</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Logo images */}
          {[
            { src: '/images/logos/logo1.png', alt: 'Company 1' },
            { src: '/images/logos/logo2.png', alt: 'Company 2' },
            { src: '/images/logos/logo3.png', alt: 'Company 3' },
            { src: '/images/logos/logo4.png', alt: 'Company 4' },
          ].map((logo, i) => (
            <div key={i} className="w-32 h-12 bg-white rounded-md shadow-sm flex items-center justify-center border border-gray-100">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={100} 
                height={40} 
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 