import { HomeHero } from "@/components/HomeHero";
import { HomeFeatureBlocks } from "@/components/HomeFeatureBlocks";
import { FeaturedPrograms } from "@/components/FeaturedPrograms";
import { StaffAssurances } from "@/components/StaffAssurances";
import { Testimonials } from "@/components/Testimonials";
import { Faqs } from "@/components/Faqs";

import { getAllItems } from "@/lib/getItems";

export default function HomePage() {
  const faqs = getAllItems("faqs");

  return (
    <>
      <HomeHero />
      {/* Gradient background transition */}
      <div className="w-full h-40 sm:h-48 xl:h-52 bg-gradient-to-b from-purple-50 to-yellow-100" />

      <HomeFeatureBlocks />
      <StaffAssurances />
      <FeaturedPrograms />
      <Testimonials />
      <Faqs faqs={faqs} />
    </>
  );
}
