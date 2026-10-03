import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calculator, CheckCircle, Shield, TrendingDown } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
   alternates: { canonical: '/restore' },
   title: '4 סיבות לבדיקת מחזור המשכנתא שלכם היום',
   description: 'גלו מדוע חיוני לבדוק את כדאיות מחזור המשכנתא שלכם. חסכו אלפי שקלים בריבית, הפחיתו את ההחזר החודשי והתאימו את המשכנתא למצבכם הכלכלי. בדיקה חינם וללא התחייבות.',
   keywords: [
      'מחזור משכנתא',
      'ייעוץ משכנתאות',
      'חיסכון במשכנתא',
      'הפחתת ריבית משכנתא',
      'ריבית משתנה',
      'מסלול פריים',
      'צמוד למדד',
      'בדיקת כדאיות משכנתא',
      'הלוואת משכנתא'
   ],
   authors: [{ name: 'ייעוץ משכנתאות מקצועי' }],
   openGraph: {
      title: '4 סיבות מקצועיות לבדיקת מחזור המשכנתא שלכם היום',
      description: 'למעלה מ-50% מהמשכנתאות יכולות לחסוך אלפי שקלים במחזור. בצעו בדיקת כדאיות חינם וגלו כמה תוכלו לחסוך.',
      type: 'article',
      locale: 'he_IL',
      siteName: 'ייעוץ משכנתאות',
   },
   twitter: {
      card: 'summary_large_image',
      title: '4 סיבות לבדיקת מחזור המשכנתא שלכם היום',
      description: 'חסכו אלפי שקלים בריבית ומצאו את התנאים הטובים ביותר ל-mortgage-refinancing-guide',
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
      },
   },
};

export default function MortgageRefinancingPage() {
   return (
      <div className="min-h-screen bg-[hsl(40,33%,96%)]" dir="rtl">
         <div className="relative py-24 px-4 overflow-hidden">
            <Image src="/restore.webp" fill alt="מחזור משכנתא" className="object-cover z-0" />
            <div className="absolute inset-0 bg-slate-900/70 z-10" />

            <div className="relative z-20 container-main max-w-5xl mx-auto">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-center mb-6 ">
                  4 סיבות מקצועיות לבדיקת מחזור המשכנתא שלכם היום
               </h1>
               <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-12 max-w-3xl mx-auto text-center">
                  המשכנתא שלכם היא ההתחייבות הפיננסית הגדולה ביותר של משק הבית. התנאים הכלכליים משתנים תדיר, ואם לא בדקתם את תמהיל המשכנתא שלכם בשנתיים האחרונות, קיים סיכוי גבוה שאתם נושאים בעלויות מימון גבוהות מהנדרש.
               </p>

               {/* Alert Box */}
               <div className="bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/30 rounded-2xl p-6 max-w-3xl mx-auto backdrop-blur-md">
                  <div className="flex items-start gap-4">
                     <div className="bg-[var(--color-brand-gold)]/20 p-2 rounded-lg mt-1 shrink-0">
                        <TrendingDown className="w-5 h-5 text-[var(--color-brand-gold)]" />
                     </div>
                     <p className="text-white/90 text-right text-sm md:text-base leading-relaxed">
                        <strong className="text-[var(--color-brand-gold)]">חשוב לדעת:</strong> הבדיקה המקצועית של כדאיות מחזור המשכנתא היא צעד חיוני לשמירה על יציבות ואופטימיזציה של ההחזר החודשי.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* Main Content */}
         <main className="container-main section-padding -mt-8 relative z-30">
            {/* Section Title */}
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  ארבע סיבות מרכזיות לבדיקת כדאיות
               </h2>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  גלו איך בדיקה פשוטה יכולה לחסוך לכם עשרות אלפי שקלים
               </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
               {/* Reason 1 */}
               <Card className="relative h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                     <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--color-brand-gold)]/5 transform rotate-45 translate-x-8 -translate-y-14 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <CardHeader className="pt-8 pb-4 relative z-10">
                     <div className="flex flex-col items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-gold)]/10 flex items-center justify-center text-[var(--color-brand-gold)] group-hover:scale-110 transition-transform duration-300">
                           <TrendingDown className="w-7 h-7" />
                        </div>
                        <div className="w-full">
                           <div className="text-[var(--color-brand-gold-text)] font-bold text-sm mb-2">סיבה 01</div>
                           <CardTitle className="text-xl md:text-2xl font-bold text-right text-slate-900 leading-tight">
                              הפוטנציאל לחיסכון במסלול הריבית המשתנה
                           </CardTitle>
                        </div>
                     </div>
                  </CardHeader>
                  <CardContent className="relative z-10 pb-8 space-y-4">
                     <div className="bg-slate-50 border-r-4 border-slate-200 p-5 rounded-lg">
                        <h3 className="font-bold text-sm text-slate-900 mb-2">
                           <span className="text-slate-500">האתגר:</span>
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                           למעלה מ-50% מהמשכנתאות החדשות כוללות רכיב ריבית משתנה (המתעדכן כל 3 או 5 שנים). במועד העדכון הקרוב, ה"עוגן" של המסלול עלול להתייקר משמעותית.
                        </p>
                     </div>

                     <div className="bg-[var(--color-brand-gold)]/5 border-r-4 border-[var(--color-brand-gold)] p-5 rounded-lg">
                        <h3 className="font-bold text-sm text-slate-900 mb-2">
                           <span className="text-[var(--color-brand-gold-text)]">ההזדמנות:</span>
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                           ניתן להשיג כיום מרווחים נמוכים יותר על העוגן. מחזור מאפשר להחליף את המסלול או לבצע מו"מ מחדש על תנאי ההלוואה.
                        </p>
                     </div>
                  </CardContent>
               </Card>

               {/* Reason 2 */}
               <Card className="relative h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                     <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--color-brand-gold)]/5 transform rotate-45 translate-x-8 -translate-y-14 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <CardHeader className="pt-8 pb-4 relative z-10">
                     <div className="flex flex-col items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-gold)]/10 flex items-center justify-center text-[var(--color-brand-gold)] group-hover:scale-110 transition-transform duration-300">
                           <Calculator className="w-7 h-7" />
                        </div>
                        <div className="w-full">
                           <div className="text-[var(--color-brand-gold-text)] font-bold text-sm mb-2">סיבה 02</div>
                           <CardTitle className="text-xl md:text-2xl font-bold text-right text-slate-900 leading-tight">
                              הוזלת המרווח במסלול הפריים
                           </CardTitle>
                        </div>
                     </div>
                  </CardHeader>
                  <CardContent className="relative z-10 pb-8 space-y-4">
                     <div className="bg-slate-50 border-r-4 border-slate-200 p-5 rounded-lg">
                        <h3 className="font-bold text-sm text-slate-900 mb-2">
                           <span className="text-slate-500">הבדיקה הנדרשת:</span>
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                           מסלול הפריים הוא מרכיב נפוץ, אך המרווח שקיבלתם בעבר עלול להיות יקר ביחס לתנאי השוק התחרותיים היום.
                        </p>
                     </div>

                     <div className="bg-[var(--color-brand-gold)]/5 border-r-4 border-[var(--color-brand-gold)] p-5 rounded-lg">
                        <h3 className="font-bold text-sm text-slate-900 mb-2">
                           <span className="text-[var(--color-brand-gold-text)]">התועלת הישירה:</span>
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                           בדיקה מאפשרת להוזיל את המרווח באופן נקודתי, ובכך להפחית את עלות הריבית על רכיב זה במשכנתא ולצמצם את ההחזר.
                        </p>
                     </div>
                  </CardContent>
               </Card>

               {/* Reason 3 */}
               <Card className="relative h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                     <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--color-brand-gold)]/5 transform rotate-45 translate-x-8 -translate-y-14 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <CardHeader className="pt-8 pb-4 relative z-10">
                     <div className="flex flex-col items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-gold)]/10 flex items-center justify-center text-[var(--color-brand-gold)] group-hover:scale-110 transition-transform duration-300">
                           <Shield className="w-7 h-7" />
                        </div>
                        <div className="w-full">
                           <div className="text-[var(--color-brand-gold-text)] font-bold text-sm mb-2">סיבה 03</div>
                           <CardTitle className="text-xl md:text-2xl font-bold text-right text-slate-900 leading-tight">
                              טיפול בחשיפה למדד: הקרן שגדלה
                           </CardTitle>
                        </div>
                     </div>
                  </CardHeader>
                  <CardContent className="relative z-10 pb-8 space-y-4">
                     <div className="bg-slate-50 border-r-4 border-slate-200 p-5 rounded-lg">
                        <h3 className="font-bold text-sm text-slate-900 mb-2">
                           <span className="text-slate-500">הסיכון האינפלציוני:</span>
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                           במסלולים הצמודים למדד בריבית גבוהה, יתרת החוב שלכם גדלה בהתאם לעליית המדד, גם אם אתם משלמים כסדרם.
                        </p>
                     </div>

                     <div className="bg-[var(--color-brand-gold)]/5 border-r-4 border-[var(--color-brand-gold)] p-5 rounded-lg">
                        <h3 className="font-bold text-sm text-slate-900 mb-2">
                           <span className="text-[var(--color-brand-gold-text)]">הפתרון המקצועי:</span>
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                           באמצעות מחזור, ניתן לצמצם את החשיפה למדד על ידי המרת חלק מהמסלול למסלולים שאינם צמודים.
                        </p>
                     </div>
                  </CardContent>
               </Card>

               {/* Reason 4 */}
               <Card className="relative h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                     <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--color-brand-gold)]/5 transform rotate-45 translate-x-8 -translate-y-14 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <CardHeader className="pt-8 pb-4 relative z-10">
                     <div className="flex flex-col items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-gold)]/10 flex items-center justify-center text-[var(--color-brand-gold)] group-hover:scale-110 transition-transform duration-300">
                           <CheckCircle className="w-7 h-7" />
                        </div>
                        <div className="w-full">
                           <div className="text-[var(--color-brand-gold-text)] font-bold text-sm mb-2">סיבה 04</div>
                           <CardTitle className="text-xl md:text-2xl font-bold text-right text-slate-900 leading-tight">
                              התאמת ההחזר החודשי לשינויים בתזרים הבית
                           </CardTitle>
                        </div>
                     </div>
                  </CardHeader>
                  <CardContent className="relative z-10 pb-8 space-y-4">
                     <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                        המשכנתא חייבת להיות מותאמת באופן רציף למצב הכלכלי העכשווי שלכם:
                     </p>

                     <div className="bg-slate-50 border-r-4 border-slate-200 p-4 rounded-lg flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                        <div>
                           <h4 className="font-bold text-sm text-slate-900 mb-1">שיפור כלכלי</h4>
                           <p className="text-slate-600 text-sm leading-relaxed">
                              עלייה בהכנסות מאפשרת קיצור תקופת המשכנתא – חיסכון אדיר בעלויות ריבית.
                           </p>
                        </div>
                     </div>

                     <div className="bg-[var(--color-brand-gold)]/5 border-r-4 border-[var(--color-brand-gold)] p-4 rounded-lg flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
                        <div>
                           <h4 className="font-bold text-sm text-slate-900 mb-1">הקלה כלכלית</h4>
                           <p className="text-slate-600 text-sm leading-relaxed">
                              ירידה בהכנסות או גידול בהוצאות מחייבים פריסה מחודשת להקטנת ההחזר.
                           </p>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>

            {/* Recommendation Section */}
            <section className="bg-white rounded-3xl shadow-xl md:p-10 px-6 py-10 md:p-16 mb-16 relative overflow-hidden border border-slate-100">
               <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-brand-gold)]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
               <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-900/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

               <div className="max-w-3xl mx-auto text-center relative z-10">
                  <div className="bg-[var(--color-brand-gold)]/10 rounded-2xl p-4 inline-block mb-6 shadow-sm">
                     <CheckCircle className="w-10 h-10 text-[var(--color-brand-gold)]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">ההמלצה המקצועית שלי</h2>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-4 text-slate-800">
                     אני ממליץ לכל לווה לבצע <strong className="text-[var(--color-brand-gold-text)]">בדיקת כדאיות מחזור יזומה אחת לשנתיים</strong>.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-600">
                     בכך תבטיחו שהמשכנתא שלכם מתאימה למצב בשוק וליכולת ההחזר הריאלית שלכם.
                  </p>
               </div>
            </section>

            {/* CTA Section */}
            <div className="text-center mt-8 pb-12">
               <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                     בדיקת כדאיות מקצועית
                  </h2>
                  <p className="text-xl text-[var(--color-brand-gold-text)] font-semibold">חינם וללא התחייבות</p>
               </div>

               <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
                  שלחו לי את דוח יתרות לסילוק משכנתא, ואני אבצע ניתוח מקיף של נתוני ההלוואה שלכם מול תנאי השוק העדכניים, אובייקטיבי וללא כל עלות מצידכם.
               </p>

               <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl group"
               >
                  צרו קשר לבדיקה עכשיו
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
               </a>
            </div>

         </main>
      </div>
   );
}