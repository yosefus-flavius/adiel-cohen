"use client";

import { contactInfo } from "@/lib/data/contact";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "./card";
import Lead from "./lead";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const contactMethods = [
  {
    icon: Phone,
    title: "טלפון",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
    description: "זמין בימי עבודה",
  },
  {
    icon: Mail,
    title: "אימייל",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    description: "מענה תוך 24 שעות",
  },
  {
    icon: MapPin,
    title: "כתובת",
    value: contactInfo.address,
    href: "https://waze.com/ul?ll=31.89236134%2C34.81322765&navigate=yes",
    description: "לחץ לניווט",
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-[hsl(40,33%,96%)] overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            צור קשר
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            אשמח לעזור לך בכל שאלה או התייעצות בנושא משכנתאות
          </p>
        </FadeIn>

        {/* Contact Cards */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          staggerDelay={0.1}
        >
          {contactMethods.map((method) => (
            <StaggerItem key={method.title}>
              <a
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                <Card className="h-full bg-white border border-slate-200 hover:border-[var(--color-brand-gold)]/50 transition-colors">
                  <CardContent className="flex flex-col items-center gap-3 p-6">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-gold)]/10 flex items-center justify-center text-[var(--color-brand-gold)]">
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-medium text-slate-900 mb-1 text-sm">
                        {method.title}
                      </h3>
                      <p className="text-slate-600 font-medium">
                        {method.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Lead Form Container */}
        <FadeIn delay={0.4}>
          <div className="max-w-2xl mx-auto">
            <Lead />
          </div>
        </FadeIn>

        {/* Working Hours Note */}
        <FadeIn delay={0.5} className="mt-12">
          <div className="flex items-center justify-center gap-2 text-slate-100">
            <Clock className="w-5 h-5 text-[var(--color-brand-gold)]" />
            <span className="text-body-sm">
              שעות פעילות: ימים א'-ה' 09:00-18:00 | יום ו' 09:00-13:00
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
