import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CtaLink } from '@/components/ui/cta-link';
import { PageHero } from '@/components/ui/page-hero';
import { Calculator, CheckCircle, Shield, TrendingDown } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   alternates: { canonical: '/restore' },
   title: '4 סיבות לבדיקת מחזור המשכנתא שלכם היום',
   description: 'גלו מדוע חיוני לבדוק את כדאיות מחזור המשכנתא שלכם. הפחיתו את ההחזר החודשי, חסכו בריבית והתאימו את המשכנתא למצבכם הכלכלי. בדיקה חינם וללא התחייבות.',
   keywords: [
      'מחזור משכנתא',
      'ייעוץ משכנתאות',
      'חיסכון במשכנתא',
      'הפחתת ריבית משכנתא',
      'ריבית משתנה',
      'מסלול פריים',
      'צמוד למדד',
      'בדיקת כדאיות משכנתא',
   ],
   openGraph: {
      title: '4 סיבות לבדיקת מחזור המשכנתא שלכם היום',
      description: 'בדיקת כדאיות מחזור משכנתא, חינם וללא התחייבות, עם עדיאל כהן יועץ משכנתאות.',
      url: '/restore',
      type: 'article',
      locale: 'he_IL',
      siteName: 'עדיאל כהן - יועץ משכנתאות',
      images: ['/og-image.jpg'],
   },
   twitter: {
      card: 'summary_large_image',
      title: '4 סיבות לבדיקת מחזור המשכנתא שלכם היום',
      description: 'בדיקת כדאיות מחזור משכנתא, חינם וללא התחייבות.',
      images: ['/og-image.jpg'],
   },
};

type Reason = {
   icon: typeof TrendingDown;
   title: string;
   // Each point is a neutral "problem" box followed by a gold "opportunity" box
   problem?: { label: string; text: string };
   opportunity?: { label: string; text: string };
   intro?: string;
   cases?: { title: string; text: string; highlight?: boolean }[];
};

const reasons: Reason[] = [
   {
      icon: TrendingDown,
      title: 'הפוטנציאל לחיסכון במסלול הריבית המשתנה',
      problem: {
         label: 'האתגר:',
         text: 'למעלה מ-50% מהמשכנתאות החדשות כוללות רכיב ריבית משתנה (המתעדכן כל 3 או 5 שנים). במועד העדכון הקרוב, ה"עוגן" של המסלול עלול להתייקר משמעותית.',
      },
      opportunity: {
         label: 'ההזדמנות:',
         text: 'ניתן להשיג כיום מרווחים נמוכים יותר על העוגן. מחזור מאפשר להחליף את המסלול או לבצע מו"מ מחדש על תנאי ההלוואה.',
      },
   },
   {
      icon: Calculator,
      title: 'הוזלת המרווח במסלול הפריים',
      problem: {
         label: 'הבדיקה הנדרשת:',
         text: 'מסלול הפריים הוא מרכיב נפוץ, אך המרווח שקיבלתם בעבר עלול להיות יקר ביחס לתנאי השוק התחרותיים היום.',
      },
      opportunity: {
         label: 'התועלת הישירה:',
         text: 'בדיקה מאפשרת להוזיל את המרווח באופן נקודתי, ובכך להפחית את עלות הריבית על רכיב זה במשכנתא ולצמצם את ההחזר.',
      },
   },
   {
      icon: Shield,
      title: 'טיפול בחשיפה למדד: הקרן שגדלה',
      problem: {
         label: 'הסיכון האינפלציוני:',
         text: 'במסלולים הצמודים למדד בריבית גבוהה, יתרת החוב שלכם גדלה בהתאם לעליית המדד, גם אם אתם משלמים כסדרם.',
      },
      opportunity: {
         label: 'הפתרון המקצועי:',
         text: 'באמצעות מחזור, ניתן לצמצם את החשיפה למדד על ידי המרת חלק מהמסלול למסלולים שאינם צמודים.',
      },
   },
   {
      icon: CheckCircle,
      title: 'התאמת ההחזר החודשי לשינויים בתזרים הבית',
      intro: 'המשכנתא חייבת להיות מותאמת באופן רציף למצב הכלכלי העכשווי שלכם:',
      cases: [
         { title: 'שיפור כלכלי', text: 'עלייה בהכנסות מאפשרת קיצור תקופת המשכנתא – חיסכון אדיר בעלויות ריבית.' },
         { title: 'הקלה כלכלית', text: 'ירידה בהכנסות או גידול בהוצאות מחייבים פריסה מחודשת להקטנת ההחזר.', highlight: true },
      ],
   },
];

/** A labelled text box: neutral for the problem, gold-edged for the opportunity. */
function Point({ label, text, highlight }: { label: string; text: string; highlight?: boolean }) {
   return (
      <div className={`rounded-lg border-s-4 p-5 ${highlight ? 'border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10' : 'border-border bg-muted'}`}>
         <h3 className={`mb-2 text-sm font-bold ${highlight ? 'text-[var(--color-brand-gold-text)]' : 'text-muted-foreground'}`}>{label}</h3>
         <p className="leading-relaxed text-muted-foreground">{text}</p>
      </div>
   );
}

export default function MortgageRefinancingPage() {
   return (
      <main className="bg-background text-foreground">
      <BreadcrumbJsonLd items={[{ name: "מחזור משכנתא", path: "/restore" }]} />
         <PageHero image="/restore.webp" title="4 סיבות מקצועיות לבדיקת מחזור המשכנתא שלכם היום">
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
               המשכנתא שלכם היא ההתחייבות הפיננסית הגדולה ביותר של משק הבית. התנאים הכלכליים משתנים תדיר, ואם לא בדקתם את תמהיל המשכנתא שלכם בשנתיים האחרונות, קיים סיכוי גבוה שאתם נושאים בעלויות מימון גבוהות מהנדרש.
            </p>
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[var(--color-brand-gold)]/40 bg-[var(--color-brand-gold)]/10 p-6 text-start">
               <div className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 rounded-lg bg-[var(--color-brand-gold)]/20 p-2">
                     <TrendingDown className="h-5 w-5 text-[var(--color-brand-gold)]" aria-hidden="true" />
                  </span>
                  <p className="leading-relaxed text-white/90">
                     <strong className="text-[var(--color-brand-gold)]">חשוב לדעת:</strong> הבדיקה המקצועית של כדאיות מחזור המשכנתא היא צעד חיוני לשמירה על יציבות ואופטימיזציה של ההחזר החודשי.
                  </p>
               </div>
            </div>
         </PageHero>

         <div className="container-main section-padding">
            <div className="mb-12 text-center">
               <h2 className="mb-4 text-3xl font-bold md:text-4xl">ארבע סיבות מרכזיות לבדיקת כדאיות</h2>
               <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  גלו איך בדיקה פשוטה יכולה לחסוך לכם עשרות אלפי שקלים
               </p>
            </div>

            <div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
               {reasons.map(({ icon: Icon, ...reason }, i) => (
                  <Card key={reason.title} className="h-full rounded-2xl border-border bg-card">
                     <CardHeader className="pb-4 pt-8">
                        <div className="flex flex-col items-start gap-4">
                           <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-brand-gold)]/15 text-[var(--color-brand-gold-text)]">
                              <Icon className="h-7 w-7" aria-hidden="true" />
                           </span>
                           <div className="w-full">
                              <p className="mb-2 text-sm font-bold text-[var(--color-brand-gold-text)]">סיבה 0{i + 1}</p>
                              <h3 className="text-xl font-bold leading-tight md:text-2xl">{reason.title}</h3>
                           </div>
                        </div>
                     </CardHeader>
                     <CardContent className="space-y-4 pb-8">
                        {reason.intro && <p className="leading-relaxed text-muted-foreground">{reason.intro}</p>}
                        {reason.problem && <Point {...reason.problem} />}
                        {reason.opportunity && <Point {...reason.opportunity} highlight />}
                        {reason.cases?.map((c) => (
                           <Point key={c.title} label={c.title} text={c.text} highlight={c.highlight} />
                        ))}
                     </CardContent>
                  </Card>
               ))}
            </div>

            <section className="mb-16 rounded-3xl border border-border bg-card px-6 py-10 text-center md:p-16">
               <div className="mx-auto max-w-3xl">
                  <span className="mb-6 inline-block rounded-2xl bg-[var(--color-brand-gold)]/15 p-4 text-[var(--color-brand-gold-text)]">
                     <CheckCircle className="h-10 w-10" aria-hidden="true" />
                  </span>
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">ההמלצה המקצועית שלי</h2>
                  <p className="mb-4 text-xl font-medium leading-relaxed md:text-2xl">
                     אני ממליץ לכל לווה לבצע <strong className="text-[var(--color-brand-gold-text)]">בדיקת כדאיות מחזור יזומה אחת לשנתיים</strong>.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                     בכך תבטיחו שהמשכנתא שלכם מתאימה למצב בשוק וליכולת ההחזר הריאלית שלכם.
                  </p>
               </div>
            </section>

            <div className="pb-4 text-center">
               <h2 className="mb-3 text-3xl font-bold md:text-4xl">בדיקת כדאיות מקצועית</h2>
               <p className="mb-6 text-xl font-semibold text-[var(--color-brand-gold-text)]">חינם וללא התחייבות</p>
               <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  שלחו לי את דוח יתרות לסילוק משכנתא, ואני אבצע ניתוח מקיף של נתוני ההלוואה שלכם מול תנאי השוק העדכניים, אובייקטיבי וללא כל עלות מצידכם.
               </p>
               <CtaLink href="/#contact">צרו קשר לבדיקה עכשיו</CtaLink>
            </div>
         </div>
      </main>
   );
}
