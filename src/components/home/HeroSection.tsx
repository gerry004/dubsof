"use client";

import Image from "next/image";
import PartnersSection from "./PartnersSection";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register TextPlugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

interface HeroSectionProps {
  backgroundImage?: string;
  variant?: "primary" | "secondary";
}

export default function HeroSection({
  backgroundImage,
  variant = "primary",
}: HeroSectionProps) {
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  const isSecondary = variant === "secondary";

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Text streaming animation
    const tl = gsap.timeline();

    if (titleRef.current) {
      // Set initial state to blank
      gsap.set(titleRef.current, { text: "" });

      const titleText = "The Dublin\nSoftware Co.";
      tl.to(titleRef.current, {
        duration: 1.5,
        text: titleText,
        ease: "none",
        delay: 0.3,
      });
    }

    if (subtitleRef.current) {
      // Set initial state to blank
      gsap.set(subtitleRef.current, { innerHTML: "" });

      // Remove the <br/> tag for mobile responsiveness
      const subtitleText = "Eliminating inefficiency in companies with ";
      tl.to(
        subtitleRef.current,
        {
          duration: 1,
          text: subtitleText,
          ease: "none",
        },
        "+=0.2"
      );

      // Add the colored span after the main text is complete
      tl.add(() => {
        const spanElement = document.createElement("span");
        spanElement.className = "text-warm-orange";
        subtitleRef.current?.appendChild(spanElement);

        gsap.to(spanElement, {
          duration: 1,
          text: "custom AI powered systems",
          ease: "none",
        });
      });
    }

    // Animate the horizontal divider - moved after subtitle animation
    const dividerRef = document.querySelector(
      "#hero-section .h-px.bg-gray-500"
    );
    if (dividerRef) {
      gsap.set(dividerRef, { width: 0 });

      // Add the divider animation after the subtitle is complete
      tl.to(
        dividerRef,
        {
          width: "100%",
          duration: 1,
          ease: "power1.inOut",
        },
        "+=0.2"
      );
    }

    if (descriptionRef.current) {
      // Set initial state to blank
      gsap.set(descriptionRef.current, { text: "" });

      const descriptionText =
        "AI is changing at a blistering pace. Our team partners with you to find the best opportunities for AI-driven value and to build solutions that integrate seamlessly with your operations.";
      tl.to(
        descriptionRef.current,
        {
          duration: 2,
          text: descriptionText,
          ease: "none",
        },
        "+=0.3"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const verticalLine = document.querySelector(
      "#hero-section .w-px.bg-gray-500.h-full"
    );
    if (!verticalLine) return;

    // Create a ScrollTrigger for the vertical line
    ScrollTrigger.create({
      trigger: "#hero-section",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        // Adjust opacity based on scroll position
        gsap.to(verticalLine, {
          opacity: 1 - self.progress * 0.7, // Fade out as you scroll down
          duration: 0.1,
          overwrite: "auto",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className={`flex flex-col justify-between bg-gradient-to-b py-16 from-[#0a1e0a] to-black relative`}
      style={bgStyle}
      id="hero-section"
    >
      <div className="flex flex-col md:flex-row h-full min-h-[80vh]">
        {/* Left side with logo - only visible on desktop */}
        <div className="hidden md:flex md:w-[35%] items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-[400px] aspect-square relative">
            <Image
              src="/images/logo-square-white.png"
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
              {/* Content will be filled by GSAP */}
            </h1>
            <p ref={subtitleRef} className="text-lg md:text-xl mb-4">
              {/* Content will be filled by GSAP */}
            </p>

            <div className="h-px bg-gray-500 w-full my-8"></div>

            <p
              ref={descriptionRef}
              className="text-lg md:text-xl mb-8 max-w-2xl"
            >
              {/* Content will be filled by GSAP */}
            </p>
          </div>

          {/* Former clients section */}
          <div className="mt-auto">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              OUR CLIENTS SERVE
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
