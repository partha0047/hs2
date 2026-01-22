import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeatureGrid } from "@/components/feature-grid";
import { PropertyCards } from "@/components/property-cards";
import { FAQSection } from "@/components/faq-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/src/content/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation links={siteConfig.navLinks} />
      <HeroSection />
      <FeatureGrid features={siteConfig.features} />
      <PropertyCards properties={siteConfig.properties} />
      <FAQSection faqs={siteConfig.faqs} />
      <GalleryGrid images={siteConfig.galleryImages} />
      <Footer />
    </div>
  );
}
