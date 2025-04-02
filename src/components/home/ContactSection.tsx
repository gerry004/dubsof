"use client";
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-[#0a1e0a] to-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">          
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="inline-block px-4 py-1 my-4 border border-warm-orange text-white rounded-full text-warm-orange font-medium text-sm">
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The Time to Transform Is <span className="text-warm-orange">Now</span>
            </h2>
            
            <p className="mb-6 text-gray-300">
              In 10 years, nobody will be paying for SaaS—it's time to get ahead
              of the curve. Competition is becoming a scenario of who has the
              most efficient software systems.
            </p>
            <p className="mb-6 text-gray-300">
              Let us help you build a more efficient, more profitable business
              through custom software that's built once and owned forever.
            </p>
            
            <div className="space-y-4 mt-8">
              <a href="mailto:team@dubsof.com" className="flex items-center text-gray-300 hover:text-warm-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-warm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                team@dubsof.com
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-warm-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-warm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10 shadow-xl"
            >
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-warm-orange focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-warm-orange focus:border-transparent transition-colors"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="company" className="block text-gray-300 font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-warm-orange focus:border-transparent transition-colors"
                  placeholder="Your company"
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-warm-orange focus:border-transparent transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full px-6 py-3 bg-warm-orange text-white font-medium rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-warm-orange focus:ring-offset-2 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 