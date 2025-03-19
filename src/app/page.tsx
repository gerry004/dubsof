import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="px-8 py-3 bg-gray-900 text-white font-medium rounded-md shadow-md hover:bg-gray-800 transition-colors duration-300">
                Schedule Consultation
              </Link>
              <Link href="#what-we-do" className="px-8 py-3 bg-white text-gray-900 font-medium rounded-md shadow-md border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">Our Clients Work With</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Placeholder logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-12 bg-white rounded-md shadow-sm flex items-center justify-center border border-gray-100">
                <span className="text-gray-500 font-medium">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Better Than Off-the-Shelf Section */}
      <section id="what-we-do" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Your Business Deserves Better Than Off-the-Shelf Software</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">100% Tailored</h3>
              <p className="text-gray-600">Built around your workflows, not the other way around</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Cost Effective</h3>
              <p className="text-gray-600">One-time development cost vs. endless recurring SaaS fees</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Future Proof</h3>
              <p className="text-gray-600">Easily adapt and upgrade as your company needs evolve</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Our Approach: Beyond Software Development</h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We're not just a software company—we're problem solvers and efficiency experts. 
            Our process begins with understanding your business from the inside out:
          </p>
          
          <div className="max-w-4xl mx-auto mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 md:transform md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-16 md:space-y-24">
              <div className="relative flex flex-col md:block">
                <div className="absolute left-4 md:left-1/2 transform translate-x-[-50%] md:-translate-x-1/2 z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-lg">1</div>
                </div>
                <div className="pl-12 md:pl-0 md:ml-auto md:mr-8 md:w-5/12 bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Comprehensive Assessment</h3>
                  <p className="text-gray-600">
                    We'll thoroughly analyse your current processes and tech stack to identify inefficiencies and opportunities for automation.
                  </p>
                </div>
              </div>
              
              <div className="relative flex flex-col md:block">
                <div className="absolute left-4 md:left-1/2 transform translate-x-[-50%] md:-translate-x-1/2 z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-lg">2</div>
                </div>
                <div className="pl-12 md:pl-0 md:mr-auto md:ml-8 md:w-5/12 bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Strategic Planning</h3>
                  <p className="text-gray-600">
                    We'll develop a detailed roadmap aligned with your operational goals and budget, and subsequently build a proposal.
                  </p>
                </div>
              </div>
              
              <div className="relative flex flex-col md:block">
                <div className="absolute left-4 md:left-1/2 transform translate-x-[-50%] md:-translate-x-1/2 z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-lg">3</div>
                </div>
                <div className="pl-12 md:pl-0 md:ml-auto md:mr-8 md:w-5/12 bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Custom Development</h3>
                  <p className="text-gray-600">
                    We'll build solutions tailored to your exact specifications using agile methodologies and in-house tech experts.
                  </p>
                </div>
              </div>
              
              <div className="relative flex flex-col md:block">
                <div className="absolute left-4 md:left-1/2 transform translate-x-[-50%] md:-translate-x-1/2 z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-lg">4</div>
                </div>
                <div className="pl-12 md:pl-0 md:mr-auto md:ml-8 md:w-5/12 bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Seamless Integration</h3>
                  <p className="text-gray-600">
                    We'll ensure your new software integrates perfectly with existing systems, minimising disruption.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col md:block">
                <div className="absolute left-4 md:left-1/2 transform translate-x-[-50%] md:-translate-x-1/2 z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-lg">5</div>
                </div>
                <div className="pl-12 md:pl-0 md:ml-auto md:mr-8 md:w-5/12 bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Ongoing Support</h3>
                  <p className="text-gray-600">
                    We provide continuous support and enhancements as your business evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Why Choose The Dublin Software Company?</h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We're Your Technology Partner, Not Just Another Vendor
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Personalised Integration",
                description: "We craft solutions that align perfectly with your unique workflows.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )
              },
              {
                title: "Complete Ownership",
                description: "The software we build becomes an asset for your company, adding real value.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Long-term Value",
                description: "Eliminate recurring SaaS fees and gain independence from third-party providers.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Future-Ready",
                description: "Our solutions are built to evolve with your business and emerging technologies.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "AI Integration",
                description: "We identify the best opportunities for AI-driven value in your specific operations.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Competitive Advantage",
                description: "Custom software gives you unique capabilities that off-the-shelf solutions cannot provide to your competitors.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-1 my-2 bg-blue-100 rounded-full text-blue-600 font-medium text-sm">
                Contact Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Time to Transform Is <span className="text-blue-600">Now</span>
              </h2>
              
              <p className="mb-6 text-gray-700">
                In 10 years, nobody will be paying for SaaS—it's time to get ahead
                of the curve. Competition is becoming a scenario of who has the
                most efficient software systems.
              </p>
              <p className="mb-6 text-gray-700">
                Let us help you build a more efficient, more profitable business
                through custom software that's built once and owned forever.
              </p>
              
              <div className="space-y-4 mt-8">
                <a href="mailto:team@dubsof.com" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  team@dubsof.com
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +353 87 119 7330
                </a>
              </div>
            </div>
            
            <div>
              <form 
                action="/api/contact" 
                method="POST"
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <div className="mb-5">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your company"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
