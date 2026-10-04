import { connectToDatabase } from '@/server/connect';
import flashModel, { IFlash } from '@/server/flash/flash.model';
import { ChevronDown, Clock, ExternalLink, Tag } from 'lucide-react';
import { Metadata } from 'next';
import { PageHero } from '@/components/ui/page-hero';
import Image from 'next/image';

export const metadata: Metadata = {
   alternates: { canonical: '/news' },
   title: "חדשות משכנתא",
   description: "עדכונים וחדשות מעולם המשכנתאות והפיננסים: ריביות, רגולציה ושינויים שחשוב להכיר לפני שלוקחים או ממחזרים משכנתא.",
}

export default async function FlashesPage() {
   await connectToDatabase();

   const flashes = await flashModel
      .find({ isActive: true })
      .sort({ createdAt: -1 })
      .lean<IFlash[]>()
      .exec();

   // Convert MongoDB dates to strings for serialization
   const serializedFlashes = flashes.map(flash => ({
      ...flash,
      _id: flash._id.toString(),
      createdAt: flash.createdAt.toISOString(),
      updatedAt: flash.updatedAt.toISOString()
   }));

   const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('he-IL', {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      });
   };

   return (
      <main className="bg-background text-foreground">
         <PageHero image="/news.webp" title="חדשות משכנתא" description="כל מה שחדש בעולמות המשכנתאות והפיננסים" />

         <div className="container-main max-w-5xl py-12 md:py-16">
            {serializedFlashes.length > 0 ? (
               <div className="grid grid-cols-1 gap-6">
                  {serializedFlashes.map((flash) => (
                     <article
                        key={flash._id}
                        className="group/article overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-[var(--color-brand-gold)]"
                     >
                        <details className="group p-6">
                           <summary className="flex cursor-pointer items-start gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">
                              {flash.img && (
                                 <div className="relative hidden h-24 w-36 shrink-0 overflow-hidden rounded-xl bg-muted sm:block">
                                    <Image
                                       fill
                                       src={flash.img}
                                       alt=""
                                       sizes="144px"
                                       className="object-cover transition-transform duration-500 group-hover/article:scale-105"
                                    />
                                 </div>
                              )}

                              <div className="min-w-0 flex-1">
                                 <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-gold)]/15 px-3 py-1 font-medium text-[var(--color-brand-gold-text)]">
                                       <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                                       {flash.category}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-muted-foreground">
                                       <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                                       {formatDate(flash.createdAt)}
                                    </span>
                                 </div>

                                 <h2 className="text-xl font-bold leading-snug text-foreground transition-colors group-hover/article:text-[var(--color-brand-gold-text)]">
                                    {flash.title}
                                 </h2>
                              </div>
                              <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180 group-open:text-[var(--color-brand-gold-text)]" aria-hidden="true" />
                           </summary>

                           <p className="mt-4 whitespace-pre-line leading-relaxed text-muted-foreground">
                              {flash.content}
                           </p>

                           {flash.links && flash.links.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-4 border-t border-border pt-4">
                                 {flash.links.map((link, index) => (
                                    <a
                                       key={index}
                                       href={link}
                                       target="_blank"
                                       title={link}
                                       rel="noopener noreferrer"
                                       className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-brand-gold-text)] underline-offset-4 hover:underline"
                                    >
                                       קישור נוסף
                                       <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                                    </a>
                                 ))}
                              </div>
                           )}
                        </details>
                     </article>
                  ))}
               </div>
            ) : (
               <div className="py-20 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                     <Tag className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold">אין עדכונים זמינים</h2>
                  <p className="text-muted-foreground">חזרו מאוחר יותר לעדכונים חדשים</p>
               </div>
            )}
         </div>
      </main>
   );
}
