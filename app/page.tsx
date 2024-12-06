import Image from "next/image";
import { Hero } from "@/components/ui/hero";
import { AboutSection } from "@/components/ui/about-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { ContactSection } from "@/components/ui/contact-section";
import { LatestBlogs } from "@/components/ui/latest-blogs";

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
