import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import BrandStory from "@/components/BrandStory";
import ServicesScroll from "@/components/ServicesScroll";
import FleetPreview from "@/components/FleetPreview";
import DestinationStory from "@/components/DestinationStory";
import DestinationCards from "@/components/DestinationCards";
import WhyHK from "@/components/WhyHK";
import SegmentSections from "@/components/SegmentSections";
import { ReviewsSection, InstagramSection, FinalCTA } from "@/components/ReviewsInstaCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BrandStory />
      <ServicesScroll />
      <FleetPreview />
      <DestinationStory />
      <DestinationCards />
      <WhyHK />
      <SegmentSections />
      <ReviewsSection />
      <InstagramSection />
      <FinalCTA />
    </>
  );
}
