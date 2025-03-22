const APPROACH = [
  {
    title: 'Comprehensive Assessment',
    description: "We'll thoroughly analyse your current processes and tech stack to identify inefficiencies and opportunities for automation.",
  },
  {
    title: 'Strategic Planning',
    description: "We'll develop a detailed roadmap aligned with your operational goals and budget, and subsequently build a proposal.",
  },
  {
    title: 'Custom Development',
    description: "We'll build solutions tailored to your exact specifications using agile methodologies and in-house tech experts.",
  },
  {
    title: 'Seamless Integration',
    description: "We'll ensure your new software integrates perfectly with existing systems, minimising disruption.",
  },  
  {
    title: 'Ongoing Support',
    description: "We provide continuous support and enhancements as your business evolves.",
  },
  {
    title: 'The Next Level',
    description: "We'll help you take your business to the next level with our custom software solutions.",
  },
];  
export default function OurApproachSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Our Approach: Beyond Software Development</h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We're not just a software company—we're problem solvers and efficiency experts. 
          Our process begins with understanding your business from the inside out:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APPROACH.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center mb-4 text-blue-600 font-medium text-lg">{i + 1}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
} 