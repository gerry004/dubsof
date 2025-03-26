'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaClock, FaExclamationTriangle, FaClipboardList } from 'react-icons/fa';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface JigsawPiece {
  id: number;
  title: string;
  shortTitle: string;
  initialPosition: { x: number; y: number; rotate: number };
  finalPosition: { x: number; y: number; rotate: number };
}

const AITransformation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const jigsawContainerRef = useRef<HTMLDivElement>(null);
  const contentCardRef = useRef<HTMLDivElement>(null);
  const jigsawRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRef = useRef<HTMLDivElement>(null);
  const benefitsArrowRef = useRef<HTMLDivElement>(null);

  // Define jigsaw pieces with their initial scrambled and final positions
  const jigsawPieces: JigsawPiece[] = [
    {
      id: 1,
      title: "Client Management",
      shortTitle: "CRM",
      initialPosition: { x: -150, y: -200, rotate: 45 },
      finalPosition: { x: 0, y: 0, rotate: 0 }
    },
    {
      id: 2,
      title: "Project and Task Tracking",
      shortTitle: "PTT",
      initialPosition: { x: 150, y: -180, rotate: -30 },
      finalPosition: { x: 0, y: 0, rotate: 0 }
    },
    {
      id: 3,
      title: "Inventory Management",
      shortTitle: "IM",
      initialPosition: { x: -120, y: 200, rotate: 15 },
      finalPosition: { x: 0, y: 0, rotate: 0 }
    },
    {
      id: 4,
      title: "HR and Payroll",
      shortTitle: "HR",
      initialPosition: { x: 180, y: 170, rotate: -20 },
      finalPosition: { x: 0, y: 0, rotate: 0 }
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // Set initial states for jigsaw pieces
    jigsawRefs.current.forEach((ref, index) => {
      if (ref) {
        const piece = jigsawPieces[index];
        gsap.set(ref, {
          x: piece.initialPosition.x,
          y: piece.initialPosition.y,
          rotation: piece.initialPosition.rotate,
          opacity: 0.3,
          scale: 0.8
        });
        
        // Set initial text to full title
        const titleElement = ref.querySelector('h3');
        if (titleElement) {
          titleElement.textContent = piece.title;
        }
      }
    });

    // Set initial state for content card
    gsap.set(contentCardRef.current, {
      opacity: 0,
      y: 20
    });

    // Set initial state for arrow
    gsap.set(arrowRef.current, {
      opacity: 0,
      scaleY: 0
    });

    // Set initial state for benefits arrow
    gsap.set(benefitsArrowRef.current, {
      opacity: 0,
      scaleY: 0
    });

    // Create a timeline for the jigsaw animation
    const jigsawTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "center center",
        scrub: 1,
        markers: false
      }
    });

    // Animate each jigsaw piece
    jigsawRefs.current.forEach((ref, index) => {
      if (ref) {
        const piece = jigsawPieces[index];
        
        // Position and appearance animation
        jigsawTl.to(ref, {
          x: piece.finalPosition.x,
          y: piece.finalPosition.y,
          rotation: piece.finalPosition.rotate,
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "power1.inOut"
        }, 0);
        
        // Text transformation animation
        const titleElement = ref.querySelector('h3');
        if (titleElement) {
          jigsawTl.to(titleElement, {
            innerText: piece.shortTitle,
            duration: 0.1,
            ease: "none",
            onUpdate: function() {
              // This ensures the text changes at the midpoint of the animation
              const progress = jigsawTl.progress();
              if (progress >= 0.5 && titleElement.textContent !== piece.shortTitle) {
                titleElement.textContent = piece.shortTitle;
              } else if (progress < 0.5 && titleElement.textContent !== piece.title) {
                titleElement.textContent = piece.title;
              }
            }
          }, 0);
        }
      }
    });

    // Create a timeline for the content card
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "center center",
        scrub: 1,
        markers: false
      }
    });

    // Animate the content card
    contentTl.to(contentCardRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power1.inOut"
    });

    // Create a timeline for the arrow animation
    const arrowTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "center center",
        scrub: 1,
        markers: false
      }
    });

    // Animate the arrow
    arrowTl.to(arrowRef.current, {
      opacity: 1,
      scaleY: 1,
      duration: 0.3,
      ease: "power1.inOut"
    });

    // Create a timeline for the benefits arrow animation
    const benefitsArrowTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center 60%",
        end: "bottom 40%",
        scrub: 1,
        markers: false
      }
    });

    // Animate the benefits arrow
    benefitsArrowTl.to(benefitsArrowRef.current, {
      opacity: 1,
      scaleY: 1,
      duration: 0.3,
      ease: "power1.inOut"
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[100vh] overflow-hidden bg-gradient-to-b from-black to-[#0a1e0a] flex flex-col items-center justify-start pt-16 pb-24">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">What We Do</h2>
      
      {/* Problems Section - Redesigned with containers */}
      <div className="flex flex-col items-center mb-8 max-w-3xl w-full px-4 space-y-6">
        {/* Problem 1 */}
        <div className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-red-500/30 p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="bg-red-500/20 p-3 rounded-full shrink-0">
              <FaClock className="text-red-400 text-2xl" />
            </span>
            <div>
              <h3 className="text-red-400 text-2xl font-bold mb-2">100+ Wasted Admin Hours</h3>
              <p className="text-white/80">Your team spends countless hours on repetitive tasks that could be automated, taking focus away from what really matters.</p>
            </div>
          </div>
        </div>
        
        {/* Problem 2 */}
        <div className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-yellow-500/30 p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="bg-yellow-500/20 p-3 rounded-full shrink-0">
              <FaExclamationTriangle className="text-yellow-400 text-2xl" />
            </span>
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-2">Inefficient Systems</h3>
              <p className="text-white/80">Your current systems don't communicate with each other, creating data silos and forcing manual data transfers between platforms.</p>
            </div>
          </div>
        </div>
        
        {/* Problem 3 */}
        <div className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/30 p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="bg-blue-500/20 p-3 rounded-full shrink-0">
              <FaClipboardList className="text-blue-400 text-2xl" />
            </span>
            <div>
              <h3 className="text-blue-400 text-2xl font-bold mb-2">Too Much Busy Work</h3>
              <p className="text-white/80">Your business is stuck in maintenance mode, with no time or resources to focus on growth and innovation.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Arrow connecting problems to solution - now connected to the last problem container */}
      <div 
        ref={arrowRef} 
        className="w-2 h-24 bg-gradient-to-b from-blue-400/70 to-green-400/70 my-4 rounded-full origin-top"
      ></div>
      
      {/* Solution Container */}
      <div className="mb-8 bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-green-500/30 max-w-3xl w-full shadow-lg">
        <h3 className="text-3xl font-bold text-green-400 text-center mb-4">AI-Powered Custom System</h3>
        <p className="text-white/80 text-center mb-6">
          A unified platform tailored to your business that eliminates inefficiencies and automates repetitive tasks.
        </p>
        
        {/* Jigsaw pieces inside the solution container */}
        <div className="flex items-center justify-center">
          <div ref={jigsawContainerRef} className="relative w-[600px] h-[600px]">
            {jigsawPieces.map((piece, index) => {
              // Calculate position based on piece id
              const getPosition = () => {
                switch (piece.id) {
                  case 1: return "top-0 left-0";
                  case 2: return "top-0 right-0";
                  case 3: return "bottom-0 left-0";
                  case 4: return "bottom-0 right-0";
                  default: return "";
                }
              };

              return (
                <div
                  key={piece.id}
                  ref={el => {
                    jigsawRefs.current[index] = el;
                  }}
                  className={`absolute w-[300px] h-[300px] ${getPosition()}`}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl flex items-center justify-center p-6">
                      <h3 className="text-white text-xl font-bold text-center">{piece.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Arrow connecting solution to benefits */}
      <div 
        ref={benefitsArrowRef} 
        className="w-2 h-24 bg-gradient-to-b from-green-400/70 to-purple-400/70 my-4 rounded-full origin-top"
      ></div>
      
      {/* Benefits Section */}
      <div className="max-w-3xl w-full px-4">
        <div className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/30 p-6 shadow-lg">
          <h3 className="text-3xl font-bold text-purple-400 text-center mb-6">Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-2">Increased Efficiency</h4>
              <p className="text-white/80">Automate repetitive tasks and streamline workflows</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-2">Better Decision Making</h4>
              <p className="text-white/80">Access real-time data and insights across your business</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-2">Reduced Costs</h4>
              <p className="text-white/80">Eliminate redundant systems and manual processes</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-2">Scalable Growth</h4>
              <p className="text-white/80">Focus on innovation instead of maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITransformation;
