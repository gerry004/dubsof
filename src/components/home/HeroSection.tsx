import ScrollButton from '@/components/ScrollButton';

export default function HeroSection() {
  return (
    <section className="bg-blue-50 min-h-[90vh] flex items-center py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 font-medium text-sm mb-6">
            The Dublin Software Company
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Businesses<br />
            Through <span className="text-blue-600">Custom<br />
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
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-md shadow-md hover:bg-gray-800 transition-colors duration-300"
            >
              Tell Me More
            </ScrollButton>
          </div>
        </div>
      </div>
    </section>
  );
} 