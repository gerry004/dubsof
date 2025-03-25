'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaClock, FaRandom, FaRobot, FaChartLine } from 'react-icons/fa';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AITransformationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const problemCardsRef = useRef<HTMLDivElement>(null);
  const problemLinesRef = useRef<HTMLDivElement>(null);
  const leftLineRef = useRef<SVGPathElement>(null);
  const middleLineRef = useRef<SVGPathElement>(null);
  const rightLineRef = useRef<SVGPathElement>(null);
  const transformationRef = useRef<HTMLDivElement>(null);
  const solutionLineRef = useRef<HTMLDivElement>(null);
  const solutionCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const problemCards = problemCardsRef.current;
    const problemLines = problemLinesRef.current;
    const leftLine = leftLineRef.current;
    const middleLine = middleLineRef.current;
    const rightLine = rightLineRef.current;
    const transformation = transformationRef.current;
    const solutionLine = solutionLineRef.current;
    const solutionCard = solutionCardRef.current;

    // Set initial state for SVG paths
    if (leftLine && middleLine && rightLine) {
      // Get the total length of each path for animation
      const leftLineLength = leftLine.getTotalLength();
      const middleLineLength = middleLine.getTotalLength();
      const rightLineLength = rightLine.getTotalLength();
      
      // Set initial state - lines not visible
      gsap.set(leftLine, { 
        strokeDasharray: leftLineLength,
        strokeDashoffset: leftLineLength
      });
      
      gsap.set(middleLine, { 
        strokeDasharray: middleLineLength,
        strokeDashoffset: middleLineLength
      });
      
      gsap.set(rightLine, { 
        strokeDasharray: rightLineLength,
        strokeDashoffset: rightLineLength
      });
    }

    // Set initial state for solution line
    if (solutionLine) {
      gsap.set(solutionLine, { scaleY: 0 });
    }

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true, // Smooth scrubbing for precise scroll control
        pin: '.pin-container',
        anticipatePin: 1,
        markers: false,
      }
    });

    // Animation sequence
    tl
    // Problem cards are already visible
    .to({}, { duration: 0.1 }) // Small delay
    
    // Draw the problem lines as user scrolls
    .to(leftLine, {
      strokeDashoffset: 0,
      duration: 0.2,
      ease: "none"
    }, 0.1)
    
    .to(middleLine, {
      strokeDashoffset: 0,
      duration: 0.2,
      ease: "none"
    }, 0.1)
    
    .to(rightLine, {
      strokeDashoffset: 0,
      duration: 0.2,
      ease: "none"
    }, 0.1)
    
    // Show transformation
    .to(transformation, { 
      opacity: 1,
      duration: 0.2,
      ease: "none"
    }, 0.3)
    
    // Grow the solution line
    .to(solutionLine, {
      scaleY: 1,
      duration: 0.2,
      ease: "none"
    }, 0.5)
    
    // Show solution card
    .to(solutionCard, {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "none"
    }, 0.7);

    return () => {
      // Clean up
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[300vh] bg-black text-white overflow-hidden"
      aria-label="AI Transformation Visualization"
    >
      {/* Pinned container for the animation */}
      <div className="pin-container min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4 relative flex flex-col items-center justify-center">
          
          {/* Problem Cards */}
          <div 
            ref={problemCardsRef}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-8"
          >
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 p-6 rounded-xl border border-red-800/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-700/30 rounded-full flex items-center justify-center mb-4">
                <FaClock className="text-red-400 text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">100+ Wasted Admin Hours</h3>
              <p className="text-gray-400">Time spent on repetitive tasks that could be automated</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 p-6 rounded-xl border border-red-800/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-700/30 rounded-full flex items-center justify-center mb-4">
                <FaRandom className="text-red-400 text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Inefficient Systems</h3>
              <p className="text-gray-400">Disconnected tools and processes causing friction</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 p-6 rounded-xl border border-red-800/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-700/30 rounded-full flex items-center justify-center mb-4">
                <FaRobot className="text-red-400 text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Too Much Busy Work</h3>
              <p className="text-gray-400">Manual tasks that could be easily automated</p>
            </div>
          </div>

          {/* Problem Lines */}
          <div 
            ref={problemLinesRef}
            className="relative h-32 w-full mb-8"
          >
            <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="xMidYMid meet">
              {/* Left line */}
              <path 
                ref={leftLineRef}
                d="M 50,0 L 50,50 L 150,80" 
                stroke="#7c3aed" 
                strokeWidth="3" 
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Middle line */}
              <path 
                ref={middleLineRef}
                d="M 150,0 L 150,80" 
                stroke="#7c3aed" 
                strokeWidth="3" 
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Right line */}
              <path 
                ref={rightLineRef}
                d="M 250,0 L 250,50 L 150,80" 
                stroke="#7c3aed" 
                strokeWidth="3" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* AI Transformation */}
          <div 
            ref={transformationRef}
            className="w-full text-center mb-8 opacity-0"
          >
            <div className="relative w-64 h-64 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full opacity-20 animate-pulse"
                   style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.8) 0%, rgba(124,58,237,0.4) 70%, rgba(139,92,246,0.1) 100%)' }}>
              </div>
              <div className="absolute inset-4 rounded-full opacity-30 animate-pulse"
                   style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.8) 0%, rgba(124,58,237,0.5) 70%, rgba(139,92,246,0.2) 100%)', animationDelay: '0.3s' }}>
              </div>
              <div className="absolute inset-8 rounded-full opacity-40 animate-pulse"
                   style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.9) 0%, rgba(124,58,237,0.6) 70%, rgba(139,92,246,0.3) 100%)', animationDelay: '0.6s' }}>
              </div>
              <div className="absolute inset-12 rounded-full opacity-50 animate-pulse"
                   style={{ background: 'radial-gradient(circle, rgba(79,70,229,1) 0%, rgba(124,58,237,0.7) 70%, rgba(139,92,246,0.4) 100%)', animationDelay: '0.9s' }}>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-opacity-90 font-bold text-xl text-center px-4">
                  AI Powered Custom<br />System
                </div>
              </div>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-blue-400">
              Crafted for your business by the Dublin Software Company
            </h3>
          </div>

          {/* Solution Line */}
          <div 
            ref={solutionLineRef}
            className="h-32 w-2 mb-8 bg-green-500 origin-top"
          ></div>

          {/* Solution Card */}
          <div 
            ref={solutionCardRef}
            className="w-full max-w-2xl transform translate-y-10 opacity-0 my-8"
            style={{ transitionProperty: 'transform, opacity' }}
          >
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-8 rounded-xl border border-green-700/50 flex items-center">
              <div className="w-20 h-20 bg-green-700/30 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <FaChartLine className="text-green-400 text-4xl" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">A Cohesive System for Your Business</h3>
                <p className="text-gray-300">Streamlined workflows, automated processes, and intelligent insights that save time and increase productivity</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
