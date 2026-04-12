"use client"
import { useState, useEffect } from "react";
// import { supabase } from "@/integrations/supabase/client";
import AnimatedSection from "@/components/animated-component";
import FloatingCTA from "@/components/floating-cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowDown, BadgePercent, CheckCircle2, ChevronDown, Clock, HelpCircle, Shield, TrendingDown, Users } from "lucide-react";
import { toast } from "sonner";
// import UrgencyTimer from "@/components/UrgencyTimer";
import Testimonials from "@/components/testemonials";
import Image from "next/image";
import Script from "next/script";

const Index = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [consent, setConsent] = useState(false);

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
      // Add dark class to html element when on this page
      document.documentElement.classList.add('dark');
      
      // Remove it when leaving
      return () => {
         document.documentElement.classList.remove('dark');
      };
   }, []);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim() || !email.trim()) {
         toast.error("נא למלא את כל השדות");
         return;
      }
      if (!consent) {
         toast.error("נא לאשר קבלת תכנים מקצועיים");
         return;
      }

      setIsSubmitting(true);
      try {
         // Submission logic
      } catch (err) {
         console.error('Submit error:', err);
         toast.error("אירעה שגיאה, נסו שוב מאוחר יותר");
      } finally {
         setIsSubmitting(false);
      }
   };

   const scrollToForm = () => {
      document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">

         {/* Hero Section */}
         <section className="relative overflow-hidden py-20 md:py-32">
            {/* Premium Glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(43_76%_52%/0.15),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,hsl(43_76%_52%/0.1),transparent_50%)]" />
            
            <div className="container relative mx-auto px-4">
               <div className="mx-auto max-w-4xl text-center">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5 }}
                     className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
                  >
                     רפורמת המשכנתאות 2025: המדריך המלא המעודכן
                  </motion.div>
                  
                  <motion.h1
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7 }}
                     className="mb-8 text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl"
                  >
                     האם הבנק מרוויח{" "}
                     <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                        על חשבונכם?
                     </span>
                  </motion.h1>
                  
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7, delay: 0.2 }}
                     className="mb-6 text-xl font-bold md:text-3xl text-primary/90"
                  >
                     מעל 60% מהלווים משלמים ביוקר כי הם לא בודקים את המשכנתא שלהם!
                  </motion.p>
                  
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7, delay: 0.4 }}
                     className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground/80 md:text-xl leading-relaxed"
                  >
                     העולם הכלכלי השתנה. גלו איך לחסוך עשרות אלפי שקלים בתהליך דיגיטלי פשוט ומהיר, בלי לצאת מהבית.
                  </motion.p>
                  
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.6 }}
                     className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                  >
                     <Button
                        size="lg"
                        onClick={scrollToForm}
                        className="group relative h-14 rounded-full px-10 text-lg font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105"
                     >
                        שלחו לי את המדריך בחינם!
                        <ArrowDown className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                     </Button>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="h-4 w-4 text-primary" />
                        <span>מאובטח ודיסקרטי לחלוטין</span>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Pain Points Section */}
         <section className="border-y border-primary/10 bg-secondary/30 py-20">
            <div className="container mx-auto px-4">
               <AnimatedSection>
                  <h2 className="mb-16 text-center text-3xl font-black md:text-5xl">
                     4 סימני אזהרה שהמשכנתא שלכם{" "}
                     <span className="text-primary">עולה לכם ביוקר</span>
                  </h2>
               </AnimatedSection>
               <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                  {[
                     { icon: TrendingDown, text: 'עברה שנה והיתרה כמעט לא ירדה? הכסף שלכם הולך רק לריביות.' },
                     { icon: AlertTriangle, text: 'יש לכם רכיב צמוד מדד? האינפלציה עלולה להקפיץ לכם את ההחזר.' },
                     { icon: Shield, text: 'לקחתם מסלול פריים לפני 2022? אתם כנראה משלמים מחיר גבוה מדי.' },
                     { icon: AlertTriangle, text: 'מסלול משתנה? אתם חשופים לקפיצה פתאומית בריבית כל שנתיים.' },
                  ].map((item, i) => (
                     <AnimatedSection key={i} delay={i * 0.1}>
                        <Card className="h-full border-primary/10 bg-secondary/50 text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-[0_0_20px_hsl(43_76%_52%/0.05)]">
                           <CardContent className="flex items-start gap-5 p-8">
                              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                 <item.icon className="h-6 w-6 text-primary" />
                              </div>
                              <p className="text-lg leading-relaxed">{item.text}</p>
                           </CardContent>
                        </Card>
                     </AnimatedSection>
                  ))}
               </div>
            </div>
         </section>

         {/* What's Inside Section */}
         <section className="py-24">
            <div className="container mx-auto px-4">
               <AnimatedSection>
                  <h2 className="mb-16 text-center text-3xl font-black md:text-5xl">
                     מה תמצאו <span className="text-primary">במדריך?</span>
                  </h2>
               </AnimatedSection>
               <div className="mx-auto grid max-w-3xl gap-6">
                  {[
                     "איך לבצע מיחזור דיגיטלי בשבועיים בלבד (במקום 3 חודשים!)",
                     'השיטה לשמירה על מסלולים טובים דרך "משכנתא בדרגה שנייה"',
                     "איך לגרום לבנקים להילחם עליכם כדי לשפר תנאים",
                  ].map((text, i) => (
                     <AnimatedSection key={i} delay={i * 0.12}>
                        <div className="flex items-start gap-5 rounded-2xl border border-primary/10 bg-secondary/20 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-secondary/30">
                           <CheckCircle2 className="mt-1 h-7 w-7 shrink-0 text-primary" />
                           <p className="text-lg md:text-xl font-medium">{text}</p>
                        </div>
                     </AnimatedSection>
                  ))}
               </div>
            </div>
         </section>

         {/* About Section */}
         <section className="border-y border-primary/10 bg-secondary/30 py-24">
            <div className="container mx-auto px-4">
               <AnimatedSection>
                  <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 md:flex-row">
                     <div className="shrink-0">
                        <div className="relative">
                           <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-2xl" />
                           <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-2xl">
                              <Image
                                 src={'/adiel-cohen.jpg'}
                                 alt="עדיאל כהן - יועץ משכנתאות"
                                 width={280}
                                 height={280}
                                 className="h-72 w-72 object-cover object-top"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="text-center md:text-right">
                        <h2 className="mb-6 text-3xl font-black md:text-4xl">
                           <span className="text-primary">עדיאל כהן</span> | יועץ משכנתאות
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                           אני עדיאל כהן, יועץ משכנתאות וחבר בהתאחדות יועצי המשכנתאות. לאחר שליוויתי עשרות לקוחות בתהליכי רכישה ומיחזור משכנתא, החלטתי לחשוף את כל הסודות שהבנקים לא רוצים שתדעו — ולהנגיש אותם בממדריך מקצועי, ברור ופשוט ליישום, שיעזור לכם לחסוך עשרות אלפי שקלים.
                        </p>
                     </div>
                  </div>
               </AnimatedSection>
            </div>
         </section>

         {/* Testimonials */}
         <Testimonials />

         {/* Social Proof Numbers */}
         <section className="border-y border-primary/10 bg-secondary/30 py-24">
            <div className="container mx-auto px-4">
               <AnimatedSection>
                  <h2 className="mb-16 text-center text-3xl font-black md:text-5xl">
                     המספרים <span className="text-primary">מדברים</span>
                  </h2>
               </AnimatedSection>
               <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
                  {[
                     { number: "₪250,000", label: "חיסכון ממוצע ללקוח", icon: BadgePercent },
                     { number: "14 יום", label: "זמן ממוצע לסיום תהליך מיחזור", icon: Clock },
                     { number: "100+", label: "לקוחות מרוצים שכבר חסכו", icon: Users },
                  ].map((stat, i) => (
                     <AnimatedSection key={i} delay={i * 0.15}>
                        <div className="flex flex-col items-center rounded-3xl border border-primary/10 bg-secondary/50 p-10 text-center transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
                           <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 shadow-inner">
                              <stat.icon className="h-8 w-8 text-primary" />
                           </div>
                           <span className="mb-2 text-4xl font-black text-primary md:text-5xl">{stat.number}</span>
                           <span className="text-lg text-muted-foreground font-medium">{stat.label}</span>
                        </div>
                     </AnimatedSection>
                  ))}
               </div>
            </div>
         </section>

         {/* FAQ Section */}
         <section className="py-24">
            <div className="container mx-auto px-4">
               <AnimatedSection>
                  <h2 className="mb-16 text-center text-3xl font-black md:text-5xl">
                     שאלות <span className="text-primary">נפוצות</span>
                  </h2>
               </AnimatedSection>
               <div className="mx-auto grid max-w-3xl gap-5">
                  {[
                     {
                        q: "מה זה בכלל מיחזור משכנתא?",
                        a: "מיחזור משכנתא הוא תהליך שבו לוקחים הלוואה חדשה בתנאים טובים יותר כדי לסגור את ההלוואה הקיימת. התוצאה? הורדת ההחזר החודשי או קיצור תקופת ההלוואה — ובשורה התחתונה, חיסכון של עשרות אלפי שקלים.",
                     },
                     {
                        q: "למה כדאי לי לעשות מיחזור דווקא עכשיו?",
                        a: "רפורמת 2025 שינתה את כללי המשחק. התחרות בין הבנקים גדלה, התהליך הפך דיגיטלי ומהיר, והריביות משתנות כל הזמן. מי שבודק עכשיו — יכול לתפוס תנאים משמעותית טובים יותר.",
                     },
                     {
                        q: "כמה עולה המדריך?",
                        a: "המדריך הוא בחינם לגמרי, בלי התחייבות. אם תרצו ליווי אישי בתהליך — נדבר על זה בשיחת היכרות קצרה, גם היא ללא עלות.",
                     },
                     {
                        q: "האם המדריך מתאים גם למי שרק לקח משכנתא?",
                        a: "בהחלט! גם אם לקחתם משכנתא לפני חודשים בודדים, המדריך יעזור לכם להבין אם קיבלתם את התנאים הטובים ביותר — ומה לעשות אם לא.",
                     },
                  ].map((faq, i) => (
                     <AnimatedSection key={i} delay={i * 0.08}>
                        <details className="group rounded-2xl border border-primary/10 bg-secondary/20 transition-all hover:border-primary/30">
                           <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-bold">
                              <span className="flex items-center gap-4">
                                 <HelpCircle className="h-6 w-6 shrink-0 text-primary" />
                                 {faq.q}
                              </span>
                              <ChevronDown className="h-6 w-6 shrink-0 text-primary transition-transform group-open:rotate-180" />
                           </summary>
                           <p className="px-6 pb-6 pr-14 text-lg leading-relaxed text-muted-foreground/90">{faq.a}</p>
                        </details>
                     </AnimatedSection>
                  ))}
               </div>
            </div>
         </section>

         {/* Lead Capture Form */}
         <section id="lead-form" className="border-t border-primary/10 bg-secondary/30 py-24">
            <div className="container mx-auto px-4 flex justify-center">
               {isMounted && (
                  <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-primary/20 bg-white p-2 shadow-2xl shadow-primary/10">
                     <iframe width="100%" height="500" src="https://embed.vp4.me/LandingPage,d27a1818-1249-4544-b00a-cba4a4d0b754,605750.aspx?r=1009" frameBorder="0" allowFullScreen className="rounded-2xl" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation allow-top-navigation-by-user-activation"></iframe>
                     <Script id="smoove-embed" src="https://embed.vp4.me/core/embd.min.js?v=20260331172123" strategy="afterInteractive" />
                  </div>
               )}
            </div>
         </section>
         {/* Floating CTA */}
         <FloatingCTA />
      </div>
   );
};

export default Index;
