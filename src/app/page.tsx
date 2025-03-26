import HeroSection from '@/components/home/HeroSection';
import SecondHeroSection from '@/components/home/SecondHeroSection';
import PartnersSection from '@/components/home/PartnersSection';
import CompanyIntroSection from '@/components/home/CompanyIntroSection';
import BetterThanOffShelfSection from '@/components/home/BetterThanOffShelfSection';
import OurApproachSection from '@/components/home/OurApproachSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ContactSection from '@/components/home/ContactSection';
import AITransformationSection from '@/components/home/AITransformationSection';
import AITransformation from '@/components/home/AITransformation';

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SecondHeroSection /> */}
      {/* <PartnersSection /> */}
      <AITransformation />
      {/* <AITransformationSection /> */}
      {/* <BetterThanOffShelfSection /> */}
      <OurApproachSection />
      {/* <WhyChooseUsSection /> */}
      <ContactSection />
    </>
  );
}
