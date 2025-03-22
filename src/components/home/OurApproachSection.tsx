'use client';
import { useEffect, useRef } from 'react';

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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.approach-card');
    cards.forEach((card, index) => {
      // Add staggered animation delay
      (card as HTMLElement).style.animationDelay = `${index * 0.15}s`;
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-twilight-blue text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 transform transition-all duration-700 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
            Our Approach: <span className="text-warm-orange">Beyond Software Development</span>
          </h2>
          <p className="text-center text-lg text-white max-w-3xl mx-auto">
            We're not just a software company—we're problem solvers and efficiency experts. 
            Our process begins with understanding your business from the inside out:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APPROACH.map((item, i) => (
            <div 
              key={i} 
              className="approach-card bg-dusky-teal p-8 rounded-lg shadow-md border border-twilight-blue 
                         transform transition-all duration-500 opacity-0 translate-y-8
                         hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 border-2 border-warm-orange rounded-full flex items-center justify-center mb-6 
                              text-warm-orange font-medium text-xl mx-auto
                              transition-all duration-300 hover:scale-110 hover:bg-warm-orange hover:text-white">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 text-sunset-peach text-center">{item.title}</h3>
              <p className="text-gray-300 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-bg-animate"></div>
    </section>
  );
} 