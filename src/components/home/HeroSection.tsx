'use client';

import Image from 'next/image';
import PartnersSection from './PartnersSection';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register TextPlugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}

interface HeroSectionProps {
  backgroundImage?: string;
  variant?: 'primary' | 'secondary';
}

export default function HeroSection({ 
  backgroundImage, 
  variant = 'primary' 
}: HeroSectionProps) {
  const bgStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  const isSecondary = variant === 'secondary';
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    // Text streaming animation
    const tl = gsap.timeline();
    
    if (titleRef.current) {
      const titleText = "The Dublin\nSoftware Co.";
      gsap.set(titleRef.current, { text: "" });
      
      tl.to(titleRef.current, {
        duration: 1.5,
        text: titleText,
        ease: "none",
        delay: 0.3
      });
    }
    
    if (subtitleRef.current) {
      const subtitleText = "Eliminating inefficiency in SMEs with";
      gsap.set(subtitleRef.current, { text: "" });
      
      tl.to(subtitleRef.current, {
        duration: 1,
        text: subtitleText,
        ease: "none",
      }, "+=0.2");
      
      // Animate the span separately
      const spanElement = subtitleRef.current.querySelector('span');
      if (spanElement) {
        const spanText = "AI powered custom systems";
        gsap.set(spanElement, { text: "" });
        
        tl.to(spanElement, {
          duration: 1,
          text: spanText,
          ease: "none",
        }, "+=0.2");
      }
    }
    
    if (descriptionRef.current) {
      const descriptionText = "AI is changing at a blistering pace. Our team partners with you to find the best opportunities for AI-driven value and to build solutions that integrate seamlessly with your operations.";
      gsap.set(descriptionRef.current, { text: "" });
      
      tl.to(descriptionRef.current, {
        duration: 2,
        text: descriptionText,
        ease: "none",
      }, "+=0.3");
    }
    
    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <section 
      className={`min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#0a1e0a] to-black relative`}
      style={bgStyle}
      id="hero-section"
    >
      <div className="flex flex-col md:flex-row h-full min-h-[80vh]">
        {/* Left side with logo - only visible on desktop */}
        <div className="hidden md:flex md:w-[35%] items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-[400px] aspect-square relative">
            <Image 
              src="/images/logo-square.png" 
              alt="The Dublin Software Company Logo" 
              width={400} 
              height={400}
              className="w-full h-full"
              priority
            />
          </div>
        </div>
        
        {/* Vertical divider with more spacing - only visible on desktop */}
        <div className="hidden md:flex flex-col items-center px-6">
          <div className="w-px bg-gray-500 h-full"></div>
        </div>
        
        {/* Right side with content */}
        <div className="w-full md:w-[60%] flex flex-col justify-between p-8 md:p-12 text-white">
          <div className="max-w-3xl">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl font-serif mb-6 leading-tight whitespace-pre-line"
            >
              The Dublin<br />Software Co.
            </h1>
            <p 
              ref={subtitleRef}
              className="text-lg md:text-xl mb-4"
            >
              Eliminating inefficiency in SMEs with<br />
              <span className="text-warm-orange">AI powered custom systems</span>
            </p>
            
            <div className="h-px bg-gray-500 w-full my-8"></div>
            
            <p 
              ref={descriptionRef}
              className="text-lg md:text-xl mb-8 max-w-2xl"
            >
              AI is changing at a blistering pace.
              Our team partners with you to find
              the best opportunities for AI-driven
              value and to build solutions that
              integrate seamlessly with your
              operations.
            </p>
          </div>
          
          {/* Former clients section */}
          <div className="mt-auto">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              OUR CLIENTS WORK WITH
            </p>
            <div className="w-full">
              <PartnersSection variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 