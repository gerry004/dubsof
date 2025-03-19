import Image from 'next/image';
import Link from 'next/link';

export default function TeamPage() {
  const team = [
    {
      name: "George O'Leary",
      role: "Founder, CEO",
      bio: "Dublin-based entrepreneur who scaled a startup to €1.44M ARR in under 7 months, built two consumer brands in the retail sector, won Young Economist of the year 2020 TY. Strategic problem solver with innovative thinking. George has also worked extensively in the industrial automation industry with a highlight on PLC programming.",
      image: "/images/team/george.jpg"
    },
    {
      name: "Gerry Yang",
      role: "Founder, CTO",
      bio: "Naughton Scholar who built an EdTech platform used by leading Irish universities, developed workflow automations for a Y-Combinator startup, with a wealth of experience shipping scalable software solutions fast. Studied MSISS in Trinity.",
      image: "/images/team/gerry.jpg"
    },
    {
      name: "Aidan McNeill",
      role: "Founder, Head of Innovation",
      bio: "Aidan is an ex-founder, raised VC for power-to-x microreactors taking advantage of grid price fluctuations. He has worked on rocket propulsion systems for NASA missions including a successful lunar lander, and Special Projects in Eirgrid for AI, biomanufacturing and renewables—alongside the Chairman. Aidan is a 776 Fellow and studied Mechanical & Electronic Engineering in Trinity.",
      image: "/images/team/aidan.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 font-medium text-sm mb-6">
              Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Meet the <span className="text-blue-600">Founders</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              The team behind The Dublin Software Company is dedicated to transforming businesses through custom software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex justify-center mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100">
                    <Image 
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      width={250}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4 text-center">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is ready to help you build custom software solutions that drive efficiency and growth.
          </p>
          <Link href="/#contact" className="px-8 py-3 bg-gray-900 text-white font-medium rounded-md shadow-md hover:bg-gray-800 transition-colors duration-300 inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
} 