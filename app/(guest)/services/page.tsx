import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import mortgageServices from '@/lib/data/services';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
   title: "שירותים מקצועיים",
   description: "אנו מציעים מגוון רחב של שירותי משכנתא מותאמים אישית לצרכים שלכם",
}

const MortgageServicesSection = () => {


   return (
      <div  >
         <div className="relative py-24 px-4">
            <Image src="/services.webp" fill alt="מחשבון משכנתא" className="object-cover z-5" />
            <div className="absolute inset-0 bg-black opacity-50 z-10" />
            <div className="relative z-20">
               <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-center mb-6 rtl">שירותים מקצועיים</h1>
               <p className="text-center text-white mb-12">אנו מציעים מגוון רחב של שירותי משכנתא מותאמים אישית לצרכים שלכם</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12 md:py-24 container mx-auto">
            {mortgageServices.map((service, index) => (
               <div
                  key={service.title}
                  className="transform transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
               >
                  <Card className="rounded-2xl overflow-hidden border border-amber-100 h-full shadow-sm hover:shadow-xl transition-shadow bg-white">
                     <div className=" h-11 md:h-9 -mt-3 -ml-2 bg-amber-400 -rotate-3"></div>
                     <CardHeader className="pt-6 pb-2 px-6">
                        <div className="flex items-center gap-3 mb-2">
                           {service.icon && (
                              <div className="mr-4 bg-amber-100 p-3 rounded-full">
                                 {service.icon}
                              </div>
                           )}
                           <CardTitle className="text-2xl font-bold text-right text-gray-900">
                              {service.title}
                           </CardTitle>
                        </div>
                     </CardHeader>
                     <CardContent className="px-6 pb-6">
                        <p className="text-gray-600 text-right leading-relaxed">
                           {service.description}
                        </p>

                        {service.features && (
                           <ul className="mt-4 space-y-2 text-right">
                              {service.features.map((feature, i) => (
                                 <li key={i} className="flex items-center justify-start text-gray-700">
                                    <div className="h-5 w-5 text-amber-600 shrink-0">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                       </svg>
                                    </div>
                                    <span className="mr-2">{feature}</span>
                                 </li>
                              ))}
                           </ul>
                        )}

                     </CardContent>
                  </Card>
               </div>
            ))}
         </div>

         <div className="text-center mb-12">
            <Link href="/#contact">
               <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl">
                  לייעוץ ראשוני חינם
               </button>
            </Link>
         </div>

      </div>
   );
};


export default MortgageServicesSection;