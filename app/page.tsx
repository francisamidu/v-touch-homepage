import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import NewsletterSection from "@/components/NewsletterSection";

import item1 from "@/assets/images/model-grey.webp";
import item2 from "@/assets/images/models-black.webp";
import item3 from "@/assets/images/models-socializing.webp";
import item4 from "@/assets/images/model-yellow.webp";
import { MailWarningIcon } from "lucide-react";

const portfolioItems = [
  {
    image: item1,
    title: "Grey Model",
    description: "Description for Model 1",
  },
  {
    image: item2,
    title: "Black Models",
    description: "Description for Model 2",
  },
  {
    image: item3,
    title: "Socializing Models",
    description: "Description for Model 3",
  },
  // {
  //   image: item4,
  //   title: "Yellow Model",
  //   description: "Description for Model 4",
  // },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Portfolio Preview */}
      <PortfolioPreview />

      {/* Newsletter */}
      <NewsletterSection />
    </main>
  );
}
