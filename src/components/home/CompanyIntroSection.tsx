'use client';

import Image from 'next/image';

export default function CompanyIntroSection() {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-[#F08742] to-[#fdcbb0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Image src="/images/logo.png" alt="Dublin Software Company" width={1000} height={1000} className="object-contain" />
        <p className="text-4xl p-12 leading-relaxed">At the Dublin Software Company, we build custom software solutions that are tailored to your business needs. We don't just build software—we eliminate inefficiency. Our custom solutions are built specifically for each client, ensuring you only pay once for powerful software.</p>
      </div>
    </section>
  );
} 