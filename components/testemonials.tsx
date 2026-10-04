import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import AnimatedSection from "./animated-component";

const testimonials = [
   {
      name: "יוסי מ.",
      text: "הורדנו את ההחזר החודשי ב-1,200 ₪ תוך שבועיים! לא האמנתי שזה אפשרי עד שעדיאל הראה לי את המספרים.",
   },
   {
      name: "מיכל ר.",
      text: "חשבתי שהמשכנתא שלי בסדר, המדריך פתח לי את העיניים. חסכנו מעל 180,000 ₪ על פני התקופה.",
   },
   {
      name: "אבי ד.",
      text: "תהליך מקצועי ומהיר. עדיאל הסביר הכל בשפה פשוטה ועזר לנו לקבל תנאים הרבה יותר טובים.",
   },
];

const Testimonials = () => (
   <section className="bg-background py-16">
      <div className="container mx-auto px-4">
         <AnimatedSection>
            <h2 className="mb-12 text-center text-2xl font-black md:text-4xl">
               מה אומרים <span className="text-primary">הלקוחות שלנו</span>
            </h2>
         </AnimatedSection>
         <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
               <AnimatedSection key={i} delay={i * 0.15}>
                  <Card className="h-full border-primary/20 bg-secondary transition-all hover:border-primary/40 hover:shadow-[0_0_20px_hsl(43_76%_52%/0.1)]">
                     <CardContent className="flex h-full flex-col p-6">
                        <div className="mb-3 flex gap-1">
                           {Array.from({ length: 5 }).map((_, j) => (
                              <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                           ))}
                        </div>
                        <p className="mb-4 flex-1 text-base leading-relaxed text-muted-foreground">
                           "{t.text}"
                        </p>
                        <span className="text-sm font-bold text-primary">— {t.name}</span>
                     </CardContent>
                  </Card>
               </AnimatedSection>
            ))}
         </div>
      </div>
   </section>
);

export default Testimonials;
