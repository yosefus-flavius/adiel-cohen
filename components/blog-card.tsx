"use client";

import { IBlog } from '@/server/blog/blog.model'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from './ui/card'
import { Calendar, ArrowLeft, Tag } from 'lucide-react'

interface BlogCardProps {
  blog: IBlog;
  headingLevel?: 'h2' | 'h3';
}

export default function BlogCard({ blog, headingLevel: Heading = 'h3' }: BlogCardProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString("he-IL", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group block h-full"
    >
      <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
        {/* Image Container */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-brand-gold)] text-slate-900 rounded-full shadow-md">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Date */}
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>

          {/* Title */}
          <Heading className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[var(--color-brand-gold-text)] transition-colors">
            {blog.title}
          </Heading>

          {/* Excerpt */}
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
            {blog.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            {/* Tags */}
            <div className="flex items-center gap-2">
              {blog.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-md"
                >
                  {tag}
                </span>
              ))}
              {blog.tags.length > 2 && (
                <span className="text-xs text-slate-400">
                  +{blog.tags.length - 2}
                </span>
              )}
            </div>

            {/* Read More Link */}
            <span className="flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-gold-text)] group-hover:gap-2 transition-all">
              קרא עוד
              <ArrowLeft className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
