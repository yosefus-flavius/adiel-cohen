import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CtaLink } from '@/components/ui/cta-link';
import { PageHero } from '@/components/ui/page-hero';
import mortgageServices from '@/lib/data/services';
import { Metadata } from 'next';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
   alternates: { canonical: '/services' },
   title: "שירותי ייעוץ משכנתאות",
   description: "משכנתא לדירה ראשונה, רכישה מקבלן, מחזור, איחוד הלוואות, שיפוץ ובנייה עצמית: ליווי אישי של עדיאל כהן, יועץ משכנתאות ברחובות.",
   openGraph: {
      title: "שירותי ייעוץ משכנתאות | עדיאל כהן",
      description: "ליווי אישי בכל סוגי המשכנתאות: דירה ראשונה, מקבלן, מחזור, איחוד הלוואות ועוד.",
      url: '/services',
      type: 'website',
      locale: 'he_IL',
      images: ['/og-image.jpg'],
   },
}

const MortgageServicesSection = () => {

   return (
      <main className="bg-background text-foreground">
      <BreadcrumbJsonLd items={[{ name: "שירותים", path: "/services" }]} />
         <PageHero
            image="/services-2.webp"
            title="שירותי ייעוץ משכנתאות"
            description="מגוון רחב של שירותי משכנתא, מותאמים אישית לצרכים שלכם"
         />

         <div className="container-main section-padding">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
               {mortgageServices.map((service) => (
                  <Card key={service.title} className="group h-full rounded-2xl border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand-gold)] hover:shadow-md">
                     <CardHeader className="pb-4 pt-8">
                        <div className="flex flex-col items-start gap-4">
                           {service.icon && (
                              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-brand-gold)]/15">
                                 {service.icon}
                              </div>
                           )}
                           <h2 className="w-full text-xl font-bold leading-snug text-foreground md:text-2xl">
                              {service.title}
                           </h2>
                        </div>
                     </CardHeader>

                     <CardContent className="pb-8">
                        <p className="mb-6 leading-relaxed text-muted-foreground">
                           {service.description}
                        </p>

                        {service.features && (
                           <ul className="space-y-3 border-t border-border pt-6">
                              {service.features.map((feature) => (
                                 <li key={feature} className="flex items-start gap-3 text-foreground">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-gold)]/15 text-[var(--color-brand-gold-text)]">
                                       <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                                    </span>
                                    <span className="text-sm">{feature}</span>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </CardContent>
                  </Card>
               ))}
            </div>

            <div className="mt-16 text-center">
               <CtaLink href="/#contact">לייעוץ ראשוני חינם</CtaLink>
            </div>
         </div>
      </main>
   );
};

export default MortgageServicesSection;
