import { connectToDatabase } from '@/server/connect';
import flashModel, { IFlash } from '@/server/flash/flash.model';
import { ChevronDown, Clock, ExternalLink, Tag } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
   title: "חדשות משכנתא",
   description: "חדשות ותחקירים בנושא חדשות פיננסים ומשכנתאות",
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
      <div className="min-h-screen  bg-linear-to-b from-primary/10 to-white" >
         {/* Header Section */}
         <div className="relative py-24 px-4">
            <Image src="/news.webp" priority fill alt="חדשות משכנתא" className="object-cover z-5" />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20">
               <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-center mb-6 rtl">חדשות משכנתא</h1>
               <p className="text-center text-white mb-12">
                  כל מה שחדש בעולמות המשכנתאות והפיננסים
               </p>
            </div>
         </div>

         {/* Flashes Grid */}
         <div className="container md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
            {serializedFlashes.length > 0 ? (
               <div className="grid grid-cols-1  gap-6">
                  {serializedFlashes.map((flash) => (
                     <article
                        key={flash._id}
                        className="group/article bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                     >
                        <details className="p-6 group">
                           <summary className="cursor-pointer flex">
                              {flash.img && (
                                 <div className="relative h-48 overflow-hidden">
                                    <Image
                                       fill
                                       src={flash.img}
                                       alt={flash.title}
                                       className="w-full h-full object-cover group-hover/article:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                                 </div>
                              )}

                              <div >
                                 <div className="flex items-center gap-3 mb-3 text-sm">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-(--primary-color)/5 text-(--primary-color) font-medium">
                                       <Tag className="w-3.5 h-3.5" />
                                       {flash.category}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-gray-500">
                                       <Clock className="w-3.5 h-3.5" />
                                       {formatDate(flash.createdAt)}
                                    </span>
                                 </div>

                                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover/article:text-(--primary-color) transition-colors">
                                    {flash.title}
                                 </h3>
                              </div>
                              <div className="mr-auto self-start pt-1 pl-2">
                                 <ChevronDown className="w-5 h-5 text-gray-400 transition-all duration-300 group-open:rotate-180 group-open:text-(--primary-color)" />
                              </div>
                           </summary>

                           <p className="text-gray-600 leading-relaxed mb-4 prose prose-lg  whitespace-pre-line">
                              {flash.content}
                           </p>

                           {flash.links && flash.links.length > 0 && (
                              <div className="pt-4 border-t border-gray-100">
                                 <div className="flex flex-wrap gap-2">
                                    {flash.links.map((link, index) => (
                                       <a
                                          key={index}
                                          href={link}
                                          target="_blank"
                                          title={link}
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1.5 text-sm text-(--primary-color) hover:text-(--primary-color) font-medium transition-colors"
                                       >
                                          קישור נוסף
                                          <ExternalLink className="w-3.5 h-3.5" />
                                       </a>
                                    ))}
                                 </div>
                              </div>
                           )}

                        </details>
                     </article>
                  ))}
               </div>
            ) : (
               <div className="text-center py-20">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                     <Tag className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                     אין עדכונים זמינים
                  </h3>
                  <p className="text-gray-600">
                     חזור מאוחר יותר לעדכונים חדשים
                  </p>
               </div>
            )}
         </div>
      </div>
   );
}