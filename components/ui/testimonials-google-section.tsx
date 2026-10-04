import type { GoogleReviewsData } from "@/lib/google-reviews";
import Image from "next/image";
import { ReviewText } from "./review-text";

const AVATAR_COLORS = ["#7b5ea7", "#1a73e8", "#188038", "#d93025", "#e37400", "#12858a"];

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.2 5.5-4.7 7.2l7.6 5.9c4.4-4.1 6.9-10.2 6.9-17.6z" />
      <path fill="#FBBC05" d="M10.5 28.7a14.5 14.5 0 0 1 0-9.4l-7.9-6.1a24 24 0 0 0 0 21.6l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <span
      role="img"
      aria-label={`${value} מתוך 5 כוכבים`}
      className="whitespace-nowrap tracking-wide text-[#fbbc04]"
    >
      {"★".repeat(Math.round(value))}
      <span className="text-border">{"★".repeat(5 - Math.round(value))}</span>
    </span>
  );
}

export function TestimonialsGoogleSection({ data }: { data: GoogleReviewsData }) {
  return (
    <section className="section-padding border-y border-border bg-card">
      <div className="container-main">
        <div className="mb-10 flex flex-col gap-2">
          <p className="text-sm font-bold text-[var(--color-brand-gold-text)]">לקוחות מספרים</p>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">מה אומרים עליי בגוגל</h2>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <GoogleG className="h-7 w-7" />
            <span className="text-3xl font-bold text-foreground">{data.rating.toFixed(1)}</span>
            <span className="text-xl">
              <Stars value={data.rating} />
            </span>
            <span className="text-muted-foreground">· {data.total} ביקורות בגוגל</span>
          </div>
        </div>

        <ul className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.reviews.map((review, i) => (
            <li key={review.id}>
              <figure className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6">
                <figcaption className="flex items-center gap-3">
                  {review.photo ? (
                    <Image
                      src={review.photo}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-white"
                      style={{ backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                    >
                      {review.author.charAt(0)}
                    </span>
                  )}
                  <span className="flex min-w-0 flex-col">
                    <strong className="truncate text-base text-foreground">{review.author}</strong>
                    {review.relativeTime && (
                      <span className="text-sm text-muted-foreground">{review.relativeTime}</span>
                    )}
                  </span>
                  <GoogleG className="ms-auto h-5 w-5 shrink-0" />
                </figcaption>
                <Stars value={review.rating} />
                <ReviewText text={review.text} />
              </figure>
            </li>
          ))}
        </ul>

        {data.mapsUrl && (
          <div className="mt-8 flex justify-center">
            <a
              href={data.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium text-foreground transition-colors hover:bg-muted"
            >
              <GoogleG />
              לכל הביקורות בגוגל
              <span aria-hidden="true">←</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
