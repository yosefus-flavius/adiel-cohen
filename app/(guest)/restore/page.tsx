import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactSection } from '@/components/ui/contact-section';
import { Calculator, CheckCircle, Shield, TrendingDown } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100" dir="rtl">
         <div className="relative py-24 px-4">


            <Image src="/restore.webp" fill alt="מחזור משכנתא" className="object-cover z-5" />
            <div className="absolute inset-0 bg-black opacity-70 z-10" />

            <div className="relative z-20 container max-w-5xl mx-auto">
               <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white text-center mb-6 ">
                  4 סיבות מקצועיות לבדיקת מחזור המשכנתא שלכם היום
               </h1>
               <p className="text-md text-white/80 leading-relaxed mb-8">
                  המשכנתא שלכם היא ההתחייבות הפיננסית הגדולה ביותר של משק הבית. התנאים הכלכליים משתנים תדיר, ואם לא בדקתם את תמהיל המשכנתא שלכם בשנתיים האחרונות, קיים סיכוי גבוה שאתם נושאים בעלויות מימון גבוהות מהנדרש.
               </p>

               {/* Alert Box */}
               <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 max-w-3xl mx-auto">
                  <div className="flex items-start gap-4">
                     <div className="bg-amber-100 p-2 rounded-lg mt-1">
                        <TrendingDown className="w-5 h-5 text-amber-700" />
                     </div>
                     <p className="text-amber-900 text-right leading-relaxed">
                        <strong>חשוב לדעת:</strong> הבדיקה המקצועית של כדאיות מחזור המשכנתא היא צעד חיוני לשמירה על יציבות ואופטימיזציה של ההחזר החודשי.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* Main Content */}
         <main className="container mx-auto px-4 py-16 max-w-6xl">
            {/* Section Title */}
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  ארבע סיבות מרכזיות לבדיקת כדאיות
               </h2>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  גלו איך בדיקה פשוטה יכולה לחסוך לכם עשרות אלפי שקלים
               </p>
            </div>

            {/* Reasons Grid */}
            <div className="space-y-8 mb-20">
               {/* Reason 1 */}
               <Card className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full"></div>
                  <CardHeader className="relative">
                     <div className="flex items-start gap-6">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg shrink-0">
                           <TrendingDown className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                           <div className="text-blue-600 font-bold text-sm mb-2">סיבה ראשונה</div>
                           <CardTitle className="text-2xl md:text-3xl leading-tight">
                              הפוטנציאל לחיסכון במסלול הריבית המשתנה
                           </CardTitle>
                        </div>
                     </div>
                  </CardHeader>
                  <CardContent className="space-y-6 md:pr-20 pr-4">
                     <div className="bg-red-50 border-r-4 border-red-400 p-5 rounded-lg">
                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                           <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">האתגר</span>
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                           למעלה מ-50% מהמשכנתאות החדשות כוללות רכיב ריבית משתנה (המתעדכן כל 3 או 5 שנים). במועד העדכון הקרוב, ה"עוגן" של המסלול עלול להתייקר משמעותית, כתוצאה מעליית הריבית בשוק מאז לקיחת ההלוואה.
                        </p>
                     </div>

                     <div className="bg-green-50 border-r-4 border-green-400 p-5 rounded-lg">
                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                           <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">ההזדמנות</span>
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                           ניתן להשיג כיום <strong className="text-green-700">מרווחים נמוכים יותר</strong> על העוגן. מחזור מאפשר להחליף את המסלול או לבצע משא ומתן מחדש על תנאי ההלוואה, ובכך למנוע את הקפיצה הצפויה בהחזר החודשי ולנצל ריביות אטרקטיביות יותר.
                        </p>
                     </div>
                  </CardContent>
               </Card>

               {/* Reason 2 */}
               <Card className="border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-50 to-transparent rounded-bl-full"></div>
                  <CardHeader className="relative">
                     <div className="flex items-start gap-6">
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg shrink-0">
                           <Calculator className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                           <div className="text-purple-600 font-bold text-sm mb-2">סיבה שנייה</div>
                           <CardTitle className="text-2xl md:text-3xl leading-tight">
                              הוזלת המרווח במסלול הפריים
                           </CardTitle>
                        </div>
                     </div>
                  </CardHeader>
                  <CardContent className="space-y-6 md:pr-20 pr-4">
                     <div className="bg-gray-50 border-r-4 border-gray-400 p-5 rounded-lg">
                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                           <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">הבדיקה הנדרשת</span>
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                           מסלול הפריים הוא מרכיב נפוץ, אך המרווח שקיבלתם בעבר עלול להיות יקר ביחס לתנאי השוק התחרותיים היום.
                        </p>
                     </div>

                     <div className="bg-green-50 border-r-4 border-green-400 p-5 rounded-lg">
                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                           <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">התועלת הישירה</span>
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                           בדיקה מאפשרת <strong className="text-green-700">להוזיל את המרווח</strong> באופן נקודתי, ובכך להפחית את עלות הריבית על רכיב זה במשכנתא ולצמצם את ההחזר החודשי.
                        </p>
                     </div>
                  </CardContent>
               </Card>

               {/* Reason 3 */}
               <Card className="border-2 border-red-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full"></div>
                  <CardHeader className="relative">
                     <div className="flex items-start gap-6">
                        <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl shadow-lg shrink-0">
                           <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                           <div className="text-red-600 font-bold text-sm mb-2">סיבה שלישית</div>
                           <CardTitle className="text-2xl md:text-3xl leading-tight">
                              טיפול בחשיפה למדד: הקרן שגדלה
                           </CardTitle>
                        </div>
                     </div>
                  </CardHeader>
                  <CardContent className="space-y-6 md:pr-20 pr-4">
                     <div className="bg-red-50 border-r-4 border-red-400 p-5 rounded-lg">
                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                           <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">הסיכון האינפלציוני</span>
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                           במסלולים הצמודים למדד בריבית גבוהה, יתרת החוב שלכם <strong className="text-red-700">גדלה</strong> בהתאם לעליית המדד, גם אם אתם משלמים כסדרם. הריבית משולמת על קרן מתנפחת.
                        </p>
                     </div>

                     <div className="bg-green-50 border-r-4 border-green-400 p-5 rounded-lg">
                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                           <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">הפתרון המקצועי</span>
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                           באמצעות מחזור, ניתן לצמצם את החשיפה למדד על ידי המרת חלק מהמסלול למסלולים שאינם צמודים, תוך אופטימיזציה של הריביות.
                        </p>
                     </div>
                  </CardContent>
               </Card>

               {/* Reason 4 */}
               <Card className="border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-full"></div>
                  <CardHeader className="relative">
                     <div className="flex items-start gap-6">
                        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-2xl shadow-lg shrink-0">
                           <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                           <div className="text-emerald-600 font-bold text-sm mb-2">סיבה רביעית</div>
                           <CardTitle className="text-2xl md:text-3xl leading-tight">
                              התאמת ההחזר החודשי לשינויים בתזרים הבית
                           </CardTitle>
                        </div>
                     </div>
                  </CardHeader>
                  <CardContent className="space-y-6 md:pr-20 pr-4">
                     <p className="text-gray-700 leading-relaxed text-lg">
                        המשכנתא חייבת להיות מותאמת באופן רציף למצב הכלכלי העכשווי שלכם:
                     </p>

                     <div className="space-y-4">
                        <div className="flex gap-4 items-start bg-emerald-50 p-5 rounded-lg border-r-4 border-emerald-400">
                           <div className="bg-emerald-100 rounded-full p-2 mt-1 shrink-0">
                              <CheckCircle className="w-5 h-5 text-emerald-600" />
                           </div>
                           <div>
                              <h4 className="font-bold text-gray-900 mb-2">שיפור כלכלי</h4>
                              <p className="text-gray-700 leading-relaxed">
                                 עלייה בהכנסות מאפשרת <strong className="text-emerald-700">קיצור תקופת המשכנתא</strong> – חיסכון אדיר בעלויות ריבית עתידיות.
                              </p>
                           </div>
                        </div>

                        <div className="flex gap-4 items-start bg-blue-50 p-5 rounded-lg border-r-4 border-blue-400">
                           <div className="bg-blue-100 rounded-full p-2 mt-1 shrink-0">
                              <CheckCircle className="w-5 h-5 text-blue-600" />
                           </div>
                           <div>
                              <h4 className="font-bold text-gray-900 mb-2">הקלה כלכלית</h4>
                              <p className="text-gray-700 leading-relaxed">
                                 ירידה בהכנסות או גידול בהוצאות מחייבים <strong className="text-blue-700">פריסה מחודשת של ההלוואה</strong> להקטנת ההחזר החודשי המיידי.
                              </p>
                           </div>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>

            {/* Recommendation Section */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-3xl md:p-10 px-4 py-8 md:p-16 mb-16 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
               <div className="max-w-3xl mx-auto text-center relative">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-2 inline-block mb-6">
                     <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">ההמלצה המקצועית שלי</h2>
                  <p className="text-xl leading-relaxed mb-4 text-blue-50">
                     אני ממליץ לכל לווה לבצע <strong className="text-white">בדיקת כדאיות מחזור יזומה אחת לשנתיים</strong>.
                  </p>
                  <p className="text-lg leading-relaxed text-blue-100">
                     בכך תבטיחו שהמשכנתא שלכם מתאימה למצב בשוק וליכולת ההחזר הריאלית שלכם.
                  </p>
               </div>
            </section>


            {/* CTA Section */}
            <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-2xl md:p-10 px-4 py-8 md:p-16 border-2 border-blue-100">
               <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        בדיקת כדאיות מקצועית
                     </h2>
                     <p className="text-xl text-blue-600 font-semibold">חינם וללא התחייבות</p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                     <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        אני מציע בדיקת כדאיות מקצועית, ממוקדת ואובייקטיבית – <strong className="text-blue-600">ללא עלות וללא התחייבות</strong>.
                     </p>

                     <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                        <p className="text-gray-800 leading-relaxed">
                           שלחו לי את <strong className="text-blue-700">דוח יתרות לסילוק משכנתא</strong> (המסמך הנדרש לבדיקה מול הבנקים), ואני אבצע ניתוח מקיף של נתוני ההלוואה שלכם מול תנאי השוק העדכניים.
                        </p>
                     </div>
                  </div>
                  <p className="text-center text-gray-600 mt-8 text-lg font-medium">
                     קחו אחריות על הנכס הפיננסי הגדול ביותר שלכם. צרו איתי קשר היום.
                  </p>
               </div>
            </section>
            <ContactSection />

         </main>
      </div>
   );
}