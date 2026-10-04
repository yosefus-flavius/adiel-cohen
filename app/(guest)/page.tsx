import { AboutSection } from "@/components/ui/about-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Hero } from "@/components/ui/hero";
import { LatestBlogs } from "@/components/ui/latest-blogs";
import { LatestBlogsSkeleton } from "@/components/ui/latest-blogs-skeleton";
import { QuickActions } from "@/components/ui/quick-actions";
import StepsSections from "@/components/ui/stpes-section";
import { TestimonialsGoogleSection } from "@/components/ui/testimonials-google-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { getGoogleReviews } from "@/lib/google-reviews";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function Home() {
  const googleReviews = await getGoogleReviews();

  return (
    <main className="flex flex-col">
      <Hero />
      <QuickActions />
      <AboutSection />
      <StepsSections/>
      {googleReviews ? (
        <TestimonialsGoogleSection data={googleReviews} />
      ) : (
        <TestimonialsSection />
      )}
      <ContactSection />
      <Suspense fallback={<LatestBlogsSkeleton />}>
        <LatestBlogs />
      </Suspense>
    </main>
  );
}
