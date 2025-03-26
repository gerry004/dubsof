'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { FaClock, FaRandom, FaRobot, FaChartLine } from 'react-icons/fa';
import AITransformation from './AITransformation';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Problem cards data for reuse
const problemCardsData = [
  {
    icon: FaClock,
    title: "100+ Wasted Admin Hours",
    description: "Time spent on repetitive tasks that could be automated"
  },
  {
    icon: FaRandom,
    title: "Inefficient Systems",
    description: "Disconnected tools and processes causing friction"
  },
  {
    icon: FaRobot,
    title: "Too Much Busy Work",
    description: "Manual tasks that could be easily automated"
  }
];

// Desktop version of the animation
function DesktopAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const problemCardsRef = useRef<HTMLDivElement>(null);
  const problemLinesRef = useRef<HTMLDivElement>(null);
  const leftLineRef = useRef<SVGPathElement>(null);
  const middleLineRef = useRef<SVGPathElement>(null);
  const rightLineRef = useRef<SVGPathElement>(null);
  const transformationRef = useRef<HTMLDivElement>(null);
  const solutionLineRef = useRef<HTMLDivElement>(null);
  const solutionCardRef = useRef<HTMLDivElement>(null);
  
  // Refs for text streaming animation
  const cardTitleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const cardDescRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const transformationTitleRef = useRef<HTMLDivElement>(null);
  const transformationSubtitleRef = useRef<HTMLHeadingElement>(null);
  const solutionTitleRef = useRef<HTMLHeadingElement>(null);
  const solutionDescRef = useRef<HTMLParagraphElement>(null);

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

    // Set initial state for solution line and other elements
    gsap.set(solutionLine, { scaleY: 0 });
    gsap.set(transformation, { opacity: 0 });
    gsap.set(solutionCard, { opacity: 0, y: 20 });
    
    // Set initial state for text elements
    cardTitleRefs.current.forEach(el => {
      if (el) gsap.set(el, { text: "" });
    });
    
    cardDescRefs.current.forEach(el => {
      if (el) gsap.set(el, { text: "" });
    });
    
    if (transformationTitleRef.current) {
      gsap.set(transformationTitleRef.current, { text: "" });
    }
    
    if (transformationSubtitleRef.current) {
      gsap.set(transformationSubtitleRef.current, { text: "" });
    }
    
    if (solutionTitleRef.current) {
      gsap.set(solutionTitleRef.current, { text: "" });
    }
    
    if (solutionDescRef.current) {
      gsap.set(solutionDescRef.current, { text: "" });
    }

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Start animation when the top of the section hits 80% from the top of viewport
        end: "bottom 20%", // End animation when the bottom of the section hits 20% from the top of viewport
        scrub: 1, // Smooth scrubbing with a 1 second delay
        markers: false,
      }
    });

    // Animation sequence - more evenly distributed
    tl
    // Problem cards text streaming
    .to(cardTitleRefs.current[0], {
      text: problemCardsData[0].title,
      duration: 0.1,
      ease: "none"
    }, 0)
    .to(cardDescRefs.current[0], {
      text: problemCardsData[0].description,
      duration: 0.1,
      ease: "none"
    }, 0.05)
    
    .to(cardTitleRefs.current[1], {
      text: problemCardsData[1].title,
      duration: 0.1,
      ease: "none"
    }, 0.1)
    .to(cardDescRefs.current[1], {
      text: problemCardsData[1].description,
      duration: 0.1,
      ease: "none"
    }, 0.15)
    
    .to(cardTitleRefs.current[2], {
      text: problemCardsData[2].title,
      duration: 0.1,
      ease: "none"
    }, 0.2)
    .to(cardDescRefs.current[2], {
      text: problemCardsData[2].description,
      duration: 0.1,
      ease: "none"
    }, 0.25)
    
    // Draw the problem lines as user scrolls
    .to(leftLine, {
      strokeDashoffset: 0,
      duration: 0.1,
      ease: "power1.inOut"
    }, 0.3)
    
    .to(middleLine, {
      strokeDashoffset: 0,
      duration: 0.1,
      ease: "power1.inOut"
    }, 0.35)
    
    .to(rightLine, {
      strokeDashoffset: 0,
      duration: 0.1,
      ease: "power1.inOut"
    }, 0.4)
    
    // Show transformation
    .to(transformation, { 
      opacity: 1,
      duration: 0.1,
      ease: "power1.inOut"
    }, 0.45)
    
    // Transformation text streaming
    .to(transformationTitleRef.current, {
      text: "AI Powered Custom\nSystem",
      duration: 0.1,
      ease: "none"
    }, 0.5)
    
    .to(transformationSubtitleRef.current, {
      text: "Crafted for your business by the Dublin Software Company",
      duration: 0.1,
      ease: "none"
    }, 0.55)
    
    // Grow the solution line
    .to(solutionLine, {
      scaleY: 1,
      duration: 0.1,
      ease: "power1.inOut"
    }, 0.6)
    
    // Show solution card
    .to(solutionCard, {
      opacity: 1,
      y: 0,
      duration: 0.1,
      ease: "power1.inOut"
    }, 0.65)
    
    // Solution text streaming
    .to(solutionTitleRef.current, {
      text: "A Cohesive System for Your Business",
      duration: 0.1,
      ease: "none"
    }, 0.7)
    
    .to(solutionDescRef.current, {
      text: "Streamlined workflows, automated processes, and intelligent insights that save time and increase productivity",
      duration: 0.1,
      ease: "none"
    }, 0.75);

    // Create background color transition
    gsap.fromTo(
      section.parentElement, 
      { 
        backgroundColor: "rgba(10, 30, 10, 1)" // Match HeroSection bg-[#0a1e0a]
      },
      {
        backgroundColor: "rgba(0, 0, 0, 1)", // Black
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top 70%",
          scrub: true,
        }
      }
    );

    return () => {
      // Clean up
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="w-full max-w-6xl mx-auto px-4 py-16 relative"
    >
      {/* Problem Cards */}
      <div 
        ref={problemCardsRef}
        className="w-full grid grid-cols-3 gap-6 mb-12"
      >
        {problemCardsData.map((card, index) => (
          <div key={index} className="bg-gradient-to-br from-red-900/40 to-red-800/20 p-6 rounded-xl border border-red-800/50 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-700/30 rounded-full flex items-center justify-center mb-4">
              <card.icon className="text-red-400 text-3xl" />
            </div>
            <h3 
              ref={el => cardTitleRefs.current[index] = el}
              className="text-xl md:text-2xl font-bold mb-3"
            ></h3>
            <p 
              ref={el => cardDescRefs.current[index] = el}
              className="text-gray-400"
            ></p>
          </div>
        ))}
      </div>

      {/* Problem Lines */}
      <div 
        ref={problemLinesRef}
        className="relative h-32 w-full mb-12"
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
        className="w-full text-center mb-12"
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
            <div 
              ref={transformationTitleRef}
              className="text-white text-opacity-90 font-bold text-xl text-center px-4 whitespace-pre-line"
            ></div>
          </div>
        </div>
        <h3 
          ref={transformationSubtitleRef}
          className="text-lg md:text-2xl font-bold text-blue-400"
        ></h3>
      </div>

      {/* Solution Line */}
      <div 
        ref={solutionLineRef}
        className="h-32 w-2 mx-auto mb-12 bg-green-500 origin-top"
      ></div>

      {/* Solution Card */}
      <div 
        ref={solutionCardRef}
        className="w-full max-w-2xl mx-auto mb-12"
      >
        <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-8 rounded-xl border border-green-700/50 flex items-center">
          <div className="w-20 h-20 bg-green-700/30 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
            <FaChartLine className="text-green-400 text-4xl" />
          </div>
          <div>
            <h3 
              ref={solutionTitleRef}
              className="text-2xl md:text-3xl font-bold mb-3"
            ></h3>
            <p 
              ref={solutionDescRef}
              className="text-gray-300"
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile version of the animation
function MobileAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const problemCardsRef = useRef<HTMLDivElement>(null);
  const transformationRef = useRef<HTMLDivElement>(null);
  const solutionCardRef = useRef<HTMLDivElement>(null);
  
  // Refs for text streaming animation
  const cardTitleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const cardDescRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const transformationTitleRef = useRef<HTMLDivElement>(null);
  const transformationSubtitleRef = useRef<HTMLHeadingElement>(null);
  const solutionTitleRef = useRef<HTMLHeadingElement>(null);
  const solutionDescRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const problemCards = problemCardsRef.current;
    const transformation = transformationRef.current;
    const solutionCard = solutionCardRef.current;

    // Set initial states
    gsap.set(transformation, { opacity: 0, y: 20 });
    gsap.set(solutionCard, { opacity: 0, y: 20 });
    
    // Set initial state for text elements
    cardTitleRefs.current.forEach(el => {
      if (el) gsap.set(el, { text: "" });
    });
    
    cardDescRefs.current.forEach(el => {
      if (el) gsap.set(el, { text: "" });
    });
    
    if (transformationTitleRef.current) {
      gsap.set(transformationTitleRef.current, { text: "" });
    }
    
    if (transformationSubtitleRef.current) {
      gsap.set(transformationSubtitleRef.current, { text: "" });
    }
    
    if (solutionTitleRef.current) {
      gsap.set(solutionTitleRef.current, { text: "" });
    }
    
    if (solutionDescRef.current) {
      gsap.set(solutionDescRef.current, { text: "" });
    }

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Start animation when the top of the section hits 80% from the top of viewport
        end: "bottom 20%", // End animation when the bottom of the section hits 20% from the top of viewport
        scrub: 1, // Smooth scrubbing with a 1 second delay
        markers: false,
      }
    });

    // Animation sequence
    tl
    // Problem cards text streaming
    .to(cardTitleRefs.current[0], {
      text: problemCardsData[0].title,
      duration: 0.1,
      ease: "none"
    }, 0)
    .to(cardDescRefs.current[0], {
      text: problemCardsData[0].description,
      duration: 0.1,
      ease: "none"
    }, 0.05)
    
    .to(cardTitleRefs.current[1], {
      text: problemCardsData[1].title,
      duration: 0.1,
      ease: "none"
    }, 0.1)
    .to(cardDescRefs.current[1], {
      text: problemCardsData[1].description,
      duration: 0.1,
      ease: "none"
    }, 0.15)
    
    .to(cardTitleRefs.current[2], {
      text: problemCardsData[2].title,
      duration: 0.1,
      ease: "none"
    }, 0.2)
    .to(cardDescRefs.current[2], {
      text: problemCardsData[2].description,
      duration: 0.1,
      ease: "none"
    }, 0.25)
    
    // Show transformation
    .to(transformation, { 
      opacity: 1,
      y: 0,
      duration: 0.1,
      ease: "power1.inOut"
    }, 0.3)
    
    // Transformation text streaming
    .to(transformationTitleRef.current, {
      text: "AI Powered Custom\nSystem",
      duration: 0.1,
      ease: "none"
    }, 0.35)
    
    .to(transformationSubtitleRef.current, {
      text: "Crafted for your business by the Dublin Software Company",
      duration: 0.1,
      ease: "none"
    }, 0.4)
    
    // Show solution card
    .to(solutionCard, {
      opacity: 1,
      y: 0,
      duration: 0.1,
      ease: "power1.inOut"
    }, 0.45)
    
    // Solution text streaming
    .to(solutionTitleRef.current, {
      text: "A Cohesive System for Your Business",
      duration: 0.1,
      ease: "none"
    }, 0.5)
    
    .to(solutionDescRef.current, {
      text: "Streamlined workflows, automated processes, and intelligent insights that save time and increase productivity",
      duration: 0.1,
      ease: "none"
    }, 0.55);

    // Create background color transition
    gsap.fromTo(
      section.parentElement, 
      { 
        backgroundColor: "rgba(10, 30, 10, 1)" // Match HeroSection bg-[#0a1e0a]
      },
      {
        backgroundColor: "rgba(0, 0, 0, 1)", // Black
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top 70%",
          scrub: true,
        }
      }
    );

    return () => {
      // Clean up
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="w-full max-w-6xl mx-auto px-4 py-12 relative"
    >
      {/* Problem Cards */}
      <div 
        ref={problemCardsRef}
        className="w-full grid grid-cols-1 gap-6 mb-12"
      >
        {problemCardsData.map((card, index) => (
          <div key={index} className="bg-gradient-to-br from-red-900/40 to-red-800/20 p-6 rounded-xl border border-red-800/50 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-700/30 rounded-full flex items-center justify-center mb-4">
              <card.icon className="text-red-400 text-3xl" />
            </div>
            <h3 
              ref={el => cardTitleRefs.current[index] = el}
              className="text-xl font-bold mb-3"
            ></h3>
            <p 
              ref={el => cardDescRefs.current[index] = el}
              className="text-gray-400"
            ></p>
          </div>
        ))}
      </div>

      {/* Mobile connector line */}
      <div className="w-2 h-16 bg-purple-600 mx-auto mb-12"></div>

      {/* AI Transformation */}
      <div 
        ref={transformationRef}
        className="w-full text-center mb-12"
      >
        <div className="relative w-48 h-48 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full opacity-20 animate-pulse"
               style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.8) 0%, rgba(124,58,237,0.4) 70%, rgba(139,92,246,0.1) 100%)' }}>
          </div>
          <div className="absolute inset-4 rounded-full opacity-30 animate-pulse"
               style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.8) 0%, rgba(124,58,237,0.5) 70%, rgba(139,92,246,0.2) 100%)', animationDelay: '0.3s' }}>
          </div>
          <div className="absolute inset-8 rounded-full opacity-40 animate-pulse"
               style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.9) 0%, rgba(124,58,237,0.6) 70%, rgba(139,92,246,0.3) 100%)', animationDelay: '0.6s' }}>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              ref={transformationTitleRef}
              className="text-white text-opacity-90 font-bold text-lg text-center px-4 whitespace-pre-line"
            ></div>
          </div>
        </div>
        <h3 
          ref={transformationSubtitleRef}
          className="text-xl font-bold text-blue-400"
        ></h3>
      </div>

      {/* Mobile connector line */}
      <div className="w-2 h-16 bg-green-500 mx-auto mb-12"></div>

      {/* Solution Card */}
      <div 
        ref={solutionCardRef}
        className="w-full mb-12"
      >
        <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border border-green-700/50">
          <div className="w-16 h-16 bg-green-700/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaChartLine className="text-green-400 text-3xl" />
          </div>
          <h3 
            ref={solutionTitleRef}
            className="text-xl font-bold mb-3 text-center"
          ></h3>
          <p 
            ref={solutionDescRef}
            className="text-gray-300 text-center"
          ></p>
        </div>
      </div>
    </div>
  );
}

export default function AITransformationSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      // Initial check
      setIsMobile(window.innerWidth < 768);

      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <section 
      id="ai-transformation"
      className="relative bg-black text-white overflow-hidden transition-colors duration-1000"
      aria-label="AI Transformation Visualization"
    >
      <AITransformation />
      {isMobile ? <MobileAnimation /> : <DesktopAnimation />}
    </section>
  );
}
