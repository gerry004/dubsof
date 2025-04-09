"use client";

import Image from "next/image";

const LOGOS = [
  { src: "/images/logos/coke.png", alt: "Coke Logo" },
  { src: "/images/logos/gsk.jpg", alt: "GSK Logo" },
  { src: "/images/logos/jandj.png", alt: "J&J Logo" },
  { src: "/images/logos/pandg.svg", alt: "P&G Logo" },
  { src: "/images/logos/pepsi.svg", alt: "Pepsi Logo" },
  { src: "/images/logos/goliath.jpg", alt: "Goliath Logo" },
];

interface PartnersSectionProps {
  variant?: "light" | "dark";
}

export default function PartnersSection({
  variant = "light",
}: PartnersSectionProps) {
  const isDark = variant === "dark";

  return (
    <div className={`overflow-hidden ${isDark ? "" : "py-16 bg-white"}`}>
      <div
        className={`container mx-auto ${
          isDark ? "px-0" : "px-4 sm:px-6 lg:px-8"
        }`}
      >
        {!isDark && (
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Clients Work With
          </h2>
        )}

        {/* Infinite scrolling logo container */}
        <div className={`mx-auto relative ${isDark ? "w-full" : "w-3/4"}`}>
          <div className="flex overflow-hidden">
            {/* First set of logos */}
            <div className="flex animate-marquee whitespace-nowrap">
              {LOGOS.map((logo, i) => (
                <div
                  key={i}
                  className={`mx-4 w-24 h-12 flex items-center justify-center ${
                    isDark ? "filter brightness-0 invert opacity-80" : ""
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={40}
                    className="object-contain max-h-full"
                  />
                </div>
              ))}
            </div>

            {/* Second set of logos */}
            <div className="flex animate-marquee whitespace-nowrap">
              {LOGOS.map((logo, i) => (
                <div
                  key={`dup-${i}`}
                  className={`mx-4 w-24 h-12 flex items-center justify-center ${
                    isDark ? "filter brightness-0 invert opacity-80" : ""
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={40}
                    className="object-contain max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
