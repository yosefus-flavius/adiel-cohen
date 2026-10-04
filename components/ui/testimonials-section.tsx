import { testimonials } from "@/lib/data/testimonials";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="section-padding border-y border-border bg-card">
      <div className="container-main">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold text-[var(--color-brand-gold-text)]">לקוחות מספרים</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">מה אומרים עליי</h2>
          </div>
          <span
            role="img"
            aria-label="5 מתוך 5 כוכבים"
            className="text-2xl tracking-widest text-[var(--color-brand-gold-text)]"
          >
            ★★★★★
          </span>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item._id}>
              <figure className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-background p-7">
                <blockquote className="text-lg leading-relaxed text-foreground">
                  &quot;{item.content}&quot;
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <span className="flex flex-col">
                    <strong className="text-base text-foreground">{item.name}</strong>
                    <span className="text-sm text-muted-foreground">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
