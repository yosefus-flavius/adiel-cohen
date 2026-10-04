import { IBlog } from '@/server/blog/blog.model'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'

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
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-[var(--color-brand-gold)]"
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={blog.coverImage}
          alt=""
          fill
          sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 start-4 rounded-full bg-[var(--color-brand-gold)] px-3 py-1 text-xs font-bold text-[#1B1405] shadow-md">
          {blog.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" aria-hidden="true" />
          <time dateTime={new Date(blog.date).toISOString()}>{formattedDate}</time>
        </p>

        <Heading className="line-clamp-2 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-[var(--color-brand-gold-text)]">
          {blog.title}
        </Heading>

        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">{blog.excerpt}</p>

        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-2">
            {blog.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
            {blog.tags.length > 2 && (
              <span className="text-xs text-muted-foreground">+{blog.tags.length - 2}</span>
            )}
          </div>
          <span className="flex items-center gap-1 text-sm font-bold text-[var(--color-brand-gold-text)] transition-all group-hover:gap-2">
            קרא עוד
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  )
}
