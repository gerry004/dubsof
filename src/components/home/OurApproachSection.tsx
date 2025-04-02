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
  const contentRefs = useRef<Array<RefObject<HTMLDivElement | null>>>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Initialize the refs arrays
    itemsRef.current = Array(APPROACH.length)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>());
      
    contentRefs.current = Array(APPROACH.length)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>());

    // Create a master timeline
    const master = gsap.timeline();
    
    // More robust timeline animation with a single ScrollTrigger
    const scrollTrigger = {
      trigger: sectionRef.current,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 0.5,
      pin: false,
      onUpdate: (self: any) => {
        // Smoothly animate the timeline height based on scroll progress
        if (timelineRef.current) {
          const progress = Math.max(0, Math.min(1, self.progress)); // Clamp between 0 and 1
          gsap.to(timelineRef.current, {
            height: `${progress * 100}%`,
            opacity: 0.5 + (progress * 0.5),
            duration: 0.1,
            ease: "none",
            overwrite: "auto"
          });
        }
      }
    };
    
    // Set initial states for all elements
    gsap.set(timelineRef.current, { height: 0, opacity: 0.5 });
    
    // Create individual timelines for each item with staggered reveal
    itemsRef.current.forEach((itemRef, index) => {
      const item = itemRef.current;
      const content = contentRefs.current[index]?.current;
      
      if (!item || !content) return;
      
      // Set initial states
      gsap.set(item, { opacity: 0, y: 30 });
      gsap.set(content, { opacity: 0, scale: 0.9 });
      
      // Calculate when this item should appear based on scroll progress
      const startPosition = index / (APPROACH.length - 1);
      const endPosition = (index + 1) / APPROACH.length;
      
      // Create a timeline for this item
      const tl = gsap.timeline({
        scrollTrigger: {
          ...scrollTrigger,
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Only animate this item when scroll is in its range
            if (progress >= startPosition && progress <= endPosition) {
              const itemProgress = (progress - startPosition) / (endPosition - startPosition);
              
              // Fade in the item
              gsap.to(item, {
                opacity: itemProgress,
                y: 30 - (itemProgress * 30),
                duration: 0.1,
                overwrite: "auto"
              });
              
              // Fade in and scale up the content
              gsap.to(content, {
                opacity: itemProgress,
                scale: 0.9 + (itemProgress * 0.1),
                duration: 0.1,
                overwrite: "auto"
              });
            }
          }
        }
      });
      
      master.add(tl, 0);
    });
    
    // Create the main ScrollTrigger
    ScrollTrigger.create(scrollTrigger);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      master.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-black via-[#0a1e0a] to-black text-white relative overflow-hidden"
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
          {/* Center line - hidden on mobile, visible on md and up */}
          <div 
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-400 to-purple-500 h-0 z-0 hidden md:block"
          ></div>
          
          {/* Mobile timeline line - only visible on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-purple-500 z-0 md:hidden"></div>
          
          {/* Timeline items */}
          {APPROACH.map((item, i) => {
            return (
              <div 
                key={i}
                ref={itemsRef.current[i] || null}
                className={`relative z-10 flex items-start mb-16 last:mb-0 ${
                  i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline node - positioned differently on mobile vs desktop */}
                <div className={`
                  w-12 h-12 rounded-full bg-black border-4 border-warm-orange flex items-center justify-center z-20
                  md:absolute md:left-1/2 md:transform md:-translate-x-1/2
                  absolute left-8 transform -translate-x-1/2
                `}>
                  <span className="text-warm-orange font-bold">{i + 1}</span>
                </div>
                
                {/* Content card - adjusted for mobile */}
                <div className={`
                  md:w-5/12 
                  ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}
                  pl-16 pr-4 w-full md:pl-0
                `}>
                  <div 
                    ref={contentRefs.current[i] || null}
                    className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
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
    </section>
  );
} 