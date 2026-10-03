"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { FileText, CheckCircle, Handshake, PenSquare, Shield, PartyPopper, ArrowLeft } from "lucide-react";

interface MortgageStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: MortgageStep[] = [
  {
    id: "docs",
    number: "01",
    title: "איסוף מסמכים",
    description: "בשלב זה תישלח אליכם רשימת מסמכים ראשונית ע\"מ שנוכל להגיש בקשה בבנקים השונים.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    id: "approval",
    number: "02",
    title: "קבלת אישור עקרוני",
    description: "בשלב זה יתקבל אישור עקרוני מהבנקים שאליהם הוגשה הבקשה.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    id: "negotiation",
    number: "03",
    title: "משא ומתן",
    description: "בשלב זה יועץ המשכנתאות מנהל מו\"מ עם הבנקים ע\"מ שנקבל את ההצעה הטובה ביותר.",
    icon: <Handshake className="w-6 h-6" />,
  },
  {
    id: "signing",
    number: "04",
    title: "חתימות",
    description: "בשעה טובה תחתמו על המשכנתא המצוינת שלכם!",
    icon: <PenSquare className="w-6 h-6" />,
  },
  {
    id: "collateral",
    number: "05",
    title: "בטחונות",
    description: "על מנת שהכסף יעבור לחשבונכם, הבנק דורש שמאי, ביטוח ועוד.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    id: "success",
    number: "06",
    title: "מזל טוב!",
    description: "יש לכם משכנתא. תהנו מהבית החדש שלכם!",
    icon: <PartyPopper className="w-6 h-6" />,
  }
];

const StepsSections = () => {
  return (
    <section id="steps" className="section-padding bg-[hsl(40,33%,96%)] overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            השלבים ללקיחת משכנתא
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            ליווי מקצועי ואישי עד לשלב החתימה בבנק
          </p>
        </FadeIn>

        {/* Steps Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {steps.map((step, index) => (
            <StaggerItem key={step.id}>
              <Card className="relative h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                {/* Step Number Badge */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--color-brand-gold)]/10 transform rotate-45 translate-x-8 -translate-y-14" />
                  <span className="absolute top-3 right-3 text-2xl font-bold text-[var(--color-brand-gold-text)]">
                    {step.number}
                  </span>
                </div>

                <CardHeader className="pt-12 pb-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-gold)]/10 flex items-center justify-center text-[var(--color-brand-gold)] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-h4 text-slate-900 text-right">
                    {step.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-body-sm text-slate-600 text-right leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.6} className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
          >
            התחל את התהליך עכשיו
            <ArrowLeft className="w-5 h-5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default StepsSections;