import { IBlog } from '@/server/blog/blog.model'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from './ui/card'



export default function BlogCard({ blog }: { blog: IBlog }) {
   return (
      <Link
         href={`/blog/${blog.slug}`}
         className="group h-full"
      >
         <Card className="h-full">

            <div className="relative h-64 mb-6 rounded-t-xl  overflow-hidden">
               <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform group-hover:scale-105"
               />
            </div>
            <div className="p-4">
               <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm text-gray-500">
                     {new Date(blog.date).toLocaleDateString("he-IL", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                     })}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                     {blog.category}
                  </span>
               </div>
               <h2 className="text-xl font-semibold group-hover:text-gray-600 mb-3">
                  {blog.title}
               </h2>
               <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
               <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag) => (
                     <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                     >
                        {tag}
                     </span>
                  ))}
               </div>
            </div>
         </Card>
      </Link>
   )
}
