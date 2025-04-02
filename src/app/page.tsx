import HeroSection from '@/components/home/HeroSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import OurApproachSection from '@/components/home/OurApproachSection';
import ContactSection from '@/components/home/ContactSection';
import AITransformation from '@/components/home/AITransformation';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <AITransformation />
      <OurApproachSection />
      <ContactSection />
    </>
  );
}
