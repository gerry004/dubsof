export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">The Dublin Software Company</h3>
            <p className="text-gray-400">
              Transforming Businesses Through Custom Software Solutions
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#what-we-do" className="text-gray-400 hover:text-white transition-colors duration-300">What We Do</a></li>
              <li><a href="/transform" className="text-gray-400 hover:text-white transition-colors duration-300">AI Transformation</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-white transition-colors duration-300">Our Team</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">team@dublinsoftware.com</p>
            <p className="text-gray-400">+353 1 234 5678</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} The Dublin Software Company. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
