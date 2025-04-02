import HeroSection from '@/components/home/HeroSection';
import OurApproachSection from '@/components/home/OurApproachSection';
import ContactSection from '@/components/home/ContactSection';
import AITransformation from '@/components/home/AITransformation';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AITransformation />
      <OurApproachSection />
      <ContactSection />
    </>
  );
}
