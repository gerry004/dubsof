'use client';
import { useEffect, useRef, createRef, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Array<RefObject<HTMLDivElement | null>>>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Initialize the refs array
    itemsRef.current = Array(APPROACH.length)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>());

    // Create a timeline for sequential animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        scrub: 1,
        pin: false,
      }
    });

    // Animate timeline items on scroll
    itemsRef.current.forEach((itemRef, index) => {
      const item = itemRef.current;
      if (!item) return;
      
      // Set initial state
      gsap.set(item, { 
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50 
      });
      
      // Add to timeline with staggered start times
      tl.to(item, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out",
      }, index * 0.2); // Stagger the animations
    });
    
    // Improved timeline animation
    if (timelineRef.current) {
      gsap.set(timelineRef.current, { 
        height: 0,
        opacity: 0.5
      });
      
      // Create a separate ScrollTrigger for the timeline to make it more seamless
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%", // Start earlier
        end: "bottom 20%",
        scrub: true,
        onUpdate: (self) => {
          // Smoothly animate the timeline height based on scroll progress
          if (timelineRef.current) {
            gsap.to(timelineRef.current, {
              height: `${self.progress * 100}%`,
              opacity: 0.5 + (self.progress * 0.5), // Gradually increase opacity
              duration: 0.1, // Short duration for smoother updates
              ease: "none",
              overwrite: true
            });
          }
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-[#0a1e0a] to-black text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 transform transition-all duration-700 opacity-0 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
            Our Approach: <span className="text-warm-orange">Beyond Software Development</span>
          </h2>
          <p className="text-center text-lg text-white max-w-3xl mx-auto">
            We're not just a software company—we're problem solvers and efficiency experts. 
            Our process begins with understanding your business from the inside out:
          </p>
        </div>
        
        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div 
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-400 to-purple-500 h-0 z-0"
          ></div>
          
          {/* Timeline items */}
          {APPROACH.map((item, i) => {
            return (
              <div 
                key={i}
                ref={itemsRef.current[i] || null}
                className={`relative z-10 flex items-center mb-16 last:mb-0 ${
                  i % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black border-4 border-warm-orange flex items-center justify-center z-20">
                  <span className="text-warm-orange font-bold">{i + 1}</span>
                </div>
                
                {/* Content card */}
                <div className={`w-5/12 ${i % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-3 text-warm-orange">{item.title}</h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Animated gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-bg-animate"></div>
    </section>
  );
} 