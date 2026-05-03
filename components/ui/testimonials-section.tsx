"use client";

import { testimonials } from "@/lib/data/testimonials";
import { Star } from "lucide-react";
import Image from "next/image";
import { Card } from "./card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            מה לקוחות אומרים
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            הלקוחות שלי הם הביטוי האמיתי להצלחה
          </p>
        </FadeIn>

        {/* Testimonials Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial._id}>
              <Card className="h-full bg-slate-50 border-0 p-6 shadow-sm">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < testimonial.rating 
                          ? "fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" 
                          : "fill-gray-200 text-gray-200"
                      }`} 
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="relative rounded-full overflow-hidden w-10 h-10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 text-sm">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-slate-100">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Google Reviews Section */}
        <FadeIn delay={0.4} className="mt-16">
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              ביקורות בגוגל
            </h3>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.5321892301126!2d34.81554708484018!3d31.89213468124825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x62257a41eb25afe5%3A0xac633c205ec1ae57!2z16LXk9eZ15DXnCDXm9eU158g15nXoteV16Ug157Xqdeb16DXqteQ15XXqg!5e0!3m2!1siw!2sin!4v1766634305060!5m2!1siw!2sin" 
              className="w-full border-0" 
              width="100%" 
              height="350" 
              title="ביקורות בגוגל"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
