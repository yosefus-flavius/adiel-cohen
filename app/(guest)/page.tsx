import { AboutSection } from "@/components/ui/about-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Hero } from "@/components/ui/hero";
import { LatestBlogs } from "@/components/ui/latest-blogs";
import { TestimonialsSection } from "@/components/ui/testimonials-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutSection />
      <LatestBlogs />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
