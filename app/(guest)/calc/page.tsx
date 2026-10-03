import Calc from "@/components/ui/calc";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
   alternates: { canonical: '/calc' },
   title: "מחשבון משכנתא",
   description: "חישוב משכנתא בקלות",
}

export default function CalcPage() {

   return (
      <div  >
         <div className="relative py-24 px-4">
            <Image src="/calc-2.webp" fill alt="מחשבון משכנתא" className="object-cover z-5" />
            <div className="absolute inset-0 bg-black/80 z-10" />
            <div className="relative z-20">
               <h1 className="text-4xl text-white md:text-7xl font-bold tracking-tight text-center mb-6 rtl">מחשבון משכנתא</h1>
               <p className="text-center text-white/80 mb-12">השתמשו במחשבון כדי לחשב את המשכנתא שלכם</p>
            </div>
         </div>
         <main className="container mx-auto px-4 py-12 md:py-24">
            <Calc />
         </main>
      </div>
   );
}