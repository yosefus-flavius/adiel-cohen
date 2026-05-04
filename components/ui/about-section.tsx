"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { aboutInfo } from "@/lib/data/about";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Column - Original Design */}
          <FadeIn className="relative ">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Background Image */}
              <div className="absolute top-4 right-4 max-w-[80vw] w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={aboutInfo.backImage}
                  alt=""
                  fill
                  className="object-cover opacity-60"
                />
              </div>

              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden ">
                <Image
                  src={aboutInfo.image}
                  alt={aboutInfo.title}
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Content Column - Cleaner Design */}
          <div className="order-1 lg:order-2">
            <StaggerContainer className="space-y-5" staggerDelay={0.1}>
              <StaggerItem>
                <div className="flex items-center gap-3 mb-3 mt-6 md:mt-0">
                  <div className="w-8 h-0.5 bg-[var(--color-brand-gold)]" />
                  <span className="text-sm font-semibold text-[var(--color-brand-gold)] uppercase tracking-wider">
                    אודות
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                  {aboutInfo.title}
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="text-slate-600 leading-relaxed">
                  {aboutInfo.content}
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="border-r-2 border-[var(--color-brand-gold)] pr-4">
                  <p className="text-slate-600 text-sm italic">
                    {aboutInfo.vision}
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <p className="text-slate-600 leading-relaxed">
                  {aboutInfo.experience}
                </p>
              </StaggerItem>

              <StaggerItem>
                <Image
                  src={aboutInfo.unionImage}
                  alt="אישור לשכת יועצי המשכנתאות"
                  width={240}
                  height={70}
                  className="opacity-80"
                />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
