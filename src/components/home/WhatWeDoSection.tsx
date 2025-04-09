"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhatWeDoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef1 = useRef<HTMLParagraphElement>(null);
  const descriptionRef2 = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate title
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 20 });
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // Animate divider
    if (dividerRef.current) {
      gsap.set(dividerRef.current, { width: 0 });
      tl.to(
        dividerRef.current,
        {
          width: "100%",
          duration: 1,
          ease: "power1.inOut",
        },
        "-=0.4"
      );
    }

    // Animate first paragraph
    if (descriptionRef1.current) {
      gsap.set(descriptionRef1.current, { opacity: 0, y: 20 });
      tl.to(
        descriptionRef1.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );
    }

    // Animate second paragraph
    if (descriptionRef2.current) {
      gsap.set(descriptionRef2.current, { opacity: 0, y: 20 });
      tl.to(
        descriptionRef2.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );
    }

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center bg-gradient-to-b from-black via-[#0a1e0a] to-black py-24 px-8 md:px-12"
      id="what-we-do-section"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-serif mb-6 text-white"
        >
          What We Do
        </h2>

        <div ref={dividerRef} className="h-px bg-gray-500 w-full my-8"></div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <p ref={descriptionRef1} className="text-lg md:text-xl text-white/90">
            The Dublin Software Co. is a data ingestion, aggregation and
            optimisation software startup, enabling the transition from
            outdated, fragmented and inefficient software systems to advanced
            AI-driven, and integrated custom solutions built to expand with your
            organisation.
          </p>
          <p ref={descriptionRef2} className="text-lg md:text-xl text-white/90">
            The marginal price of software is trailing to 0, in about 5-10 years
            nobody will be paying for traditional, individualised software
            platforms. Competition will depend on how AI implementation is
            maximised in your organisation, and we're here to make that happen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
