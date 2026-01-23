import { HeroSection } from '@/components/home/HeroSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { CertificationsSection } from '@/components/home/CertificationsSection';
import { ContactSection } from '@/components/home/ContactSection';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="products">
        <ProductsSection />
      </section>
      <section id="about">
        <WhyChooseUsSection />
      </section>
      <section id="industries">
        <IndustriesSection />
      </section>
      <CertificationsSection />
      <section id="contact">
        <ContactSection />
      </section>
      <WhatsAppButton />
    </>
  );
}
