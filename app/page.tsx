import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Portfolio Preview */}
      <PortfolioPreview />

      {/* Testimonials */}
      <TestimonialsSection />
    </main>
  );
}
