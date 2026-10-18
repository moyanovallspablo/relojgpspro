import Hero from "@/components/home/Hero";
import ProfileSelector from "@/components/home/ProfileSelector";
import EditorialBreak from "@/components/home/EditorialBreak";
import FeaturedWatches from "@/components/home/FeaturedWatches";
import HomeBento from "@/components/home/HomeBento";
import DuelMatcherSection from "@/components/home/DuelMatcherSection";
import QuickBuyingGuide from "@/components/home/QuickBuyingGuide";
import BeginnerGuides from "@/components/home/BeginnerGuides";
import NotAlwaysExpensiveSection from "@/components/home/NotAlwaysExpensiveSection";
import HowToChooseCTA from "@/components/home/HowToChooseCTA";
import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, DEFAULT_OPEN_GRAPH, DEFAULT_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    ...DEFAULT_OPEN_GRAPH,
    url: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeBento />
      <ProfileSelector />
      <EditorialBreak />
      <FeaturedWatches />
      <DuelMatcherSection />
      <QuickBuyingGuide />
      <BeginnerGuides />
      <NotAlwaysExpensiveSection />
      <HowToChooseCTA />
    </>
  );
}
