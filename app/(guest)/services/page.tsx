import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import mortgageServices from '@/lib/data/services';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';

export const metadata: Metadata = {
   alternates: { canonical: '/services' },
   title: "שירותים מקצועיים",
   description: "אנו מציעים מגוון רחב של שירותי משכנתא מותאמים אישית לצרכים שלכם",
}

const MortgageServicesSection = () => {

   return (
      <main className="bg-[hsl(40,33%,96%)] min-h-screen pb-12">
         <div className="relative py-24 px-4 overflow-hidden">
            <Image src="/services-2.webp" fill alt="שירותים מקצועיים" className="object-cover z-0" />
            <div className="absolute inset-0 bg-slate-900/70 z-10" />
            <div className="relative z-20 container-main">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6 text-white">שירותים מקצועיים</h1>
               <p className="text-center text-slate-200 text-lg md:text-xl max-w-2xl mx-auto">אנו מציעים מגוון רחב של שירותי משכנתא מותאמים אישית לצרכים שלכם</p>
            </div>
         </div>

         <div className="container-main section-padding -mt-8 relative z-30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
               {mortgageServices.map((service, index) => (
                  <Card key={service.title} className="relative h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                     {/* Decorative top-right shape */}
                     <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--color-brand-gold)]/5 transform rotate-45 translate-x-8 -translate-y-14 transition-transform duration-500 group-hover:scale-110" />
                     </div>

                     <CardHeader className="pt-8 pb-4 relative z-10">
                        <div className="flex flex-col items-start gap-4">
                           {service.icon && (
                              <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-gold)]/10 flex items-center justify-center text-[var(--color-brand-gold)] group-hover:scale-110 transition-transform duration-300">
                                 {service.icon}
                              </div>
                           )}
                           <CardTitle className="text-xl md:text-2xl font-bold text-right text-slate-900 w-full">
                              {service.title}
                           </CardTitle>
                        </div>
                     </CardHeader>

                     <CardContent className="relative z-10 pb-8">
                        <p className="text-sm md:text-base text-slate-600 text-right leading-relaxed mb-6">
                           {service.description}
                        </p>

                        {service.features && (
                           <ul className="space-y-3 text-right border-t border-slate-100 pt-6 mt-auto">
                              {service.features.map((feature, i) => (
                                 <li key={i} className="flex items-start justify-start text-slate-700">
                                    <div className="w-5 h-5 rounded-full bg-[var(--color-brand-gold)]/10 flex items-center justify-center text-[var(--color-brand-gold)] shrink-0 ml-3 mt-0.5">
                                       <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm">{feature}</span>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </CardContent>
                  </Card>
               ))}
            </div>

            <div className="text-center mt-16">
               <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl group"
               >
                  לייעוץ ראשוני חינם
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
               </Link>
            </div>
         </div>
      </main>
   );
};

export default MortgageServicesSection;