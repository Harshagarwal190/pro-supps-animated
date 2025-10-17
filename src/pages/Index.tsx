import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { BrandStorySection } from "@/components/BrandStorySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { SocialFeedSection } from "@/components/SocialFeedSection";
import { FAQSection } from "@/components/FAQSection";
import { OffersSection } from "@/components/OffersSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <OffersSection />
      <FeaturesSection />
      <ProductsSection />
      <BeforeAfterSection />
      <BrandStorySection />
      <TestimonialsSection />
      <BlogSection />
      <SocialFeedSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
