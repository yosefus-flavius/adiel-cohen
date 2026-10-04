import Calc from "@/components/ui/calc";
import { PageHero } from "@/components/ui/page-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
   alternates: { canonical: '/calc' },
   title: "מחשבון משכנתא",
   description: "מחשבון משכנתא חינמי: חשבו החזר חודשי, ריבית וסך התשלומים לפי סכום, תקופה ומסלול, ובדקו כמה המשכנתא תעלה לכם.",
   openGraph: {
      title: "מחשבון משכנתא | עדיאל כהן",
      description: "חשבו החזר חודשי וסך תשלומים למשכנתא בכמה לחיצות.",
      url: '/calc',
      type: 'website',
      locale: 'he_IL',
      images: ['/front.webp'],
   },
}

export default function CalcPage() {

   return (
      <main className="bg-background text-foreground">
         <PageHero
            image="/calc-2.webp"
            title="מחשבון משכנתא"
            description="השתמשו במחשבון כדי לחשב את ההחזר החודשי והעלות הכוללת של המשכנתא"
         />
         <div className="container-main section-padding">
            {/* The calculator is a third-party iframe with its own light styling, so it sits on a white card in both themes */}
            <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-white p-2 shadow-sm md:p-4">
               <Calc />
            </div>
         </div>
      </main>
   );
}
