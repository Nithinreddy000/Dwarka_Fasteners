import { HeroSection } from '@/components/home/HeroSection';
import { StatsBar } from '@/components/home/StatsBar';
import { CertificationsSection } from '@/components/home/CertificationsSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { MarqueeSection } from '@/components/home/MarqueeSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { GallerySection } from '@/components/home/GallerySection';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <CertificationsSection />
      <ProductsSection />
      <IndustriesSection />
      <MarqueeSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
