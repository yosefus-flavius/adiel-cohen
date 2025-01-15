import { AboutSection } from "@/components/ui/about-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Hero } from "@/components/ui/hero";
import { LatestBlogs } from "@/components/ui/latest-blogs";
import { LatestBlogsSkeleton } from "@/components/ui/latest-blogs-skeleton";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutSection />
      <Suspense fallback={<LatestBlogsSkeleton />}>
        <LatestBlogs />
      </Suspense>
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
