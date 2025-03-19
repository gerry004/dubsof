import Image from 'next/image';

export default function TeamPage() {
  const team = [
    {
      name: "George O'Leary",
      role: "Founder, CEO",
      bio: "Dublin-based entrepreneur who scaled a startup to €1.44M ARR in under 7 months, built two consumer brands in the retail sector, won Young Economist of the year 2020 TY. Strategic problem solver with innovative thinking. George has also worked extensively in the industrial automation industry with a highlight on PLC programming."
    },
    {
      name: "Gerry Yang",
      role: "Founder, CTO",
      bio: "Naughton Scholar who built an EdTech platform used by leading Irish universities, developed workflow automations for a Y-Combinator startup, with a wealth of experience shipping scalable software solutions fast. Studied MSISS in Trinity."
    },
    {
      name: "Aidan McNeill",
      role: "Founder, Head of Innovation",
      bio: "Aidan is an ex-founder, raised VC for power-to-x microreactors taking advantage of grid price fluctuations. He has worked on rocket propulsion systems for NASA missions including a successful lunar lander, and Special Projects in Eirgrid for AI, biomanufacturing and renewables—alongside the Chairman. Aidan is a 776 Fellow and studied Mechanical & Electronic Engineering in Trinity."
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Team</h1>
          <p className="text-xl text-center mt-4 max-w-2xl mx-auto">
            Meet the founders behind The Dublin Software Company
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  {/* Placeholder for team member image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 