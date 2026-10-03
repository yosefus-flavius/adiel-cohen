import { AboutSection } from "@/components/ui/about-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Hero } from "@/components/ui/hero";
import { LatestBlogs } from "@/components/ui/latest-blogs";
import { LatestBlogsSkeleton } from "@/components/ui/latest-blogs-skeleton";
import StepsSections from "@/components/ui/stpes-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutSection />
      <StepsSections/>
      <TestimonialsSection />
      <ContactSection />
      <Suspense fallback={<LatestBlogsSkeleton />}>
        <LatestBlogs />
      </Suspense>
    </main>
  );
}
