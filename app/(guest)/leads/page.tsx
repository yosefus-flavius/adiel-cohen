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
         // const [smooveResult, webhookResult] = await Promise.all([
         //   supabase.functions.invoke('submit-lead', {
         //     body: { name: name.trim(), email: email.trim() },
         //   }),
         //   fetch('https://hook.eu1.make.com/vatn1okjafrxjc3atvz0jmmhysa23rpb', {
         //     method: 'POST',
         //     headers: { 'Content-Type': 'application/json' },
         //     body: JSON.stringify({ name: name.trim(), email: email.trim() }),
         //   }),
         // ]);

         // if (smooveResult.error) throw smooveResult.error;

         // toast.success("!המדריך נשלח אליך בהצלחה");
         // setName("");
         // setEmail("");
         // setConsent(false);
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
      <div className="min-h-screen dark bg-secondary text-secondary-foreground ">

         {/* Hero Section */}
         <section className="relative overflow-hidden py-16 md:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43_76%_52%/0.08),transparent_70%)]" />
            <div className="container relative mx-auto px-4">
               <div className="mx-auto max-w-3xl text-center">
                  <motion.h1
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7 }}
                     className="mb-6 text-3xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl"
                  >
                     האם הבנק מרוויח{" "}
                     <span className="text-primary">על חשבונכם?</span>
                  </motion.h1>
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7, delay: 0.2 }}
                     className="mb-4 text-xl font-bold text-primary md:text-2xl"
                  >
                     מעל 60% מהלווים משלמים ביוקר כי הם לא בודקים את המשכנתא שלהם!
                  </motion.p>
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7, delay: 0.4 }}
                     className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg"
                  >
                     העולם הכלכלי השתנה עם רפורמת 2025. הורד עכשיו את המדריך המלא של עדיאל כהן וגלה איך לחסוך עשרות אלפי שקלים בתהליך דיגיטלי פשוט.
                  </motion.p>
                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: 0.6 }}
                  >
                     <Button
                        size="lg"
                        onClick={scrollToForm}
                        className="group rounded-full px-10 py-6 text-lg font-bold shadow-[0_0_30px_hsl(43_76%_52%/0.3)] transition-all hover:shadow-[0_0_50px_hsl(43_76%_52%/0.5)]"
                     >
                        שלחו לי את המדריך בחינם!
                        <ArrowDown className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                     </Button>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Pain Points Section */}
         <section className="border-y border-primary/10 bg-background/5 py-16">
            <div className="container mx-auto px-4">
               <AnimatedSection>
                  <h2 className="mb-12 text-center text-2xl font-black md:text-4xl">
                     4 סימני אזהרה שהמשכנתא שלכם{" "}
                     <span className="text-primary">עולה לכם ביוקר</span>
                  </h2>
               </AnimatedSection>
               <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                  {[
                     { icon: TrendingDown, text: 'עברה שנה והיתרה כמעט לא ירדה? הכסף שלכם הולך רק לריביות.' },
                     { icon: AlertTriangle, text: 'יש לכם רכיב צמוד מדד? האינפלציה עלולה להקפיץ לכם את ההחזר.' },
                     { icon: Shield, text: 'לקחתם מסלול פריים לפני 2022? אתם כנראה משלמים מחיר גבוה מדי.' },
                     { icon: AlertTriangle, text: 'מסלול משתנה? אתם חשופים לקפיצה פתאומית בריבית כל שנתיים.' },
                  ].map((item, i) => (
                     <AnimatedSection key={i} delay={i * 0.1}>
                        <Card className="h-full border-primary/20 bg-secondary text-secondary-foreground transition-all hover:border-primary/40 hover:shadow-[0_0_20px_hsl(43_76%_52%/0.1)]">
                           <CardContent className="flex items-start gap-4 p-6">
                              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                 <item.icon className="h-5 w-5 text-primary" />
                              </div>
                              <p className="text-base leading-relaxed md:text-lg">{item.text}</p>
                           </CardContent>
                        </Card>
                     </AnimatedSection>
                  ))}
               </div>
            </div>
         </section>

         {/* What's Inside Section */}
         <section className="py-16">
            <div className="container mx-auto px-4">
               <AnimatedSection>
                  <h2 className="mb-12 text-center text-2xl font-black md:text-4xl">
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
                        <div className="flex items-start gap-4 rounded-xl border border-primary/10 bg-secondary p-5 transition-all hover:border-primary/30">
                           <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                           <p className="text-base md:text-lg">{text}</p>
                        </div>
                     </AnimatedSection>
                  ))}
               </div>
            </div>
         </section>

         {/* About Section */}
         <section className="border-y border-primary/10 bg-background/5 py-16">
            <div className="container mx-auto px-4">
               <AnimatedSection>
                  <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row">
                     <div className="shrink-0">
                        <div className="overflow-hidden rounded-2xl border-2 border-primary/30 shadow-[0_0_30px_hsl(43_76%_52%/0.15)]">
                           <Image
                              src={'/adiel-cohen.jpg'}
                              alt="עדיאל כהן - יועץ משכנתאות"
                              width={240}
                              height={240}
                              className="h-60 w-60 object-cover object-top"
                           />
                        </div>
                     </div>
                     <div>
                        <h2 className="mb-4 text-2xl font-black md:text-3xl">
                           <span className="text-primary">עדיאל כהן</span> | יועץ משכנתאות
                        </h2>
                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                           אני עדיאל כהן, יועץ משכנתאות וחבר בהתאחדות יועצי המשכנתאות. לאחר שליוויתי עשרות לקוחות בתהליכי רכישה ומיחזור משכנתא, החלטתי לחשוף את כל הסודות שהבנקים לא רוצים שתדעו — ולהנגיש אותם במדריך מקצועי, ברור ופשוט ליישום, שיעזור לכם לחסוך עשרות אלפי שקלים.
                        </p>
                     </div>
                  </div>
               </AnimatedSection>
            </div>
         </section>

         {/* Testimonials */}
         <Testimonials />

         {/* Social Proof Numbers */}
         <section className="border-y border-primary/10 bg-background/5 py-16">
            <div className="container mx-auto px-4">
               <AnimatedSection>
                  <h2 className="mb-12 text-center text-2xl font-black md:text-4xl">
                     המספרים <span className="text-primary">מדברים</span>
                  </h2>
               </AnimatedSection>
               <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
                  {[
                     { number: "₪250,000", label: "חיסכון ממוצע ללקוח", icon: BadgePercent },
                     { number: "14 יום", label: "זמן ממוצע לסיום תהליך מיחזור", icon: Clock },
                     { number: "100+", label: "לקוחות מרוצים שכבר חסכו", icon: Users },
                  ].map((stat, i) => (
                     <AnimatedSection key={i} delay={i * 0.15}>
                        <div className="flex flex-col items-center rounded-2xl border border-primary/20 bg-secondary p-8 text-center transition-all hover:border-primary/40 hover:shadow-[0_0_25px_hsl(43_76%_52%/0.1)]">
                           <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                              <stat.icon className="h-7 w-7 text-primary" />
                           </div>
                           <span className="mb-2 text-3xl font-black text-primary md:text-4xl">{stat.number}</span>
                           <span className="text-base text-muted-foreground">{stat.label}</span>
                        </div>
                     </AnimatedSection>
                  ))}
               </div>
            </div>
         </section>

         {/* FAQ Section */}
         <section className="py-16">
            <div className="container mx-auto px-4">
               <AnimatedSection>
                  <h2 className="mb-12 text-center text-2xl font-black md:text-4xl">
                     שאלות <span className="text-primary">נפוצות</span>
                  </h2>
               </AnimatedSection>
               <div className="mx-auto grid max-w-3xl gap-4">
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
                        <details className="group rounded-xl border border-primary/10 bg-secondary transition-all hover:border-primary/30">
                           <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-bold md:text-lg">
                              <span className="flex items-center gap-3">
                                 <HelpCircle className="h-5 w-5 shrink-0 text-primary" />
                                 {faq.q}
                              </span>
                              <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                           </summary>
                           <p className="px-5 pb-5 pr-13 text-base leading-relaxed text-muted-foreground">{faq.a}</p>
                        </details>
                     </AnimatedSection>
                  ))}
               </div>
            </div>
         </section>

         {/* Lead Capture Form */}
         <section id="lead-form" className="border-t border-primary/10 bg-background/5 py-16">
            <div className="container mx-auto px-4 flex justify-center">
               {/* <AnimatedSection>
                  <div className="mx-auto max-w-md">
                     <Card className="border-primary/30 bg-secondary shadow-[0_0_40px_hsl(43_76%_52%/0.1)]">
                        <CardContent className="p-8">
                           <h2 className="mb-2 text-center text-2xl font-black text-secondary-foreground md:text-3xl">
                              קבלו את המדריך <span className="text-primary">בחינם!</span>
                           </h2>
                           <p className="mb-8 text-center text-muted-foreground">
                              מלאו את הפרטים וקבלו את המדריך ישירות למייל
                           </p>
                           <form onSubmit={handleSubmit} className="space-y-5">
                              <div>
                                 <Input
                                    placeholder="שם מלא"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="h-12 border-primary/20 bg-background/10 text-right text-base placeholder:text-muted-foreground focus:border-primary"
                                 />
                              </div>
                              <div>
                                 <Input
                                    type="email"
                                    placeholder="אימייל"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-12 border-primary/20 bg-background/10 text-right text-base placeholder:text-muted-foreground focus:border-primary"
                                    dir="ltr"
                                 />
                              </div>
                              <div className="flex items-start gap-3">
                                 <Checkbox
                                    id="consent"
                                    checked={consent}
                                    onCheckedChange={(checked) => setConsent(checked === true)}
                                    className="mt-1 border-primary/40 data-[state=checked]:bg-primary"
                                 />
                                 <label htmlFor="consent" className="cursor-pointer text-sm leading-relaxed text-muted-foreground">
                                    אני מאשר קבלת תכנים מקצועיים ודיוור מעדיאל כהן
                                 </label>
                              </div>
                              <Button
                                 type="submit"
                                 size="lg"
                                 disabled={isSubmitting}
                                 className="w-full rounded-full py-6 text-lg font-bold shadow-[0_0_20px_hsl(43_76%_52%/0.3)] transition-all hover:shadow-[0_0_40px_hsl(43_76%_52%/0.5)]"
                              >
                                 {isSubmitting ? "שולח..." : "שלחו לי את המדריך בחינם!"}
                              </Button>
                           </form>
                        </CardContent>
                     </Card>
                  </div>
               </AnimatedSection> */}
               {isMounted && (
                  <>
                     <iframe width="536" height="270" style={{ maxWidth: '100%' }} src="https://embed.vp4.me/LandingPage,d27a1818-1249-4544-b00a-cba4a4d0b754,605750.aspx?r=1009" frameBorder="0" allowFullScreen className="embediframe" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation allow-top-navigation-by-user-activation"></iframe>
                     <Script id="smoove-embed" src="https://embed.vp4.me/core/embd.min.js?v=20260331172123" strategy="afterInteractive" />
                  </>
               )}
            </div>
         </section>
         {/* Floating CTA */}
         <FloatingCTA />
      </div>
   );
};

export default Index;
