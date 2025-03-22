import HeroSection from '@/components/home/HeroSection';
import PartnersSection from '@/components/home/PartnersSection';
import CompanyIntroSection from '@/components/home/CompanyIntroSection';
import BetterThanOffShelfSection from '@/components/home/BetterThanOffShelfSection';
import OurApproachSection from '@/components/home/OurApproachSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      {/* <CompanyIntroSection /> */}
      <BetterThanOffShelfSection />
      <OurApproachSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
